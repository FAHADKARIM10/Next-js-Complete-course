"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Download, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Game } from "@/lib/games-data";

interface GameCardProps {
  game: Game;
  index?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= Math.floor(rating)
              ? "fill-primary text-primary"
              : star - 0.5 <= rating
              ? "fill-primary/50 text-primary"
              : "fill-muted text-muted"
          }`}
        />
      ))}
      <span className="ml-1 text-xs font-medium text-muted-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function GameCard({ game, index = 0 }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link href={`/games/${game.slug}`} className="group block">
        <div className="card-glow rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-2xl">
                {game.icon}
              </div>
              <div>
                <h3 className="font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                  {game.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {game.developer}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="shrink-0 text-xs">
              {game.category}
            </Badge>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {game.description}
          </p>

          {/* Stats */}
          <div className="mb-4 flex items-center justify-between gap-2 border-t border-border pt-3">
            <StarRating rating={game.rating} />
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Download className="h-3 w-3" />
              {game.downloads} downloads
            </div>
          </div>

          {/* Bonus */}
          <div className="mb-4 rounded-md border border-primary/20 bg-primary/5 px-3 py-2">
            <p className="text-xs font-medium text-primary">{game.welcomeBonus}</p>
          </div>

          {/* CTA */}
          <Button
            size="sm"
            className="w-full gap-1.5 font-semibold"
            tabIndex={-1}
          >
            Read Review & Download
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </Link>
    </motion.div>
  );
}
