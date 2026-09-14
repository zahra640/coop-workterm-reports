"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { terms, termStatus, PLACEHOLDER, type Term } from "@/data/terms";
import { BadgeContent } from "@/components/badge";
import styles from "./page.module.css";

//helper to join class names conditionally
const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

// Term.state -> CSS Module key. Kept explicit so a renamed state fails loudly
// in TypeScript instead of silently resolving to `undefined` at runtime.
const stateClass: Record<Term["state"], string> = {
    Done: styles.done,
    Current: styles.current,
    Future: styles.future,
};

// A term that hasn't started yet tints the status line; the others keep the default colour.
const statusClass = (state: Term["state"]) =>
    state === "Future" ? styles.up : undefined;

export default function Home() {
    const [selected, setSelected] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const [rail, setRail] = useState({left: 0, width: 0, top: 0});
    const [fill, setFill] = useState({left: 0, width: 0, top: 0});

    useLayoutEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            if (!track) return;
            const bullets = track.querySelectorAll<HTMLElement>("[data-bullet]");
            if (!bullets.length) return;

            // Measure against .trackH itself — the rail is positioned against it,
            // while offsetLeft/offsetTop would resolve against .nodes and land
            // one padding-box off.
            const base = track.getBoundingClientRect();
            const centerOf = (el: HTMLElement) => {
                const r = el.getBoundingClientRect();
                return {
                    x: r.left - base.left + r.width / 2,
                    y: r.top - base.top + r.height / 2,
                };
            };

            const first = centerOf(bullets[0]);
            const last = centerOf(bullets[bullets.length - 1]);

            // The green fill ends on the last completed term's bullet — it only
            // advances when a term is actually marked Done, never part-way.
            const lastDone = terms.reduce(
                (acc, t, i) => (t.state === "Done" ? i : acc),
                -1
            );
            const doneX = lastDone >= 0 ? centerOf(bullets[lastDone]).x : first.x;

            setRail({left: first.x, width: last.x - first.x, top: first.y - 1});
            setFill({
                left: first.x,
                width: Math.max(0, doneX - first.x),
                top: first.y - 1,
            });
        };

        measure();

        // Web fonts change label widths, which moves the bullets — re-measure
        // once they land, and on any later resize of the track.
        document.fonts?.ready.then(measure);
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        window.addEventListener("resize", measure);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    const term = terms[selected];

    return (
        <main className={styles.page}>
            <div className={styles.wrap}>
                <p className={cx(styles.eyebrow, styles.anim, styles.d1)}>
                    Software Engineering Co-op @ University of Guelph
                </p>
                <h1 className={cx(styles.heroH1, styles.anim, styles.d2)}>
                    Zahra Hussain - Co-op Workterm Reports
                </h1>
            </div>

            <div className={styles.wrap}>
                <div className={cx(styles.trackScroll, styles.anim, styles.d4)}>
                    <div className={styles.trackH} ref={trackRef}>
                        <div
                            className={styles.rail}
                            style={{ left: rail.left, width: rail.width, top: rail.top }}
                        />
                        <div
                            className={styles.railFill}
                            style={{ left: fill.left, width: fill.width, top: fill.top }}
                        />
                        <div className={styles.nodes}>
                            {terms.map((t, i) => (
                                <button
                                    key={t.slug}
                                    type="button"
                                    className={cx(
                                        styles.node,
                                        stateClass[t.state],
                                        i === selected && styles.active
                                    )}
                                    style={{ animationDelay: `${0.3 + i * 0.09}s` }}
                                    onClick={() => setSelected(i)}
                                >
                                    <span className={styles.bullet} data-bullet>
                                        <i />
                                    </span>
                                    <span className={styles.lab}>
                                        <span className={styles.code}>{t.code}</span>
                                        <span className={styles.rng}>{t.range}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* detail panel — reacts to the selected node */}
                <div className={styles.detail} key={selected}>
                    <div
                        className={cx(
                            styles.dBadge,
                            term.badge.kind === "logo"
                                ? styles.hasLogo
                                : !termStatus(term).published && styles.muted
                        )}
                    >
                        <BadgeContent
                            badge={term.badge}
                            alt={`${term.company} logo`}
                            size={64}
                        />
                    </div>
                    <div className={styles.dMain}>
                        <div className={cx(styles.dStatus, statusClass(term.state))}>
                            {termStatus(term).label}
                        </div>
                        <h2>{term.company}</h2>
                        <div className={styles.dMeta}>
                            {term.code} · {term.range}
                        </div>
                        {termStatus(term).published ? (
                            <>
                                <p className={styles.dRole}>{term.role}</p>
                                <div className={styles.dTags}>
                                    {term.tags?.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className={styles.dEmpty}>{PLACEHOLDER}</p>
                        )}
                    </div>
                    {termStatus(term).published && (
                        <div className={styles.dActions}>
                            <Link
                                href={`/reports/${term.slug}`}
                                className={cx(styles.btn, styles.btnPrimary, styles.cardLink)}
                            >
                                Read report
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
