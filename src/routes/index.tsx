import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/firma/SiteHeader";
import { FirmaProfil } from "@/components/firma/FirmaProfil";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KCR Metal — Çelik Çatı, Sundurma ve Ferforje | inşaatçevrem" },
      {
        name: "description",
        content:
          "KCR Metal firma profili: çelik çatı, sundurma, ferforje ve metal konstrüksiyon hizmetleri, ürün galerisi, çalışma saatleri ve teklif formu.",
      },
      { property: "og:title", content: "KCR Metal — Çelik Çatı, Sundurma ve Ferforje" },
      {
        property: "og:description",
        content:
          "Balıkesir merkezli KCR Metal'in inşaatçevrem firma profili: hizmetler, ürünler ve iletişim.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <FirmaProfil />
    </div>
  );
}
