// src/app/reports/page.tsx
import Link from "next/link";
import Image from "next/image";
import { terms } from "@/data/terms";
import styles from "./page.module.css";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

// Renders a logo image when badge is a path ("/logos/x.png"),
// otherwise falls back to the text (initials or "—").
function Badge({ badge, muted }: { badge?: string; muted?: boolean }) {
    const isImage = badge?.startsWith("/");
    return (
        <div className={cx(styles.badge, muted && styles.badgeMuted)}>
            {isImage ? (
                <Image src={badge!} alt="" width={48} height={48} />
            ) : (
                <span>{badge ?? "—"}</span>
            )}
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
                        t.published ? (
                            <Link key={t.slug} href={`/reports/${t.slug}`} className={styles.card}>
                                <Badge badge={t.badge} />
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
                                <Badge badge={t.badge} muted />
                                <div className={styles.meta}>
                                    {t.code} · {t.range}
                                </div>
                                <h2 className={cx(styles.co, styles.coMuted)}>{t.company}</h2>
                                <p className={styles.empty}>{t.empty}</p>
                                <span className={styles.status}>{t.status}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </main>
    );
}