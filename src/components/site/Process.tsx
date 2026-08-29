import { CalendarCheck, ClipboardList, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Schedule",
    body: "Call or send the quote form. Tell us roughly what your system looks like and what you have noticed, and we set a time that works.",
  },
  {
    icon: ClipboardList,
    title: "Inspect",
    body: "We look over the array, the mounts and the roof around them before any work starts, so the quote matches what your system actually needs.",
  },
  {
    icon: Sparkles,
    title: "Get It Done",
    body: "Cleaning, guard installation, maintenance or inspection is completed in one visit where possible, with the site left tidy and findings shared with you.",
  },
];

export function Process() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Three steps, no runaround.</h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 80} className="bg-background p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
                  <span className="font-display text-4xl text-border">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
