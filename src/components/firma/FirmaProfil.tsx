import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Eye,
  Flame,
  Gem,
  Globe,
  Heart,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Share2,
  Shapes,
  Smile,
  Star,
  Trophy,
  Warehouse,
} from "lucide-react";

import hero from "@/assets/hero-workshop.jpg";
import welding from "@/assets/gal-welding.jpg";
import celikCati from "@/assets/prod-celik-cati.jpg";
import sundurma from "@/assets/prod-sundurma.jpg";
import ferforje from "@/assets/prod-ferforje.jpg";
import konstruksiyon from "@/assets/prod-konstruksiyon.jpg";

const gallery = [hero, welding, celikCati, sundurma, konstruksiyon, ferforje];

const services = [
  { icon: Home, title: "Çelik Çatı Sistemleri" },
  { icon: Warehouse, title: "Sundurma Sistemleri" },
  { icon: Shapes, title: "Ferforje İşleri" },
  { icon: Navigation, title: "Metal Konstrüksiyon" },
  { icon: Flame, title: "Kaynak ve İmalat" },
  { icon: Gem, title: "Özel Proje Çözümleri" },
];

const products = [
  { img: celikCati, title: "Çelik Çatı Sistemleri", count: "12 Ürün" },
  { img: sundurma, title: "Otopark Sundurma", count: "8 Ürün" },
  { img: ferforje, title: "Ferforje Kapı", count: "15 Ürün" },
  { img: konstruksiyon, title: "Çelik Konstrüksiyon", count: "10 Ürün" },
];

const stats = [
  { icon: Trophy, value: "15+", label: "Yıllık Tecrübe" },
  { icon: CheckCircle2, value: "250+", label: "Tamamlanan Proje" },
  { icon: Smile, value: "%100", label: "Müşteri Memnuniyeti" },
  { icon: Gem, value: "Kaliteli Malzeme", label: "Güvenilir Üretim" },
  { icon: Clock, value: "Zamanında Teslimat", label: "Söz Verdiğimiz Gibi" },
];

const hours = [
  ["Pazartesi - Cuma", "08:00 - 18:00"],
  ["Cumartesi", "08:00 - 14:00"],
  ["Pazar", "Kapalı"],
];

const highlights = [
  "Çelik Çatı Sistemleri",
  "Sundurma ve Gölgelik Sistemleri",
  "Ferforje ve Metal İşleri",
  "Özel Proje Tasarım ve Uygulama",
];

const cardClass = "rounded-xl border border-border bg-card shadow-[var(--shadow-card)]";

