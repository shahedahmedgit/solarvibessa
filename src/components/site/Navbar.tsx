import { useEffect, useState } from "react";
import { Menu, Phone, Sun, X } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-charcoal">
            <Sun className="h-5 w-5 text-gold" strokeWidth={1.75} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-tight text-foreground">
              Solar Vibes SA
            </span>
            <span className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Texas Solar Care
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-sm bg-charcoal px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-charcoal/90 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-gold" strokeWidth={2} />
            Call {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-3.5 text-base font-medium text-foreground last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="mt-4 mb-4 inline-flex items-center justify-center gap-2 rounded-sm bg-charcoal px-4 py-3 text-sm font-semibold text-background"
          >
            <Phone className="h-4 w-4 text-gold" />
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}
