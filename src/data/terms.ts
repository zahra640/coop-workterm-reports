export type Term = {
    slug: string;
    code: string;
    range: string;
    badge: string;
    company: string;
    status: "Completed" | "Upcoming" | "In Progress";
    state: "Done" | "Future" | "Current";
    role?: string;
    tags?: string[];
    empty?: string;
    published?: boolean;
}

export const terms: Term[] = [
    {
        slug: "Summer-2026",
        code: "S26",
        range: "May-Aug 2026",
        badge: "/logos/vehiklLogo.png",
        company: "Vehikl",
        status: "Completed",
        state: "Done",
        role: "Software Developer",
        tags: ["Laravel", "Vue 3", "Pairing", "Pest"],
        published: true,
    },
    {
        slug: "Fall-2026",
        code: "F26",
        range: "Sept-Dec 2026",
        badge: "/logos/vehiklLogo.png",
        company: "Vehikl",
        status: "In Progress",
        state: "Current",
        role: "Software Developer",
        tags: ["Laravel", "Vue 3", "Pairing", "Pest"],
        empty: "Not written yet. This report goes up within two weeks of the workterm ending.",
    },
    {
        slug: "Winter-2027",
        code: "W26",
        range: "Jan-Apr 2027",
        badge: "/logos/vehiklLogo.png",
        company: "Vehikl",
        status: "Upcoming",
        state: "Future",
        role: "Software Developer",
        tags: ["Laravel", "Vue 3", "Pairing", "Pest"],
        empty: "Not written yet. This report goes up within two weeks of the workterm ending.",
    },
    {
        slug: "Summer-2027",
        code: "S27",
        range: "May-Aug 2027",
        badge: "-",
        company: "Workterm 04",
        status: "Upcoming",
        state: "Future",
        empty: "Not written yet. This report goes up within two weeks of the workterm ending.",
    },
];

export const graduation = {
    code: "Graduating April 2029",
    range: "Software Engineering with an Area of Emphasis in Artificial Intelligence",
}

