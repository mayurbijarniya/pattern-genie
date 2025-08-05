import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://patternwave.dev"),
  title: "Pattern Wave - Modern Background Patterns & Wave-Inspired Designs",
  description:
    "Create stunning websites with our curated collection of 100+ modern CSS background patterns and wave-inspired gradients. Perfect for developers and designers. Copy, paste, and bring your designs to life with beautiful oceanic patterns.",
  keywords: [
    // Primary keywords (focus on user intent)
    "css background patterns",
    "background patterns generator",
    "css gradients generator",
    "wave patterns css",
    "ocean gradients",
    "tailwind css backgrounds",
    "web design backgrounds",
    "modern ui patterns",
    "css background snippets",
    "wave gradient generator",

    // Long-tail keywords (better for ranking)
    "free css background patterns library",
    "responsive background patterns for websites",
    "modern wave css patterns",
    "ocean-inspired background designs",
    "tailwind background pattern components",
    "css grid background patterns",
    "animated wave patterns css",
    "minimalist wave backgrounds",
    "professional web design patterns",
    "blue gradient backgrounds",

    // Problem-solving keywords
    "how to create wave css patterns",
    "beautiful wave background ideas",
    "css wave pattern library",
    "ready to use wave patterns",
    "copy paste wave backgrounds",
    "ocean website background design",

    // Background snippets keywords
    "wave background snippets",
    "background snippets tailwind",
    "wave background snippets css",
    "modern wave background snippets",
    "react wave background snippets",
    "code snippets wave background",
    "tailwind wave background snippets",
    "collection of wave background snippets",

    // Brand and competition keywords
    "pattern wave css",
    "wave pattern generator",
    "css wave backgrounds",
    "ocean pattern css",
    "blue wave patterns",
    "teal wave backgrounds",
    "cyan gradient patterns",

    // Use case keywords
    "website header backgrounds",
    "hero section backgrounds",
    "landing page patterns",
    "app background designs",
    "dashboard backgrounds",
    "wave UI components",

    // Technical keywords
    "css custom properties waves",
    "svg wave patterns",
    "responsive wave designs",
    "mobile wave backgrounds",
    "wave pattern accessibility",
    "performance optimized patterns",

    // Designer/Developer keywords
    "figma wave patterns",
    "sketch wave backgrounds",
    "adobe xd wave patterns",
    "react wave components",
    "vue wave backgrounds",
    "angular wave patterns",
    "next.js wave patterns",

    // Industry keywords
    "fintech wave backgrounds",
    "saas wave patterns",
    "startup wave designs",
    "tech wave backgrounds",
    "app wave patterns",
    "modern wave aesthetics",

    // Color-specific keywords
    "blue wave gradients",
    "teal ocean patterns",
    "cyan wave backgrounds",
    "aqua gradient patterns",
    "sea blue backgrounds",
    "turquoise wave designs",

    // Trending design keywords
    "2024 wave patterns",
    "trending wave backgrounds",
    "popular wave designs",
    "modern wave aesthetics",
    "contemporary wave patterns",
    "minimalist wave designs",
  ],
  authors: [{ name: "Mayur Bijarniya", url: "https://github.com/mayurbijarniya" }],
  creator: "Mayur Bijarniya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://patternwave.dev",
    title: "Pattern Wave - Modern Background Patterns & Wave-Inspired Designs",
    description:
      "Create stunning websites with our curated collection of 100+ modern CSS background patterns and wave-inspired gradients. Perfect for developers and designers.",
    siteName: "Pattern Wave",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Pattern Wave - Modern Background Patterns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Wave - Modern Background Patterns & Wave-Inspired Designs",
    description:
      "Create stunning websites with 100+ modern CSS background patterns and wave-inspired gradients. Copy, paste, and bring your designs to life.",
    images: ["/og-banner.png"],
    creator: "@mayurbijarniya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://patternwave.dev",
  },
  category: "technology",
  classification: "Web Design Tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/GeistVF.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pattern Wave" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Pattern Wave",
              "description": "Create stunning websites with our curated collection of modern CSS background patterns and wave-inspired gradients.",
              "url": "https://patternwave.dev",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "creator": {
                "@type": "Person",
                "name": "Mayur Bijarniya",
                "url": "https://github.com/mayurbijarniya"
              },
              "browserRequirements": "Requires a modern web browser with CSS3 support",
              "softwareVersion": "1.0.0",
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString().split('T')[0],
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "keywords": "CSS background patterns, wave patterns, gradients, web design, tailwind css",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}