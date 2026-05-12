import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const posts = [
  {
    href: "/games/aviator",
    badge: "Crash Game",
    title: "Aviator Review 2025: Is It Worth Playing?",
    excerpt:
      "We tested Aviator over 500+ rounds to bring you the definitive verdict on its RTP, volatility, and whether the auto cash-out feature really works.",
    date: "May 5, 2025",
    readTime: "8 min read",
  },
  {
    href: "/games/teen-patti-gold",
    badge: "Card Game",
    title: "Teen Patti Gold: Complete Beginner's Guide",
    excerpt:
      "Everything new players need to know about Teen Patti Gold — from downloading the app to mastering Joker and AK47 variants.",
    date: "April 28, 2025",
    readTime: "6 min read",
  },
  {
    href: "/games/lucky-slots",
    badge: "Slots",
    title: "Best High-RTP Slots Available in India (2025)",
    excerpt:
      "We ranked the top 10 slots by RTP, volatility, and mobile performance. Gates of Olympus, Sweet Bonanza, and more — all analyzed.",
    date: "April 20, 2025",
    readTime: "10 min read",
  },
];

export default function LatestReviews() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-medium text-primary">Expert Insights</p>
            <h2 className="text-2xl font-bold sm:text-3xl">Latest Reviews & Guides</h2>
          </div>
          <Link href="/blog" className="hidden sm:block shrink-0">
            <Button variant="outline" size="sm" className="gap-1.5">
              All Articles
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="group block">
              <article className="h-full rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {post.badge}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                <h3 className="mb-2 font-semibold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-medium text-primary">
                  {post.readTime} →
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
