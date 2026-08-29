import { ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mx-auto block h-px w-10 bg-gold" />
          <h2 className="mt-8 text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Ready to Give Your Solar Panels a Fresh Start?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Free quotes, careful work and clear answers — from cleaning to protection to
            inspections.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-bold text-charcoal transition-colors hover:bg-gold/90"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-charcoal/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
