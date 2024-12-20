import type { Metadata } from "next";
import { Roboto, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/theme.provider";
import { languages } from "@/i18n/settings";
import { dir } from "i18next";
import { ClerkProvider } from "@clerk/nextjs";
import { localization } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const spaceGrotesk = SpaceGrotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://m1lo0709.uz"),
  title: "Talimot.uz | Dasturlash kurslari",
  description:
    "Ta'limot.uz - dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
  authors: [{ name: "Bobur Nematov", url: "https://m1lo0709.uz" }],
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Ta'limot.uz | Dasturlash kurslari",
    description:
      "Ta'limot.uz - dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
    type: "website",
    url: "https://m1lo0709.uz",
    locale: "uz_UZ",
    images:
      "https://media-hosting.imagekit.io//9aa14d8221b74340/og-image.jpg?Expires=1734715588&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fsX6xuigyu5sJpy2n8H0rdz65GjNmuciTMcpUI9hYNMG-JGCq7KwxWOwPtow2PFkxzjB1OSaFM7XhEUp2huAmgTAM72XQs3a48bJphHv4lSDEOEFzI-3OvNosycev0NieC2v1LCg9oVj2X35LTgXZIPCf8AOOLjvP56A1heh6gY7DYieRsj9gqEj-KarvZWjL6w52IFMH9TsuAsOxbzGJMEQenT2S9HwPWxh-f8s4LhI6ZrCfKEAzaX1OyY3V0zslG~1iryXk3DLUIUmaibBB02ojJS4dNI7YLYln2XVd4-5dV0L5FEQOpUDIW4xY0YDsp0FbjuGISTWwqvNvhg0zg__",
    countryName: "Uzbekistan",
    siteName: "M1lo",
    emails: "info@m1lo.uz",
  },
  keywords:
    "Ta'limot, Ta'limot.uz , NextJS, NextJS to'liq kurs, NextJS kurs, NextJS dasturlash, Startup, Startup loyiha, Startup Ta'limot, Ta'limot dasturlash kurslari, darsturlash darslari, dasturlash kurslari ",
};

interface Props extends ChildProps {
  params: { lng: string };
}

function RootLayout({ children, params: { lng } }: Props) {
  const local = localization(lng);

  return (
    <ClerkProvider localization={local}>
      <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
        <body
          className={`${roboto.variable} ${spaceGrotesk.variable} custom-scrollbar overflow-x-hidden`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            <div>{children}</div>
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-8M4J2SDRJD" />
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
