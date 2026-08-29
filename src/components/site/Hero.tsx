import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-solar-texas.jpg";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-charcoal">
      <img
        src={heroImage}
        alt="Solar panels on a Texas home roof at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.2_0.01_60/0.92)_0%,oklch(0.2_0.01_60/0.72)_45%,oklch(0.2_0.01_60/0.25)_100%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pt-36 pb-20 sm:px-8 md:pt-44 md:pb-28 lg:min-h-[42rem]">
        <p className="flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
          <span className="h-px w-8 bg-gold" />
          Serving Texas homes &amp; businesses
        </p>

        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.08] text-background sm:text-5xl lg:text-6xl">
          Keep Your Solar Panels Working at Their Best.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
          Professional solar panel cleaning, maintenance, animal protection and leak inspections
          across Texas.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-bold text-charcoal transition-all hover:bg-gold/90"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-background/35 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
          >
            <Phone className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-background/15 pt-6 text-sm text-background/70">
          <li>Panel Cleaning</li>
          <li className="text-gold/60">/</li>
          <li>Maintenance</li>
          <li className="text-gold/60">/</li>
          <li>Animal &amp; Bird Protection</li>
          <li className="text-gold/60">/</li>
          <li>Leak Inspections</li>
        </ul>
      </div>
    </section>
  );
}