export function FirmaProfil() {
  const [active, setActive] = useState(0);

  return (
    <main className="mx-auto max-w-[1500px] px-4 pb-16 lg:px-6">
      <a
        href="#"
        className="my-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft className="size-4" /> Firmalara Dön
      </a>

      <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
        {/* Identity */}
        <section>
          <div className="flex items-start gap-5">
            <div className={`${cardClass} flex size-[150px] shrink-0 items-center justify-center p-3`}>
              <span className="text-center text-2xl font-black leading-none tracking-tight">
                KCR
                <span className="mt-1 block text-xs font-semibold tracking-[0.35em] text-muted-foreground">
                  METAL
                </span>
              </span>
            </div>
            <div className="min-w-[260px] pt-2">
              <FirmaBaslik />
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            <ContactRow icon={Phone} text="0505 123 45 67" />
            <ContactRow icon={Mail} text="kcrmetal@gmail.com" />
            <ContactRow icon={Globe} text="www.kcrmetal.com" />
            <ContactRow
              icon={MapPin}
              text={"Sanayi Mah. 1234 Sk. No:12/1\nMerkez / Balıkesir"}
            />
          </ul>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-1">
              <MessageSquare className="size-4" /> WhatsApp
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">
              <MessageSquare className="size-4" /> Mesaj Gönder
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">
              <Heart className="size-4" /> Favorilere Ekle
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">
              <Share2 className="size-4" /> Paylaş
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" /> Son aktif: Bugün 10:45
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" /> Üyelik tarihi: May 2024
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="size-3.5" /> Profil görüntülenme: 1.245
            </span>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="hidden lg:block">
            <FirmaBaslik />
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card lg:mt-0">
            <img
              src={gallery[active]}
              alt="KCR Metal atölye görseli"
              width={1600}
              height={1000}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                  active === i ? "border-primary" : "border-transparent hover:border-border"
                }`}
                aria-label={`Galeri görseli ${i + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                />
                {i === gallery.length - 1 && (
                  <span className="absolute inset-0 flex items-center justify-center bg-foreground/60 text-lg font-semibold text-background">
                    +3
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Content grid */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[340px_1fr_360px]">
        <div className="space-y-6">
          <div className={`${cardClass} p-5`}>
            <h2 className="text-lg font-semibold">Firma Hakkında</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              KCR Metal, çelik çatı, sundurma, ferforje ve metal konstrüksiyon alanlarında 15
              yılı aşkın tecrübesiyle kaliteli ve güvenilir hizmet sunmaktadır.
              Projelendirme, üretim ve montaj süreçlerinde müşteri memnuniyetini ön planda
              tutuyoruz.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardClass} p-5`}>
            <h2 className="text-lg font-semibold">Çalışma Saatleri</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between">
                  <dt className="text-muted-foreground">{day}</dt>
                  <dd className="font-medium">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`${cardClass} p-5`}>
            <h2 className="text-lg font-semibold">Ürün ve Hizmetlerimiz</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {services.map(({ icon: Icon, title }) => (
                <button
                  key={title}
                  className="flex items-center gap-3 rounded-lg border border-border p-4 text-left transition-colors hover:border-primary hover:bg-accent"
                >
                  <Icon className="size-6 shrink-0 text-primary" />
                  <span>
                    <span className="block text-sm font-medium">{title}</span>
                    <span className="block text-xs text-muted-foreground">Ürünleri Gör</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={`${cardClass} p-5`}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Öne Çıkan Ürünler</h2>
              <button
                aria-label="Sonraki ürünler"
                className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {products.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.count}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`${cardClass} p-5`}>
            <h2 className="text-lg font-semibold">Teklif Al / İletişime Geç</h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Projeniz için teklif almak veya detaylı bilgi edinmek için bizimle iletişime
              geçin.
            </p>
            <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input className={inputClass} placeholder="Ad Soyad" />
              <input className={inputClass} placeholder="Telefon" />
              <select className={inputClass} defaultValue="">
                <option value="" disabled>
                  İhtiyacınız olan hizmet
                </option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
              <textarea rows={3} className={inputClass} placeholder="Mesajınız" />
              <button className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Gönder
              </button>
            </form>
          </div>

          <div className={`${cardClass} p-5`}>
            <h2 className="text-lg font-semibold">Konum</h2>
            <div className="relative mt-4 h-40 overflow-hidden rounded-lg bg-secondary">
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:28px_28px]" />
              <MapPin className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-primary" />
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">
              <MapPin className="size-4" /> Yol Tarifi Al
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className={`${cardClass} mt-6 grid gap-6 p-6 sm:grid-cols-3 lg:grid-cols-5`}>
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
              <Icon className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold">{value}</span>
              <span className="block text-xs text-muted-foreground">{label}</span>
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

const inputClass =
  "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25";

function ContactRow({ icon: Icon, text }: { icon: typeof Phone; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
        <Icon className="size-4" />
      </span>
      <span className="whitespace-pre-line">{text}</span>
    </li>
  );
}

function FirmaBaslik() {
  return (
    <div>
      <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight lg:text-4xl">
        KCR Metal
        <BadgeCheck className="size-6 text-primary" />
      </h1>
      <p className="mt-1 text-base text-muted-foreground">Çelik Çatı - Sundurma - Ferforje</p>
      <div className="mt-2 flex items-center gap-2 text-sm">
        <span className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className={`size-4 ${i < 4 ? "fill-star text-star" : "text-border"}`}
            />
          ))}
        </span>
        <span className="font-semibold">5.0</span>
        <span className="text-muted-foreground">(18 Değerlendirme)</span>
      </div>
    </div>
  );
}