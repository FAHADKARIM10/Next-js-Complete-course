"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, BookOpen, Clock } from "lucide-react";

const badges = [
  {
    icon: BookOpen,
    title: "8+ Years Experience",
    desc: "Our team has reviewed casino games since 2016",
  },
  {
    icon: ShieldCheck,
    title: "Independent Reviews",
    desc: "We never accept payment to alter our ratings",
  },
  {
    icon: Award,
    title: "Certified Experts",
    desc: "Reviews written by certified gaming analysts",
  },
  {
    icon: Clock,
    title: "Updated Monthly",
    desc: "All reviews refreshed with latest bonuses and changes",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {badges.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
