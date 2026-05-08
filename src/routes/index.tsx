import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import {
  Hero,
  Services,
  About,
  Process,
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
      { property: "og:title", content: "A&V Web Studio" },
      {
        property: "og:description",
        content: "Moderne web stranice koje donose rezultate.",
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
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
