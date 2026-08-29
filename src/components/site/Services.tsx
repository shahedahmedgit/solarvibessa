import { ArrowUpRight, Droplets, ShieldCheck, Wrench, SearchCheck } from "lucide-react";
import cleaning from "@/assets/service-cleaning.jpg";
import maintenance from "@/assets/service-maintenance.jpg";
import animalGuard from "@/assets/service-animal-guard.jpg";
import leak from "@/assets/service-leak-inspection.jpg";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Droplets,
    title: "Solar Panel Cleaning",
    image: cleaning,
    alt: "Technician washing rooftop solar panels with a soft brush",
    copy: "Dust, pollen and hard-water spotting build a film across panel glass that blocks sunlight. We wash panels with soft brushes and purified water so the glass is left streak-free, with no harsh chemicals and no abrasive pads near the surface or seals.",
    points: ["Soft-brush, purified water wash", "Frame and glass edges cleared", "No abrasive or chemical cleaners"],
  },
  {
    icon: Wrench,
    title: "Solar Panel Maintenance",
    image: maintenance,
    alt: "Technician checking solar panel mounting hardware and wiring",
    copy: "Panels are only one part of the system. We look over mounting hardware, clamps, conduit and visible wiring, and flag cracked glass, loose rails or worn connections before they turn into a bigger repair or a shutdown.",
    points: ["Mounts, rails and clamps checked", "Visible wiring and conduit review", "Written notes on anything we find"],
  },
  {
    icon: ShieldCheck,
    title: "Animal & Bird Protection",
    image: animalGuard,
    alt: "Critter guard mesh installed along the edge of rooftop solar panels",
    copy: "The gap under a panel array is a favorite nesting spot for pigeons and squirrels, and nests bring droppings, chewed wiring and blocked airflow. We clear out debris and fit critter guard mesh around the array so animals stay out for good.",
    points: ["Nest and debris removal", "Critter guard mesh fitted to the array", "Clean, low-profile finish"],
  },
  {
    icon: SearchCheck,
    title: "Leak Inspections",
    image: leak,
    alt: "Technician inspecting roof flashing and sealant around solar mounts",
    copy: "Every mount is a penetration through your roof. We inspect flashing, sealant and the roof deck around each attachment point and around the array, so any moisture issue is identified early instead of after a ceiling stain shows up.",
    points: ["Flashing and sealant inspection", "Roof surface around mounts checked", "Clear photos and findings"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            Complete care for the solar system you already paid for.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Four focused services, handled carefully and cleaned up after. Whatever your array
            needs, we start by looking at it before we quote it.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 sm:space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={service.title}
                as="article"
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={flip ? "lg:order-2" : undefined}>
                  {/* Replace this image with a real project photo. */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full rounded-sm object-cover shadow-[0_24px_60px_-32px_oklch(0.24_0.008_60/0.55)]"
                  />
                </div>
                <div className={flip ? "lg:order-1" : undefined}>
                  <span className="inline-flex items-center gap-2 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em]">
                      0{i + 1}
                    </span>
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.copy}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-foreground"
                  >
                    Request this service
                    <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
