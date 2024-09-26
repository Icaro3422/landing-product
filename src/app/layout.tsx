import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Gancho para pantalones",
  description: "Gancho ahorrador de espacio te ayudará a mantener tus pantalones ordenados y listos para usar.",
  alternates: {
    canonical: "https://oferta.gohome.com.co/",
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
