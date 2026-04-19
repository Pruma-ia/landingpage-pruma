import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const metadata: Metadata = {
  title: "Pruma IA — Precisão em cada processo.",
  description:
    "Automação de atendimento e processos para PMEs com IA. Agente no WhatsApp 24/7, qualificação de leads e integrações sob medida. Resultados mensuráveis desde o primeiro mês.",
  keywords: [
    "automação IA",
    "WhatsApp IA",
    "automação PME",
    "agente de IA",
    "automação empresarial",
    "n8n",
    "integração CRM ERP",
    "São Paulo",
  ],
  authors: [{ name: "Pruma IA", url: "https://prumaia.com.br" }],
  creator: "Pruma IA",
  metadataBase: new URL("https://prumaia.com.br"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Pruma IA — Precisão em cada processo.",
    description: "Automação de atendimento e processos para PMEs com IA.",
    url: "https://prumaia.com.br",
    siteName: "Pruma IA",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pruma IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pruma IA — Precisão em cada processo.",
    description: "Automação de atendimento e processos para PMEs com IA.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
