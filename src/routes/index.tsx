import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhySolarCare } from "@/components/site/WhySolarCare";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Videos } from "@/components/site/Videos";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Solar Vibes SA | Solar Panel Cleaning & Maintenance in Texas";
const DESCRIPTION =
  "Professional solar panel cleaning, maintenance, animal & bird protection and leak inspections for homes and businesses across Texas. Free quotes — call 210-891-9457.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Solar Vibes SA",
          description: DESCRIPTION,
          telephone: "+1-210-891-9457",
          areaServed: { "@type": "State", name: "Texas" },
          address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <WhySolarCare />
        <About />
        <Process />
        <Videos />
        <ServiceArea />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
