import { useState, FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Code2, Palette, ShoppingBag, Search } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {t("hero.eyebrow")}
        </span>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t("hero.cta1")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {t("hero.cta2")}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useI18n();
  const items = [
    { icon: Palette, k: "1" },
    { icon: Code2, k: "2" },
    { icon: ShoppingBag, k: "3" },
    { icon: Search, k: "4" },
  ];
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, k }) => (
            <div
              key={k}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                {t(`services.${k}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`services.${k}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="border-t border-border bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {t("about.eyebrow")}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("about.title")}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.desc")}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "50+", k: "about.stat1" },
                { n: "30+", k: "about.stat2" },
                { n: "5+", k: "about.stat3" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {t(s.k)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useI18n();
  const steps = ["1", "2", "3", "4"];
  return (
    <section id="process" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {t("process.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("process.subtitle")}
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((k, i) => (
            <div key={k} className="relative">
              <div className="text-sm font-mono text-muted-foreground">
                0{i + 1}
              </div>
              <div className="mt-3 h-px w-12 bg-foreground" />
              <h3 className="mt-5 text-lg font-semibold">
                {t(`process.${k}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`process.${k}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="border-t border-border bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("contact.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t("contact.desc")}
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-12 grid gap-4 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder={t("contact.name")}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
            />
            <input
              required
              type="email"
              placeholder={t("contact.email")}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder={t("contact.message")}
            className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {sent ? t("contact.sent") : t("contact.send")}
            {!sent && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
            A&amp;V
          </span>
          <span className="text-sm text-muted-foreground">
            {t("footer.tagline")}
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} A&amp;V Web Studio. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
