import { Phone, Sun } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const SERVICES = [
  "Solar Panel Cleaning",
  "Solar Panel Maintenance",
  "Animal & Bird Protection",
  "Leak Inspections",
];

export function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-background/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-background/10">
                <Sun className="h-5 w-5 text-gold" strokeWidth={1.75} />
              </span>
              <span className="font-display text-lg font-semibold text-background">
                Solar Vibes SA
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Solar panel cleaning, maintenance, animal and bird protection, and leak inspections
              for homeowners and businesses across Texas.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-background"
            >
              <Phone className="h-4 w-4 text-gold" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Services</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition-colors hover:text-background">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Navigate</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-background">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Solar Vibes SA. All rights reserved.</p>
          <p>Serving Texas homes and businesses.</p>
        </div>
      </div>
    </footer>
  );
}
