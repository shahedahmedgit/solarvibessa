import { MapPin, Phone } from "lucide-react";
import texas from "@/assets/texas-dust.jpg";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ServiceArea() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-sm">
            <img
              src={texas}
              alt="Texas landscape at sunset"
              loading="lazy"
              width={1600}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.24_0.008_60/0.92),oklch(0.24_0.008_60/0.55))]" />
            <div className="relative max-w-2xl px-7 py-16 sm:px-12 sm:py-20">
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
                <MapPin className="h-4 w-4" />
                Service area
              </span>
              <h2 className="mt-5 text-3xl leading-tight text-background sm:text-4xl">
                Proudly serving customers across Texas.
              </h2>
              <p className="mt-5 leading-relaxed text-background/75">
                Solar Vibes SA works with homeowners and businesses throughout Texas — residential
                rooftops, commercial arrays and ground mounts alike. If you are not sure whether we
                reach your area, give us a call and we will tell you straight.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-bold text-charcoal transition-colors hover:bg-gold/90"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
