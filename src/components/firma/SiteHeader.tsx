import { Bell, Building2, Heart, LogIn } from "lucide-react";

const nav = [
  "Anasayfa",
  "Firmalar",
  "Kategoriler",
  "İlanlar",
  "Haberler",
  "Blog",
  "İletişim",
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-6 px-4 lg:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight">inşaatçevrem</span>
            <span className="block text-[11px] text-muted-foreground">
              Türkiye'nin inşaat rehberi
            </span>
          </span>
        </a>

        <nav className="mx-auto hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <button className="hidden items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary md:flex">
            <Heart className="size-4" />
            Favorilerim
          </button>
          <button className="relative hidden size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary md:flex">
            <Bell className="size-5" />
            <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-destructive-foreground">
              2
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            <LogIn className="size-4" />
            Firma Ekle / Giriş Yap
          </button>
        </div>
      </div>
    </header>
  );
}