import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gancho para pantalones plegable ahorrador de espacio",
  description:
    "Gancho ahorrador de espacio te ayudará a mantener tus pantalones ordenados y listos para usar.",
  keywords: [
    "ikea",
    "colgador de ropa retractil",
    "colgador de ropa metalico",
    "miniso",
    "dollarcity",
    "perchero organizador de ropa",
    "closet armable",
    "organizador de ropa plástico",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://oferta.gohome.com.co/",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
