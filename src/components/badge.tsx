import Image from "next/image";
import type { Badge } from "@/data/terms";

// Renders what goes *inside* a badge square. The square itself stays with
// each caller, since the three surfaces size and tint it differently.
export function BadgeContent({
                                 badge,
                                 alt,
                                 size,
                             }: {
    badge: Badge;
    alt: string;
    size: number;
}) {
    if (badge.kind === "logo") {
        return <Image src={badge.src} alt={alt} width={size} height={size} />;
    }
    return <>{badge.text}</>;
}
