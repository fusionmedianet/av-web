import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import {
  Hero,
  Services,
  About,
  Process,
  Portfolio,
  Pricing,
  Contact,
  Footer,
} from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A&V Web Studio — Moderne web stranice koje donose rezultate" },
      {
        name: "description",
        content:
          "A&V Web Studio dizajnira i razvija brze, elegantne i skalabilne web stranice za ambiciozne brendove.",
      },
      { property: "og:title", content: "A&V Web Studio — Dizajn i razvoj modernih web stranica" },
      {
        property: "og:description",
        content: "Moderne web stranice koje donose rezultate.",
      },
      { property: "og:url", content: "https://avwebstudio.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://avwebstudio.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "A&V Web Studio",
          url: "https://avwebstudio.lovable.app/",
          logo: "https://avwebstudio.lovable.app/favicon.png",
          email: "info@avstudio.site",
          contactPoint: [
            { "@type": "ContactPoint", telephone: "+387 62 287 834", contactType: "customer service" },
            { "@type": "ContactPoint", telephone: "+387 61 030 437", contactType: "customer service" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "A&V Web Studio",
          url: "https://avwebstudio.lovable.app/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Process />
          <Portfolio />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
