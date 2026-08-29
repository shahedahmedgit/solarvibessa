import { Phone } from "lucide-react";
import crew from "@/assets/about-crew.jpg";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          {/* Replace with a real team or van photo. */}
          <img
            src={crew}
            alt="Solar Vibes SA service crew beside their work van"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[7/5] w-full rounded-sm object-cover shadow-[0_30px_70px_-40px_oklch(0.24_0.008_60/0.6)]"
          />
        </Reveal>

        <Reveal>
          <p className="eyebrow">About us</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Solar Vibes SA looks after solar systems, not just roofs.
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Solar is a real investment, and once it is installed most homeowners never think about
              it again until production drops or something looks wrong. We exist for everything that
              happens after the install: keeping panels clean, keeping animals out and keeping an
              eye on the hardware holding it all to your roof.
            </p>
            <p>
              We work with Texas homeowners and businesses on cleaning, maintenance, animal and bird
              protection, and leak inspections. Every visit starts with an honest look at the system
              — if something does not need doing, we will tell you that too.
            </p>
            <p>
              You get straightforward pricing, careful work on your roof, and clear notes on what we
              found and what we recommend.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3.5 text-sm font-bold text-charcoal transition-colors hover:bg-gold/90"
            >
              Get a Free Quote
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-charcoal/20 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              <Phone className="h-4 w-4 text-gold" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
