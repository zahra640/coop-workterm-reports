// Registry of written reports, keyed by the matching Term.slug in ../terms.ts.
//
// Adding a report is two lines: import the content file, add it to REPORTS.
// A term with no entry here has no written report yet — the term can still
// exist in terms.ts and get a page, it just renders the "not written" state.

import type { ReportContent } from "./types";
import summer2026 from "./summer-2026";

const REPORTS: Record<string, ReportContent> = {
    "Summer-2026": summer2026,
};


export function getReport(slug: string): ReportContent | null {
     return REPORTS[slug] ?? null;
}

export type { ReportContent } from "./types";
