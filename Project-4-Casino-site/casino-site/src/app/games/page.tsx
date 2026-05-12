import type { Metadata } from "next";
import { games } from "@/lib/games-data";
import GameCard from "@/components/games/GameCard";

export const metadata: Metadata = {
  title: "All Casino Games – Reviews, Download Guides & Bonuses",
  description:
    "Browse all 10+ casino games reviewed by our experts. Get download guides, RTP info, bonus offers, and winning strategies for every game.",
  openGraph: {
    title: "All Casino Games – CasinoGuide Expert Reviews",
    description: "Find and download India's top casino games with expert reviews.",
  },
};

const categories = [...new Set(games.map((g) => g.category))];

export default function GamesPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li><a href="/" className="hover:text-foreground">Home</a></li>
              <li>/</li>
              <li className="text-foreground">All Games</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-extrabold sm:text-4xl">All Casino Games</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every game reviewed and rated by our certified experts. We cover download guides, RTP analysis, bonus offers, and honest gameplay assessments.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <span className="rounded-full border border-primary bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            All ({games.length})
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
            >
              {cat} ({games.filter((g) => g.category === cat).length})
            </span>
          ))}
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> All game reviews are for informational purposes. Gambling involves financial risk. Please read our{" "}
          <a href="/responsible-gambling" className="underline hover:text-foreground">
            responsible gambling guide
          </a>{" "}
          before playing.
        </div>
      </div>
    </div>
  );
}
