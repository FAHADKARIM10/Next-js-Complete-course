"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Spade } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "All Games" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Spade className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Casino<span className="text-primary">Guide</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link href="/games" className="hidden sm:block">
            <Button size="sm" className="font-semibold">
              Top Games
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-6" showCloseButton>
              {/* Logo */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mb-6 flex items-center gap-2"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                  <Spade className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="font-bold">
                  Casino<span className="text-primary">Guide</span>
                </span>
              </Link>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6">
                <Link href="/games" onClick={() => setOpen(false)}>
                  <Button className="w-full font-semibold">
                    Browse All Games
                  </Button>
                </Link>
              </div>

              <p className="mt-8 text-xs text-muted-foreground">
                18+ only. Please gamble responsibly.{" "}
                <Link
                  href="/responsible-gambling"
                  className="underline hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  Learn more
                </Link>
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
