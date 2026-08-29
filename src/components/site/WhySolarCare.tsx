import texasDust from "@/assets/texas-dust.jpg";
import animalGuard from "@/assets/service-animal-guard.jpg";
import { Reveal } from "./Reveal";

const FACTORS = [
  {
    title: "Dust and dry-season grit",
    body: "Texas air carries a steady load of fine dust. It settles across the glass, sticks after morning dew, and dries into a haze that dulls the surface long before it looks obviously dirty from the ground.",
  },
  {
    title: "Pollen and tree debris",
    body: "Spring pollen, oak catkins and leaf litter collect along panel frames and in the gaps between rows, where they hold moisture against the array instead of drying off.",
  },
  {
    title: "Birds and rooftop animals",
    body: "Droppings create hard, opaque spots that rain does not remove, and nesting under the array brings in dry material, blocks airflow and puts wiring within reach of chewing.",
  },
  {
    title: "Sun, storms and hail",
    body: "Constant heat, wind-driven rain and hail work on seals, clamps and flashing over time. Regular eyes on the roof mean small issues get spotted while they are still small.",
  },
];

export function WhySolarCare() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Why solar care matters</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              A Texas roof is a hard place to be a solar panel.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Solar panels are built to sit outside for decades, but they only produce from the
              light that actually reaches the cells. Anything resting on the glass — dust, pollen,
              droppings, debris — sits between the sun and your system.
            </p>
            {/* Replace with a real photo from a Texas job site. */}
            <img
              src={texasDust}
              alt="Dusty Texas hill country at golden hour with a solar-equipped ranch house"
              loading="lazy"
              width={1600}
              height={1000}
              className="mt-8 aspect-[16/10] w-full rounded-sm object-cover"
            />
          </Reveal>

          <div>
            <ul className="space-y-8">
              {FACTORS.map((factor, i) => (
                <Reveal as="li" key={factor.title} delay={i * 60}>
                  <div className="border-t border-border pt-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm font-semibold text-gold">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl">{factor.title}</h3>
                    </div>
                    <p className="mt-3 pl-8 leading-relaxed text-muted-foreground">{factor.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-10">
              <img
                src={animalGuard}
                alt="Bird guard mesh protecting the edge of a rooftop solar array"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[16/9] w-full rounded-sm object-cover"
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Guard mesh keeps birds and small animals out of the gap beneath the array.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
