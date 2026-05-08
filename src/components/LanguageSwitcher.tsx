import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 text-xs font-medium">
      <button
        onClick={() => setLang("bs")}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "bs"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Bosanski"
      >
        BS
      </button>
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
