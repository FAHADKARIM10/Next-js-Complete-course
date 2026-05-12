import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  Download,
  Smartphone,
  Monitor,
  CheckCircle,
  XCircle,
  Shield,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { games, getGame, getRelatedGames } from "@/lib/games-data";
import { GamePageJsonLd } from "@/components/seo/JsonLd";
import GameCard from "@/components/games/GameCard";

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};

  return {
    title: `${game.name} – Download, Review & Expert Tips 2025`,
    description: `${game.description} Expert rating: ${game.rating}/5. Read our full review, download guide, and FAQs.`,
    keywords: game.tags,
    openGraph: {
      title: `${game.name} – Expert Review & Download Guide`,
      description: game.description,
      type: "article",
    },
  };
}

function StarRating({ rating, large }: { rating: number; large?: boolean }) {
  const size = large ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${
            star <= Math.floor(rating)
              ? "fill-primary text-primary"
              : star - 0.5 <= rating
              ? "fill-primary/50 text-primary"
              : "fill-muted text-muted"
          }`}
        />
      ))}
      <span className={`ml-1 font-semibold ${large ? "text-lg" : "text-sm"}`}>
        {rating.toFixed(1)}/5
      </span>
    </div>
  );
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const related = getRelatedGames(game);

  return (
    <>
      <GamePageJsonLd game={game} />

      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/games" className="hover:text-foreground">
              Games
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{game.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero card */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-4xl">
                    {game.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h1 className="text-2xl font-extrabold sm:text-3xl">
                        {game.name}
                      </h1>
                      {game.featured && (
                        <Badge className="bg-primary text-primary-foreground">
                          Editor's Pick
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{game.tagline}</p>
                    <StarRating rating={game.rating} large />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Based on {game.totalReviews.toLocaleString()} player reviews
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 text-center">
                  {[
                    { label: "Developer", value: game.developer.split(" ")[0] },
                    { label: "Category", value: game.category },
                    { label: "Downloads", value: game.downloads },
                    { label: "Min Deposit", value: game.minDeposit },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border bg-secondary p-3"
                    >
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="mt-0.5 text-sm font-semibold truncate">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Welcome bonus */}
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Welcome Bonus
                    </p>
                    <p className="text-lg font-bold">{game.welcomeBonus}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Terms & conditions apply. 18+ only. Gamble responsibly.
                    </p>
                  </div>
                  <a
                    href={game.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                  >
                    <Button className="shrink-0 gap-1.5 font-semibold">
                      Claim Bonus
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* About */}
              <section>
                <h2 className="mb-4 text-xl font-bold">About {game.name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {game.longDescription}
                </p>
              </section>

              <Separator />

              {/* Screenshots */}
              <section>
                <h2 className="mb-4 text-xl font-bold">
                  {game.name} Screenshots
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {game.screenshots.map((shot, i) => (
                    <div
                      key={i}
                      className="aspect-[9/16] overflow-hidden rounded-lg border border-border bg-secondary"
                    >
                      <div className="flex h-full w-full items-center justify-center p-2 text-center text-xs text-muted-foreground">
                        {shot.alt}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Actual screenshots from {game.name} — images will be loaded once provided.
                </p>
              </section>

              <Separator />

              {/* Download Guide */}
              <section id="download">
                <h2 className="mb-2 text-xl font-bold">
                  How to Download {game.name}
                </h2>
                <p className="mb-5 text-muted-foreground">
                  Follow the steps below for your platform. The process takes
                  under 5 minutes.
                </p>

                <Tabs defaultValue="android">
                  <TabsList className="mb-5">
                    {game.platforms.includes("android") && (
                      <TabsTrigger value="android" className="gap-1.5">
                        <Smartphone className="h-4 w-4" />
                        Android
                      </TabsTrigger>
                    )}
                    {game.platforms.includes("ios") && (
                      <TabsTrigger value="ios" className="gap-1.5">
                        <Smartphone className="h-4 w-4" />
                        iOS
                      </TabsTrigger>
                    )}
                    {game.platforms.includes("web") && (
                      <TabsTrigger value="web" className="gap-1.5">
                        <Monitor className="h-4 w-4" />
                        PC / Web
                      </TabsTrigger>
                    )}
                  </TabsList>

                  {game.platforms.includes("android") && (
                    <TabsContent value="android">
                      <ol className="space-y-4">
                        {[
                          `Visit the official ${game.name} website or the casino that hosts it on your Android browser.`,
                          "Tap the 'Download APK' or 'Download for Android' button.",
                          "If prompted, go to Settings → Security → enable 'Install from unknown sources' (or 'Allow from this source').",
                          "Open your Downloads folder and tap the downloaded APK file.",
                          "Follow the on-screen installation prompts and tap 'Install'.",
                          "Open the app, create your account or log in, and make your first deposit to claim the welcome bonus.",
                        ].map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                              {i + 1}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-5">
                        <a
                          href={game.androidLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                        >
                          <Button className="gap-2 font-semibold">
                            <Download className="h-4 w-4" />
                            Download for Android
                          </Button>
                        </a>
                      </div>
                    </TabsContent>
                  )}

                  {game.platforms.includes("ios") && (
                    <TabsContent value="ios">
                      <ol className="space-y-4">
                        {[
                          `Open the Apple App Store on your iPhone or iPad.`,
                          `Search for '${game.name}' in the search bar.`,
                          "Tap 'Get' next to the official app listing (verify the developer name matches).",
                          "Authenticate with Face ID, Touch ID, or your Apple ID password.",
                          "Wait for the download to complete — the app icon will appear on your home screen.",
                          "Open the app, register or log in, and claim your welcome bonus.",
                        ].map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                              {i + 1}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-5">
                        <a
                          href={game.iosLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                        >
                          <Button className="gap-2 font-semibold">
                            <Download className="h-4 w-4" />
                            Download for iOS
                          </Button>
                        </a>
                      </div>
                    </TabsContent>
                  )}

                  {game.platforms.includes("web") && (
                    <TabsContent value="web">
                      <ol className="space-y-4">
                        {[
                          `Open any modern browser (Chrome, Firefox, Edge, Safari) on your PC or Mac.`,
                          `Navigate to the official ${game.name} website using the link below.`,
                          "Click 'Play Now' or 'Register' to create your account.",
                          "Complete KYC verification with a valid government ID.",
                          "Make your first deposit and the welcome bonus will be credited automatically.",
                          "Find the game in the lobby and click to start playing instantly — no download required.",
                        ].map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                              {i + 1}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-5">
                        <a
                          href={game.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                        >
                          <Button className="gap-2 font-semibold">
                            <ExternalLink className="h-4 w-4" />
                            Play on PC / Web
                          </Button>
                        </a>
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
              </section>

              <Separator />

              {/* Features */}
              <section>
                <h2 className="mb-4 text-xl font-bold">Key Features</h2>
                <ul className="space-y-2.5">
                  {game.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <Separator />

              {/* Pros & Cons */}
              <section>
                <h2 className="mb-4 text-xl font-bold">Pros & Cons</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
                    <p className="mb-3 text-sm font-semibold text-green-400">
                      Pros
                    </p>
                    <ul className="space-y-2">
                      {game.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                          <span className="text-sm text-muted-foreground">
                            {pro}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                    <p className="mb-3 text-sm font-semibold text-red-400">
                      Cons
                    </p>
                    <ul className="space-y-2">
                      {game.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                          <span className="text-sm text-muted-foreground">
                            {con}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              {/* Expert Review */}
              <section>
                <h2 className="mb-4 text-xl font-bold">
                  Our Expert Verdict
                </h2>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {game.expertName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold">{game.expertName}</p>
                      <p className="text-xs text-muted-foreground">
                        {game.expertTitle}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <StarRating rating={game.rating} />
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4 text-sm text-muted-foreground leading-relaxed italic">
                    &ldquo;{game.expertReview}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Last updated:{" "}
                    {new Date(game.lastUpdated).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </section>

              <Separator />

              {/* FAQs */}
              <section>
                <h2 className="mb-4 text-xl font-bold">
                  Frequently Asked Questions
                </h2>
                <Accordion multiple={false} className="space-y-2">
                  {game.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-lg border border-border bg-card px-4"
                    >
                      <AccordionTrigger className="text-sm font-medium text-left hover:no-underline hover:text-primary py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Sticky CTA */}
              <div className="rounded-xl border border-primary/30 bg-card p-5 sticky top-20">
                <div className="mb-3 text-center">
                  <div className="mb-2 text-3xl">{game.icon}</div>
                  <h3 className="font-bold">{game.name}</h3>
                  <StarRating rating={game.rating} />
                </div>
                <div className="my-4 rounded-md bg-primary/10 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Welcome Offer</p>
                  <p className="mt-0.5 text-sm font-bold text-primary">
                    {game.welcomeBonus}
                  </p>
                </div>
                <a
                  href={game.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="block"
                >
                  <Button className="w-full gap-1.5 font-semibold">
                    Play Now
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <a
                    href={game.androidLink}
                    rel="nofollow sponsored"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-1 text-xs">
                      <Download className="h-3 w-3" />
                      Android
                    </Button>
                  </a>
                  <a
                    href={game.iosLink}
                    rel="nofollow sponsored"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-1 text-xs">
                      <Download className="h-3 w-3" />
                      iOS
                    </Button>
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  <span>Licensed & Regulated Platform</span>
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  T&Cs apply. 18+ only.
                </p>
              </div>

              {/* Game Info */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="mb-3 font-semibold">Game Details</h3>
                <dl className="space-y-2.5 text-sm">
                  {[
                    { label: "Developer", value: game.developer },
                    { label: "Version", value: game.version },
                    { label: "Size", value: game.size },
                    { label: "Platforms", value: game.platforms.join(", ").toUpperCase() },
                    { label: "Since", value: game.established },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="font-medium text-right truncate max-w-[60%]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>

          {/* Related Games */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-6 text-xl font-bold">You May Also Like</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((g, i) => (
                  <GameCard key={g.id} game={g} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <div className="mt-10 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
            <strong className="text-foreground">Affiliate Disclosure:</strong>{" "}
            This page contains affiliate links. We may receive a commission when you
            register through our links at no extra cost to you. Our expert rating and
            review are independent of any commercial relationship. Gambling involves
            financial risk — always gamble responsibly.
          </div>
        </div>
      </div>
    </>
  );
}
