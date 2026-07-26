import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Hipsters Cafe® | Eats that slap | Ghaziabad",
    template: "%s | The Hipsters Cafe®",
  },
  description: "Welcome to The Hipsters Cafe® — a travel-inspired cafe with classic food, retro interiors, and vibrant open mic nights. Located in Raj Nagar, Ghaziabad.",
  keywords: ["cafe in ghaziabad", "hipsters cafe", "open mic night ghaziabad", "travel cafe india", "retro cafe ghaziabad"],
  openGraph: {
    type: "website", locale: "en_IN", url: "https://thehipsterscafe.com",
    title: "The Hipsters Cafe® | Eats that slap",
    description: "A travel-inspired cafe with classic food, retro interiors, and vibrant open mic nights in Ghaziabad.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-stone-950 text-amber-50 font-inter antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
