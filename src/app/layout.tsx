import type { Metadata } from "next";
import { Fredoka, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { AccessGate } from "@/components/layout/AccessGate";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Communication Quest - Communication Training Game",
  description:
    "Practice recognising and adapting to different communication styles in realistic workplace situations. Short sessions, real scenarios, useful feedback.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${fredoka.variable} ${inter.variable} ${interBody.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-[calc(100dvh-3.5rem)]">
            <AccessGate>{children}</AccessGate>
          </main>
          <ConsentBanner />
        </Providers>
      </body>
    </html>
  );
}
