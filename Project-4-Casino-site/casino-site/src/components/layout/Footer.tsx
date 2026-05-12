import Link from "next/link";
import { Spade } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const gameLinks = [
  { href: "/games/aviator", label: "Aviator" },
  { href: "/games/teen-patti-gold", label: "Teen Patti Gold" },
  { href: "/games/rummy-circle", label: "RummyCircle" },
  { href: "/games/pokerbaazi", label: "PokerBaazi" },
  { href: "/games/lucky-slots", label: "Lucky Slots" },
];

const infoLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Casino Blog" },
  { href: "/responsible-gambling", label: "Responsible Gambling" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Spade className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                Casino<span className="text-primary">Guide</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert reviews, download guides, and strategies for the top online casino games. We help you play smarter.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5">
              <span className="text-xs font-semibold text-primary">18+</span>
              <span className="text-xs text-muted-foreground">Gamble Responsibly</span>
            </div>
          </div>

          {/* Top Games */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Top Games
            </h3>
            <ul className="space-y-2.5">
              {gameLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/games"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View all games →
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Information
            </h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Disclaimer */}
        <div className="rounded-lg border border-border bg-secondary p-4 text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Affiliate Disclosure & Disclaimer:</strong> CasinoGuide contains affiliate links. We may earn a commission if you register through our links at no extra cost to you. Our reviews are independent and unbiased. Online gambling involves financial risk. You must be 18 years or older to use this site. Gambling may not be legal in your jurisdiction — check local laws before playing. If gambling is causing you harm, call the{" "}
          <strong>National Problem Gambling Helpline</strong> or visit{" "}
          <Link href="/responsible-gambling" className="underline hover:text-foreground">
            our responsible gambling page
          </Link>
          .
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CasinoGuide. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            For entertainment and informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
