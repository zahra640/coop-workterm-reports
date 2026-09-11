// A badge is either a logo to render or a short literal to typeset — the
// two cases are spelled out so render sites branch on `kind` instead of
// sniffing the string for a leading slash.
export type Badge =
    | { kind: "logo"; src: string }
    | { kind: "text"; text: string };

// Where a term sits in its lifecycle. This is the single source of truth:
// the human-facing status label and whether a report exists are both derived
// from it by `termStatus` below, rather than stored alongside and kept in sync.
export type TermState = "Done" | "Current" | "Future";

export type Term = {
    slug: string;
    code: string;
    range: string;
    badge: Badge;
    company: string;
    state: TermState;
    role?: string;
    tags?: string[];
};

// Shown on every term without a written report — identical for all of them,
// so it lives here once instead of being repeated per entry.
export const PLACEHOLDER =
    "Not written yet. This report goes up within two weeks of the workterm ending.";

// Term.state -> human-facing status label. A Record so adding a fourth state
// fails loudly in TypeScript instead of falling through to `undefined`.
const STATUS_LABELS: Record<TermState, string> = {
    Done: "Completed",
    Current: "In Progress",
    Future: "Upcoming",
};

// A report goes up once the term has finished, so publication is derived from
// state rather than stored. If a finished term ever needs to sit unpublished
// while it's being drafted, this is where that becomes its own field.
export function termStatus(term: Term): { label: string; published: boolean } {
    return {
        label: STATUS_LABELS[term.state],
        published: term.state === "Done",
    };
}

export const terms: Term[] = [
    {
        slug: "Summer-2026",
        code: "S26",
        range: "May-Aug 2026",
        badge: { kind: "logo", src: "/logos/vehiklLogo.png" },
        company: "Vehikl",
        state: "Done",
        role: "Software Developer",
        tags: ["Laravel", "Vue 3", "Pairing", "Pest"],
    },
    {
        slug: "Fall-2026",
        code: "F26",
        range: "Sept-Dec 2026",
        badge: { kind: "logo", src: "/logos/vehiklLogo.png" },
        company: "Vehikl",
        state: "Current",
        role: "Software Developer",
        tags: ["Laravel", "Vue 3", "Pairing", "Pest"],
    },
    {
        slug: "Winter-2027",
        code: "W26",
        range: "Jan-Apr 2027",
        badge: { kind: "logo", src: "/logos/vehiklLogo.png" },
        company: "Vehikl",
        state: "Future",
        role: "Software Developer",
        tags: ["Laravel", "Vue 3", "Pairing", "Pest"],
    },
    {
        slug: "Winter-2028",
        code: "W28",
        range: "Jan-Apr 2028",
        badge: { kind: "text", text: "-" },
        company: "Workterm 04",
        state: "Future",
    },
    {
        slug: "Summer-2028",
        code: "S28",
        range: "May-Aug 2028",
        badge: { kind: "text", text: "-" },
        company: "Workterm 05",
        state: "Future",
    },
];
