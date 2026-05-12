import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Casino Blog – Strategy Guides, Tips & Industry News",
  description:
    "Expert casino strategy guides, game tips, bonus hunting techniques, and the latest industry news. Written by certified gaming analysts.",
};

const posts = [
  {
    slug: "/games/aviator",
    category: "Crash Games",
    title: "Aviator Game Strategy Guide 2025: How to Win More Often",
    excerpt:
      "Our analysts tested Aviator across 1,000+ rounds to build a data-backed strategy guide. Learn optimal auto cash-out settings, bankroll management rules, and when to use the double-bet feature.",
    date: "May 5, 2025",
    readTime: "10 min read",
    author: "Rahul Sharma",
  },
  {
    slug: "/games/teen-patti-gold",
    category: "Card Games",
    title: "Teen Patti Gold: The Complete Beginner's Guide",
    excerpt:
      "From understanding hand rankings to mastering Joker and AK47 variants, this guide covers everything you need to start winning at Teen Patti Gold.",
    date: "April 28, 2025",
    readTime: "8 min read",
    author: "Priya Mehta",
  },
  {
    slug: "/games/blackjack-pro",
    category: "Table Games",
    title: "Basic Strategy Blackjack Chart: Cut the House Edge to 0.5%",
    excerpt:
      "The blackjack basic strategy chart tells you the mathematically correct decision for every hand combination. Master it and reduce the house edge to under 0.5%.",
    date: "April 18, 2025",
    readTime: "12 min read",
    author: "Sanjay Malhotra",
  },
  {
    slug: "/games/lucky-slots",
    category: "Slots",
    title: "10 Highest RTP Slots Available in India (2025)",
    excerpt:
      "We analyzed 200+ slot games and ranked the top 10 by RTP, volatility, and mobile performance. Find out which games give you the best long-term return.",
    date: "April 10, 2025",
    readTime: "9 min read",
    author: "Karan Patel",
  },
  {
    slug: "/games/roulette-royale",
    category: "Table Games",
    title: "European vs American vs French Roulette: Which Should You Play?",
    excerpt:
      "The roulette variant you choose dramatically changes your expected loss. We break down the house edge, La Partage rule, and which variant you should always pick.",
    date: "April 3, 2025",
    readTime: "7 min read",
    author: "Neha Sharma",
  },
  {
    slug: "/games/rummy-circle",
    category: "Card Games",
    title: "How to Win at Online Rummy: 7 Strategies From Pro Players",
    excerpt:
      "Pro rummy players think differently. Learn 7 tactics including card sequencing, opponent tracking, and when to drop — straight from tournament champions.",
    date: "March 25, 2025",
    readTime: "11 min read",
    author: "Arjun Kapoor",
  },
];

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Blog</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Casino Blog</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Expert strategy guides, game tutorials, and the latest online casino news — all written by our certified gaming analysts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={post.slug} className="group block">
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="mb-2 font-semibold leading-snug group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {post.date}
                  </div>
                  <span>By {post.author}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
