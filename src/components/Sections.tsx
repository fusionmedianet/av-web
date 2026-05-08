import { useState, useRef, useEffect, FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Code2, Palette, Search, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

export function Hero() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const blob = blobRef.current;
    if (!section || !blob) return;
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Push the blob to the nearest edge based on cursor position.
      // We pick the closest edge (left/right/top/bottom) and pin one axis
      // to that edge while letting the other axis follow the cursor.
      const distLeft = x;
      const distRight = rect.width - x;
      const distTop = y;
      const distBottom = rect.height - y;
      const minDist = Math.min(distLeft, distRight, distTop, distBottom);
      let edgeX = x;
      let edgeY = y;
      if (minDist === distLeft) edgeX = 0;
      else if (minDist === distRight) edgeX = rect.width;
      else if (minDist === distTop) edgeY = 0;
      else edgeY = rect.height;
      targetX = edgeX;
      targetY = edgeY;
    };
    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      blob.style.transform = `translate3d(${curX - 410}px, ${curY - 210}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    targetX = curX = 0;
    targetY = curY = 0;
    raf = requestAnimationFrame(tick);
    section.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid animate-grid-pan [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div
        ref={blobRef}
        className="pointer-events-none absolute left-0 top-0 h-[420px] w-[820px] rounded-full opacity-20 blur-3xl will-change-transform"
        style={{
          backgroundImage: "var(--gradient-accent)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-10 top-40 h-64 w-64 rounded-full bg-foreground/10 blur-3xl"
        style={{ animation: "drift 14s ease-in-out infinite" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
          <Sparkles className="h-3 w-3 text-accent" />
          {t("hero.eyebrow")}
        </span>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-gradient">{t("hero.title")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            {t("hero.cta1")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted"
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
    { icon: Search, k: "3" },
  ];
  return (
    <section id="services" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {t("nav.services")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, k }) => (
            <div
              key={k}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundImage: "var(--gradient-accent)" }}
                aria-hidden
              />
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-lg text-white shadow-[var(--shadow-glow)]"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">
                {t(`services.${k}.title`)}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
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
    <section id="about" className="relative overflow-hidden border-t border-border bg-foreground text-background py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light animate-grid-pan [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-background/60">
              {t("about.eyebrow")}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("about.title")}
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-background" />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-background/70">
              {t("about.desc")}
            </p>
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
    <section id="process" className="relative border-t border-border py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {t("nav.process")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {t("process.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("process.subtitle")}
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((k, i) => (
            <div key={k} className="relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
              <div className="text-sm font-mono text-accent">
                0{i + 1}
              </div>
              <div
                className="mt-3 h-px w-12"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              />
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
    <section id="contact" className="relative overflow-hidden border-t border-border bg-foreground text-background py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light animate-grid-pan [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-background/60">
            {t("contact.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-background/70">
            {t("contact.desc")}
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-12 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-left">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground/70">
                {t("contact.name")}
              </span>
              <input
                required
                placeholder={t("contact.name")}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
              />
            </label>
            <label className="block text-left">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground/70">
                {t("contact.email")}
              </span>
              <input
                required
                type="email"
                placeholder={t("contact.email")}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
              />
            </label>
          </div>
          <label className="block text-left">
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground/70">
              {t("contact.message")}
            </span>
            <textarea
              required
              rows={5}
              placeholder={t("contact.message")}
              className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-accent)" }}
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
          <img src={logo} alt="A&V Web Studio" className="h-9 w-9 object-contain" />
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
