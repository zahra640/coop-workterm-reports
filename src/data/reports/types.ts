// Shape of a single work-term report's content.
//
// Everything here is words only — no numbering, no ids, no markup. Section
// numbers ("01"), anchor ids ("s01") and goal numbers are all derived from
// array order when the report renders, so adding or reordering a section
// never means renumbering anything by hand.

export type Goal = {
    /** Short label on the pill, e.g. "Met" or "Partly met". */
    status: string;
    /** Drives the pill colour: green for met, amber for partial. */
    met: "met" | "partial";
    title: string;
    /** One-line summary shown on the card. */
    teaser: string;
    /** The four blocks of the expanded dialog. */
    goal: string;
    actions: string;
    measure: string;
    reflection: string;
};

/** The three-up cards used in "The employer". */
export type Callout = {
    label: string;
    value: string;
    detail: string;
};

/** The tech-stack style table. Each row must match `columns` in length. */
export type ReportTable = {
    columns: string[];
    rows: string[][];
};


/**
 * One numbered section. Body parts render in a fixed order:
 * paragraphs → callouts → goals → table. Omit whatever the section
 * doesn't need; most sections are paragraphs alone.
 */
export type ReportSection = {
    title: string;
    paragraphs: string[];
    callouts?: Callout[];
    goals?: Goal[];
    table?: ReportTable;
};

export type ReportContent = {
    /** Small italic line above the title. The term's date range is appended. */
    eyebrow: string;
    title: string;
    /** The 2×2 grid beside the title. Four entries fits the layout. */
    facts: { label: string; value: string }[];
    sections: ReportSection[];
};
