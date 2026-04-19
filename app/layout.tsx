import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pruma IA — Precisão em cada processo.",
  description:
    "Automação de atendimento e processos para PMEs com IA. Agente no WhatsApp 24/7, qualificação de leads e integrações sob medida. Resultados mensuráveis desde o primeiro mês.",
  keywords: [
    "automação IA",
    "WhatsApp IA",
    "automação PME",
    "n8n",
    "agente de IA",
    "São Paulo",
  ],
  openGraph: {
    title: "Pruma IA — Precisão em cada processo.",
    description:
      "Automação de atendimento e processos para PMEs com IA.",
    url: "https://prumaia.com.br",
    siteName: "Pruma IA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
