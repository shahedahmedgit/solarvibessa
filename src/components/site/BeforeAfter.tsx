import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal, ArrowRight } from "lucide-react";
import beforeImage from "@/assets/before-dirty-panels.jpg";
import afterImage from "@/assets/after-clean-panels.jpg";
import { Reveal } from "./Reveal";

/**
 * Swap these two imports (or the src values) to use real client photos.
 * Use two images shot from the same angle at the same size for the best effect.
 */
const BEFORE = { src: beforeImage, alt: "Solar panels covered in Texas dust and bird droppings" };
const AFTER = { src: afterImage, alt: "The same solar panels after a professional cleaning" };

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [setFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <section id="our-work" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our work</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            Before &amp; after, on the same roof.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Drag the handle to see the difference a proper wash makes. Dust and droppings sit on the
            glass and shade the cells underneath — clean glass simply lets more light through.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div
            ref={containerRef}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-sm bg-charcoal shadow-[0_30px_80px_-40px_oklch(0.24_0.008_60/0.6)] sm:aspect-[3/2]"
          >
            <img
              src={AFTER.src}
              alt={AFTER.alt}
              loading="lazy"
              width={1440}
              height={960}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={BEFORE.src}
                alt={BEFORE.alt}
                loading="lazy"
                width={1440}
                height={960}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 rounded-sm bg-charcoal/80 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-background">
              Before
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-sm bg-gold px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-charcoal">
              After
            </span>

            <div
              className="absolute inset-y-0 w-px bg-background"
              style={{ left: `${position}%` }}
            >
              <button
                type="button"
                role="slider"
                aria-label="Before and after comparison slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
                onKeyDown={onKeyDown}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  dragging.current = true;
                }}
                className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-background text-charcoal shadow-lg ring-1 ring-charcoal/10"
              >
                <MoveHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Drag the handle, or use the arrow keys, to compare.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-charcoal px-6 py-3.5 text-sm font-bold text-background transition-colors hover:bg-charcoal/90"
          >
            Request a Cleaning
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
