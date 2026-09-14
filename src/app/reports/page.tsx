// src/app/reports/page.tsx
import Link from "next/link";
import {
    terms,
    termStatus,
    PLACEHOLDER,
    type Badge as BadgeValue,
} from "@/data/terms";
import { BadgeContent } from "@/components/badge";
import styles from "./page.module.css";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

function Badge({
                   badge,
                   company,
                   muted,
               }: {
    badge: BadgeValue;
    company: string;
    muted?: boolean;
}) {
    return (
        <div className={cx(styles.badge, muted && styles.badgeMuted)}>
            <BadgeContent badge={badge} alt={`${company} logo`} size={48} />
        </div>
    );
}

export default function ReportsIndex() {
    return (
        <main className={styles.page}>
            <div className={styles.wrap}>
                <h1 className={styles.h1}>Work Term Reports</h1>

                <div className={styles.grid}>
                    {terms.map((t) =>
                        termStatus(t).published ? (
                            <Link key={t.slug} href={`/reports/${t.slug}`} className={styles.card}>
                                <Badge badge={t.badge} company={t.company} />
                                <div className={styles.meta}>
                                    {t.code} · {t.range}
                                </div>
                                <h2 className={styles.co}>{t.company}</h2>
                                <p className={styles.role}>{t.role}</p>
                                <div className={styles.tags}>
                                    {t.tags?.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <span className={styles.open}>Read report →</span>
                            </Link>
                        ) : (
                            <div key={t.slug} className={cx(styles.card, styles.up)}>
                                <Badge badge={t.badge} company={t.company} muted />
                                <div className={styles.meta}>
                                    {t.code} · {t.range}
                                </div>
                                <h2 className={cx(styles.co, styles.coMuted)}>{t.company}</h2>
                                <p className={styles.empty}>{PLACEHOLDER}</p>
                                <span className={styles.status}>{termStatus(t).label}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </main>
    );
}
