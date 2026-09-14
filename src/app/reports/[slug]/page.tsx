// src/app/reports/[slug]/page.tsx
import { notFound } from "next/navigation";
import { terms } from "@/data/terms";
import ReportView from "./reportView";

// Pre-generate a page for every known term at build time (optional but nice).
export function generateStaticParams() {
    return terms.map((t) => ({ slug: t.slug }));
}

export default async function ReportPage({
                                             params,
                                         }: PageProps<"/reports/[slug]">) {
    const { slug } = await params;
    const term = terms.find((t) => t.slug === slug);

    if (!term) notFound(); // unknown slug → 404

    return <ReportView term={term} />;
}
