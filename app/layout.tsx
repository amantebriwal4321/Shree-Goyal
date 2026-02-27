import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shree Goyal Electronics | Premium Electronics & Jio MART Digital Partner",
  description: "Experience the best in electronics at Shree Goyal Electronics, Pakur. Your trusted Jio MART Digital Partner for mobiles, laptops, home appliances, and repair services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
