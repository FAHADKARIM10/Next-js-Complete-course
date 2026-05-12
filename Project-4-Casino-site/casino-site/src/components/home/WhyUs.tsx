"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Real Play Testing",
    body: "Every game is tested with real deposits. We track actual gameplay hours, withdrawal speeds, and bonus clarity — not just reading terms and conditions.",
  },
  {
    title: "Certified Analysts",
    body: "Our reviewers hold certifications from the Gaming Standards Association and International Masters of Gaming Law. We know the industry from the inside.",
  },
  {
    title: "No Paid Rankings",
    body: "We do not accept payment to rank a game higher than it deserves. Our affiliate revenue is disclosed, but it never influences our editorial scoring.",
  },
  {
    title: "Updated Regularly",
    body: "Casino bonuses change often. We update every review monthly to ensure the bonus information, RTP data, and download links are always current.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div>
            <p className="mb-2 text-sm font-medium text-primary">Our Commitment</p>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Trust CasinoGuide?
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              In a landscape full of incentivized reviews, we stand apart. Our editorial policy is simple: we only recommend what we'd play with our own money. Our review process follows the{" "}
              <strong className="text-foreground">E-E-A-T framework</strong>{" "}
              (Experience, Expertise, Authoritativeness, Trustworthiness) — the same standard Google uses to evaluate quality content.
            </p>

            <ul className="space-y-4">
              {points.map(({ title, body }, i) => (
                <motion.li
                  key={title}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "Games Reviewed" },
              { value: "8 yrs", label: "Industry Experience" },
              { value: "1M+", label: "Monthly Readers" },
              { value: "100%", label: "Independent Reviews" },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="rounded-xl border border-border bg-secondary p-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <p className="text-3xl font-extrabold text-primary">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
