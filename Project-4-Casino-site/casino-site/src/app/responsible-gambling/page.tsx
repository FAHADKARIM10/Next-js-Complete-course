import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Phone, ChevronRight, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Responsible Gambling – Help, Resources & Self-Exclusion Tools",
  description:
    "Gambling can become harmful. Learn to recognize problem gambling, access free helplines, and use self-exclusion tools to stay in control.",
};

const warningSigns = [
  "Spending more money or time on gambling than intended",
  "Chasing losses by betting more to win back what you've lost",
  "Lying to family or friends about gambling activities",
  "Neglecting work, school, or family responsibilities because of gambling",
  "Gambling to escape stress, depression, or anxiety",
  "Borrowing money or selling possessions to fund gambling",
  "Feeling irritable or restless when trying to cut back",
  "Failed attempts to reduce or stop gambling",
];

const tools = [
  {
    title: "Deposit Limits",
    body: "Set daily, weekly, or monthly deposit limits on your account to control spending. Most licensed platforms offer this feature in the account settings.",
  },
  {
    title: "Session Time Limits",
    body: "Enable session time reminders or hard limits so you're notified or automatically logged out after a set period of play.",
  },
  {
    title: "Self-Exclusion",
    body: "Request to be excluded from a platform for a set period (1 week to permanent). During exclusion, you cannot deposit or play. Contact customer support to apply.",
  },
  {
    title: "Reality Checks",
    body: "Enable regular pop-up reminders showing how long you've been playing and your net wins/losses for the session.",
  },
  {
    title: "Cooling-Off Period",
    body: "A temporary break of 24 hours to 6 weeks, where your account is suspended. Useful when you feel your gambling is becoming less controlled.",
  },
];

const helplines = [
  {
    name: "iCall (TISS)",
    number: "9152987821",
    desc: "Free psychological counselling including gambling addiction, run by the Tata Institute of Social Sciences.",
    available: "Mon–Sat, 8 AM – 10 PM",
  },
  {
    name: "Vandrevala Foundation",
    number: "1860-2662-345",
    desc: "24/7 mental health helpline providing free, confidential support across India.",
    available: "24 hours, 7 days a week",
  },
  {
    name: "iDream Foundation",
    number: "+91 99209 60001",
    desc: "Addiction counselling services including gambling disorder treatment.",
    available: "Mon–Fri, 9 AM – 6 PM",
  },
];

export default function ResponsibleGamblingPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Responsible Gambling</span>
        </nav>

        {/* Alert banner */}
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
          <div>
            <p className="font-semibold text-amber-400">Need Help Right Now?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              If gambling is causing you distress, call iCall at{" "}
              <a href="tel:9152987821" className="font-bold text-amber-400 hover:underline">
                9152987821
              </a>{" "}
              or the Vandrevala Foundation at{" "}
              <a href="tel:18602662345" className="font-bold text-amber-400 hover:underline">
                1860-2662-345
              </a>{" "}
              (24/7).
            </p>
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">
          Responsible Gambling
        </h1>
        <p className="mb-8 text-muted-foreground leading-relaxed">
          Gambling is intended to be a form of entertainment. When it stops being fun and starts causing harm, it's time to seek help. This page provides the information and tools you need to gamble safely — or stop if needed.
        </p>

        <Separator className="my-8" />

        {/* Gambling safely */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">The Golden Rules of Safe Gambling</h2>
          <div className="space-y-3">
            {[
              "Set a budget before you start and never exceed it — ever.",
              "Treat losses as the cost of entertainment, not money to recover.",
              "Never gamble to escape personal problems or negative emotions.",
              "Never chase losses. Walk away when you hit your loss limit.",
              "Balance gambling with other hobbies and social activities.",
              "Never borrow money to gamble.",
              "Take regular breaks — set a timer if needed.",
              "Only gamble on licensed, regulated platforms.",
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Warning signs */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Warning Signs of Problem Gambling</h2>
          <p className="mb-5 text-sm text-muted-foreground">
            Problem gambling often develops gradually. Recognize these warning signs in yourself or someone you care about:
          </p>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <ul className="space-y-2.5">
              {warningSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <p className="text-sm text-muted-foreground">{sign}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            If you recognize 3 or more of these signs, please reach out to one of the helplines below.
          </p>
        </section>

        <Separator className="my-8" />

        {/* Tools */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Responsible Gambling Tools</h2>
          <p className="mb-5 text-sm text-muted-foreground">
            All licensed casino platforms are legally required to offer these tools. Use them proactively — not just when gambling becomes a problem.
          </p>
          <div className="space-y-4">
            {tools.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-4">
                <p className="font-semibold">{title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Helplines */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Free Help & Helplines</h2>
          <p className="mb-5 text-sm text-muted-foreground">
            All services below are free and confidential. Seeking help is a sign of strength, not weakness.
          </p>
          <div className="space-y-4">
            {helplines.map(({ name, number, desc, available }) => (
              <div
                key={name}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <a
                      href={`tel:${number.replace(/-/g, "")}`}
                      className="mt-0.5 block text-lg font-bold text-primary hover:underline"
                    >
                      {number}
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    <p className="mt-1.5 text-xs font-medium text-muted-foreground">
                      Available: {available}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Under 18 */}
        <section>
          <h2 className="mb-3 text-2xl font-bold">Under 18? Never Gamble.</h2>
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 text-sm text-muted-foreground leading-relaxed">
            <p>
              Gambling is strictly for adults aged 18 and over. All platforms we review enforce strict age verification. If you are a minor, do not attempt to register on any gambling platform.
            </p>
            <p className="mt-3">
              If you are a parent, use parental control software to block gambling websites. Free tools are available from{" "}
              <strong className="text-foreground">Gamban</strong> and{" "}
              <strong className="text-foreground">Net Nanny</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
