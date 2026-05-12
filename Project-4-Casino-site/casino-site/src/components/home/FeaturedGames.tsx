import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GameCard from "@/components/games/GameCard";
import { games } from "@/lib/games-data";

export default function FeaturedGames() {
  const featured = games.slice(0, 6);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-medium text-primary">Expert Picks</p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Top Rated Casino Games
            </h2>
            <p className="mt-2 text-muted-foreground">
              Reviewed and ranked by our expert analysts based on RTP, fairness, and player experience.
            </p>
          </div>
          <Link href="/games" className="hidden sm:block shrink-0">
            <Button variant="outline" size="sm" className="gap-1.5">
              View All
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link href="/games">
            <Button variant="outline" className="gap-1.5">
              View All Games
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
