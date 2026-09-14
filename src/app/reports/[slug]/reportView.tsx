"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { termStatus, PLACEHOLDER, type Term } from "@/data/terms";
import { getReport } from "@/data/reports";
import type { Goal } from "@/data/reports/types";
import { BadgeContent } from "@/components/badge";
import styles from "./report.module.css";

const cx = (...c: (string | false | null | undefined)[]) =>
    c.filter(Boolean).join(" ");

// Section numbers and anchor ids come from array order, so a report's content
// file never has to keep its own numbering in sync.
const pad = (i: number) => String(i + 1).padStart(2, "0");
const anchorId = (i: number) => `s${pad(i)}`;

export default function ReportView({ term }: { term: Term }) {
    const [openGoal, setOpenGoal] = useState<number | null>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

    const content = getReport(term.slug);
    const goals: Goal[] = content?.sections.flatMap((s) => s.goals ?? []) ?? [];

    // scroll reveal + contents highlighting
    useEffect(() => {
        const root = bodyRef.current;
        if (!root) return;

        const reveals = root.querySelectorAll<HTMLElement>("[data-reveal]");
        const revObs = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add(styles.in);
                        revObs.unobserve(e.target);
                    }
                }),
            { rootMargin: "0px 0px -12% 0px" }
        );
        reveals.forEach((el) => revObs.observe(el));

        const links = Array.from(
            root.querySelectorAll<HTMLElement>("[data-sec]")
        );
        const spy = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        links.forEach((l) =>
                            l.classList.toggle(styles.on, l.dataset.sec === e.target.id)
                        );
                    }
                }),
            { rootMargin: "-35% 0px -55% 0px" }
        );
        root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
            if (el.id) spy.observe(el);
        });

        return () => {
            revObs.disconnect();
            spy.disconnect();
        };
    }, [content]);

    // Escape closes the dialog
    // The dialog node is reused when stepping between goals, so it keeps the
    // previous goal's scroll position — send it back to the top on every change.
    useEffect(() => {
        dialogRef.current?.scrollTo({ top: 0 });
    }, [openGoal]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenGoal(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // A term that exists but has no written report yet
    if (!termStatus(term).published || !content) {
        return (
            <main className={styles.page}>
                <div className={styles.wrap}>
                    <Link href="/reports" className={styles.back}>
                        ← Back to reports
                    </Link>
                    <div className={styles.upcoming}>
                        <div className={styles.upStatus}>{termStatus(term).label}</div>
                        <h1 className={styles.upTitle}>{term.company}</h1>
                        <p className={styles.upMeta}>
                            {term.code} · {term.range}
                        </p>
                        <p className={styles.upEmpty}>{PLACEHOLDER}</p>
                    </div>
                </div>
            </main>
        );
    }

    const activeGoal = openGoal !== null ? goals[openGoal] : null;
    const step = (d: number) =>
        setOpenGoal((cur) =>
            cur === null ? null : (cur + d + goals.length) % goals.length
        );
    // Index of each goal within the flat list, so the dialog opens the right one.
    let goalCursor = 0;

    return (
        <main className={styles.page}>
            <div className={styles.wrap}>
                <Link href="/reports" className={styles.back}>
                    ← Back to reports
                </Link>

                <div className={styles.hero}>
                    <div>
                        <div
                            className={cx(
                                styles.badge,
                                term.badge.kind === "logo" && styles.hasLogo
                            )}
                        >
                            <BadgeContent
                                badge={term.badge}
                                alt={`${term.company} logo`}
                                size={58}
                            />
                        </div>
                        <div className={styles.eyebrow}>
                            {content.eyebrow} · {term.range}
                        </div>
                        <h1 className={styles.title}>{content.title}</h1>
                    </div>
                    <div className={styles.facts}>
                        {content.facts.map((f) => (
                            <div className={styles.fact} key={f.label}>
                                <div className={styles.factLabel}>{f.label}</div>
                                <div className={styles.factValue}>{f.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.body} ref={bodyRef}>
                    <nav className={styles.contents}>
                        <div className={styles.contentsLabel}>Contents</div>
                        <ul>
                            {content.sections.map((sec, i) => (
                                <li key={anchorId(i)}>
                                    <a href={`#${anchorId(i)}`} data-sec={anchorId(i)}>
                                        <span className={styles.contentsNum}>{pad(i)}</span>
                                        {sec.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        {content.sections.map((sec, i) => (
                            <section
                                className={styles.sec}
                                id={anchorId(i)}
                                key={anchorId(i)}
                                data-reveal
                            >
                                <div className={styles.secH}>
                                    <span className={styles.num}>{pad(i)}</span>
                                    <h2>{sec.title}</h2>
                                </div>

                                {sec.paragraphs.map((p) => (
                                    <p key={p.slice(0, 40)}>{p}</p>
                                ))}

                                {sec.callouts && (
                                    <div className={styles.callouts}>
                                        {sec.callouts.map((c) => (
                                            <div className={styles.callout} key={c.label}>
                                                <div className={styles.calloutLabel}>{c.label}</div>
                                                <div className={styles.calloutValue}>{c.value}</div>
                                                <div className={styles.calloutDetail}>{c.detail}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {sec.goals && (
                                    <div className={styles.goals}>
                                        {sec.goals.map((goal) => {
                                            const idx = goalCursor++;
                                            return (
                                                <button
                                                    key={goal.title}
                                                    type="button"
                                                    className={styles.goalCard}
                                                    onClick={() => setOpenGoal(idx)}
                                                >
                                                    <div className={styles.gcTop}>
                            <span className={styles.gcTag}>
                              Goal {pad(idx)}
                            </span>
                                                        <span
                                                            className={cx(styles.gcMet, styles[goal.met])}
                                                        >
                              {goal.status}
                            </span>
                                                    </div>
                                                    <h4>{goal.title}</h4>
                                                    <div className={styles.gcTeaser}>{goal.teaser}</div>
                                                    <div className={styles.gcOpen}>
                                                        Read the full goal →
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}

                                {sec.table && (
                                    <table className={styles.tbl}>
                                        <thead>
                                        <tr>
                                            {sec.table.columns.map((col) => (
                                                <th key={col}>{col}</th>
                                            ))}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {sec.table.rows.map((row) => (
                                            <tr key={row[0]}>
                                                {row.map((cell, ci) => (
                                                    <td key={ci}>{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </div>

            {/* goal dialog */}
            <div
                className={cx(styles.backdrop, activeGoal && styles.open)}
                onClick={(e) => e.target === e.currentTarget && setOpenGoal(null)}
            >
                {activeGoal && openGoal !== null && (
                    <div ref={dialogRef} className={styles.dialog} role="dialog" aria-modal="true">
                        <div className={styles.dgTop}>
                            <div className={styles.dgTag}>
                                Goal {pad(openGoal)} of {pad(goals.length - 1)} · {activeGoal.status}
                            </div>
                            <button
                                type="button"
                                className={styles.dgClose}
                                onClick={() => setOpenGoal(null)}
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>
                        <h3>{activeGoal.title}</h3>
                        <div className={styles.dgBlock}>
                            <div className={styles.blockLabel}>Goal</div>
                            <p>{activeGoal.goal}</p>
                        </div>
                        <div className={styles.dgBlock}>
                            <div className={styles.blockLabel}>Action plan</div>
                            <p>{activeGoal.actions}</p>
                        </div>
                        <div className={styles.dgBlock}>
                            <div className={styles.blockLabel}>Measure of Success</div>
                            <p>{activeGoal.measure}</p>
                        </div>
                        <div className={styles.dgBlock}>
                            <div className={styles.blockLabel}>Reflection</div>
                            <p>{activeGoal.reflection}</p>
                        </div>
                        <div className={styles.dgNav}>
                            <button
                                type="button"
                                className={styles.dgBtn}
                                onClick={() => step(-1)}
                            >
                                ← Previous
                            </button>
                            <button
                                type="button"
                                className={styles.dgBtn}
                                onClick={() => step(1)}
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
