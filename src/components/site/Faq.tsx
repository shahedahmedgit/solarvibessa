import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "How often should solar panels be cleaned?",
    a: "For most Texas properties, once or twice a year keeps panels in good shape. Roofs under trees, near farmland or gravel roads, or with regular bird activity usually benefit from more frequent visits. We will give you an honest recommendation after seeing your array.",
  },
  {
    q: "Does cleaning really make a difference?",
    a: "Panels generate from the light that reaches the cells. A film of dust, pollen or droppings sits on the glass and blocks part of that light, so clean glass simply lets more of it through. Cleaning also gives us a chance to spot damage or debris early.",
  },
  {
    q: "What does animal and bird protection involve?",
    a: "We clear out nesting material and debris from under the array, then fit critter guard mesh around the perimeter so birds and small animals cannot get back beneath the panels. It is a low-profile install that stays out of sight from the ground.",
  },
  {
    q: "What is included in a leak inspection?",
    a: "Every mount is a penetration through your roof. We inspect the flashing, sealant and roof surface around the attachment points and around the array, and report anything that looks like a current or developing moisture issue with photos.",
  },
  {
    q: "Do you serve both residential and commercial properties?",
    a: "Yes. We work on residential rooftops as well as commercial arrays and ground-mounted systems. Larger sites are quoted after a walkthrough so the scope and access are clear up front.",
  },
  {
    q: "How do I request a quote?",
    a: `Call ${"210-891-9457"} or fill out the quote form on this page with your name, phone, email and the service you need. We will get back to you to confirm details and schedule a visit.`,
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Questions we hear a lot.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Still unsure about something? Call us and ask — no pressure, no sales script.
          </p>
        </Reveal>

        <Reveal>
          <ul className="border-t border-charcoal/15">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-charcoal/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
