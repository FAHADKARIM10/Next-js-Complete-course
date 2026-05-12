import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight, Users, Award, BookOpen, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us – Our Review Methodology & Editorial Team",
  description:
    "Learn how CasinoGuide reviews casino games, who writes our reviews, and our commitment to independent, unbiased editorial standards.",
};

const reviewCriteria = [
  {
    step: "1",
    title: "Game Testing with Real Money",
    body: "Every game on this site is tested with actual deposits. We play for a minimum of 100 rounds/sessions before writing a review. No exceptions.",
  },
  {
    step: "2",
    title: "RTP & Fairness Verification",
    body: "We cross-reference published RTP values against independent auditor reports from eCOGRA, iTech Labs, and BMM Testlabs. We verify the random number generators are properly certified.",
  },
  {
    step: "3",
    title: "Bonus & Terms Analysis",
    body: "We read every line of the terms and conditions for welcome bonuses, wagering requirements, maximum cashout limits, and game restrictions.",
  },
  {
    step: "4",
    title: "Mobile & Performance Testing",
    body: "Every game is tested on both Android and iOS devices including older mid-range phones to ensure performance is acceptable for all users.",
  },
  {
    step: "5",
    title: "Withdrawal Testing",
    body: "We initiate test withdrawals to verify processing speeds and ensure the platform pays out without excessive delays or unjustified verification requirements.",
  },
  {
    step: "6",
    title: "Scoring & Publishing",
    body: "A minimum of two analysts independently score the game. Discrepancies are discussed before a final score is assigned. The review is then verified by our editorial director.",
  },
];

const team = [
  {
    name: "Rahul Sharma",
    title: "Senior Casino Games Analyst",
    bio: "8 years analyzing online casino games with a focus on crash games and live casino. Holds a certificate from the Gaming Standards Association.",
    specialty: "Crash Games, Live Casino",
  },
  {
    name: "Priya Mehta",
    title: "Card Games Specialist",
    bio: "Former professional Teen Patti and Rummy player turned reviewer. Has tested 100+ card game platforms across India and Southeast Asia.",
    specialty: "Teen Patti, Rummy, Poker",
  },
  {
    name: "Sanjay Malhotra",
    title: "Table Games Expert",
    bio: "Certified casino dealer with 6 years of experience at brick-and-mortar casinos. Brings inside knowledge of game mechanics and house edge calculations.",
    specialty: "Blackjack, Baccarat, Roulette",
  },
  {
    name: "Karan Patel",
    title: "Slots RTP Analyst",
    bio: "Data scientist specializing in slot RTP analysis. Maintains a database of 500+ slot games with actual vs. theoretical RTP tracking.",
    specialty: "Slots, Progressive Jackpots",
    
  },
];

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">About Us</span>
        </nav>

        <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">About CasinoGuide</h1>
        <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
          CasinoGuide was founded in 2017 with a single mission: to provide Indian players with honest, expert-backed casino game reviews in a landscape flooded with incentivized, unreliable content.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 mb-10">
          {[
            { icon: BookOpen, value: "50+", label: "Games Reviewed" },
            { icon: Users, value: "1M+", label: "Monthly Readers" },
            { icon: Award, value: "8 yrs", label: "Industry Experience" },
            { icon: Clock, value: "Monthly", label: "Review Updates" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-primary">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Our Mission */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Our Mission & Editorial Standards</h2>
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              We believe every player deserves access to accurate, transparent information before downloading a casino app or making a deposit. Too many review sites simply copy-paste bonus information and hand out 5-star ratings to every affiliate partner. We don't operate that way.
            </p>
            <p>
              Our editorial team is fully separated from our commercial team. Affiliate partners have no input whatsoever on review scores, conclusions, or editorial content. A game with a poor withdrawal process will receive a poor score — regardless of whether we have an affiliate relationship with the platform.
            </p>
            <p>
              We follow Google's <strong className="text-foreground">E-E-A-T framework</strong> — Experience, Expertise, Authoritativeness, and Trustworthiness. Every piece of content on this site is written from direct, hands-on experience by analysts with verifiable credentials in the gaming industry.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Review process */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">How We Review Games</h2>
          <div className="space-y-4">
            {reviewCriteria.map(({ step, title, body }) => (
              <div key={step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step}
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Team */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">Our Review Team</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-medium text-primary">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Contact */}
        <section>
          <h2 className="mb-3 text-2xl font-bold">Contact Us</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            For editorial inquiries, corrections, or to report inaccurate information, email us at{" "}
            <strong className="text-foreground">editorial@casinoguide.example.com</strong>.
            <br /><br />
            For business and affiliate partnership inquiries:{" "}
            <strong className="text-foreground">partners@casinoguide.example.com</strong>.
            <br /><br />
            We respond to all editorial corrections within 48 hours.
          </p>
        </section>
      </div>
    </div>
  );
}
