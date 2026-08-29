import { Facebook, PlayCircle } from "lucide-react";
import { FACEBOOK_VIDEOS, facebookEmbedSrc } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Videos() {
  return (
    <section id="videos" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-8 bg-gold" />
            From the field
          </p>
          <h2 className="mt-5 text-3xl leading-tight text-background sm:text-4xl lg:text-[2.75rem]">
            See Solar Vibes SA in Action
          </h2>
          <p className="mt-5 leading-relaxed text-background/70">
            Short clips straight from our Facebook page — real roofs, real panels, real results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {FACEBOOK_VIDEOS.map((video, i) => (
            <Reveal key={video.title} delay={i * 80}>
              <div className="overflow-hidden rounded-sm bg-background/5 ring-1 ring-background/15">
                <div className="relative aspect-[9/16] w-full max-h-[38rem]">
                  {video.url ? (
                    <iframe
                      src={facebookEmbedSrc(video.url)}
                      title={video.title}
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                      <PlayCircle className="h-10 w-10 text-gold" strokeWidth={1.4} />
                      <p className="text-sm font-semibold text-background">{video.title}</p>
                      <p className="max-w-xs text-xs leading-relaxed text-background/60">
                        Add the Facebook Reel link in{" "}
                        <code className="text-gold">src/lib/site.ts</code> and the video appears
                        here automatically.
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 border-t border-background/10 px-5 py-4">
                  <Facebook className="h-4 w-4 text-gold" />
                  <span className="text-sm text-background/80">{video.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
