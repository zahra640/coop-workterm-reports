import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Browser tab and in link previews
export const metadata: Metadata = {
  title: "Zahra Hussain Co-op Work Term Reports",
  description:
      "A record of every co-op work term.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
      <header className="site-nav">
        <Link href="/" className="brand">
          <span className="brand-mark" />
          Zahra Hussain
        </Link>
        <nav className="nav-links">
          <Link href="/reports">Reports</Link>
        </nav>
      </header>

      {children}
      </body>
      </html>
  );
}