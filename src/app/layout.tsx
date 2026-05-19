import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaniojr.com.br"),
  title: {
    default: "Vanio Jr. | AI Builder & Systems Creator",
    template: "%s | Vanio Jr.",
  },
  description:
    "Building AI-powered systems, automation and digital products with a practical builder mindset.",
  keywords: [
    "AI",
    "Automation",
    "SaaS",
    "Digital Products",
    "n8n",
    "AI Agents",
    "Workflows",
  ],
  alternates: {
    canonical: "https://vaniojr.com.br",
  },
  openGraph: {
    title: "Vanio Jr. | AI Builder & Systems Creator",
    description:
      "Building AI-powered systems, automation and digital products with a practical builder mindset.",
    url: "https://vaniojr.com.br",
    siteName: "vaniojr",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vanio Jr. - AI, Automation and Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanio Jr. | AI Builder & Systems Creator",
    description:
      "Building AI-powered systems, automation and digital products with a practical builder mindset.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
