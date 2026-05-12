import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedGames from "@/components/home/FeaturedGames";
import WhyUs from "@/components/home/WhyUs";
import LatestReviews from "@/components/home/LatestReviews";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <FeaturedGames />
      <WhyUs />
      <LatestReviews />

      {/* Responsible gambling notice */}
      <section className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Responsible Gambling Notice: </strong>
              Gambling should be entertaining, not a way to make money. Only gamble with money you can afford to lose. If gambling is impacting your life negatively, seek help immediately.{" "}
              <Link
                href="/responsible-gambling"
                className="font-medium text-primary hover:underline"
              >
                View our resources →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
}
