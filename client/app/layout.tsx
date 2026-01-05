import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "@/components/ui/splash-screen";


import { ProtectionProvider } from "@/components/providers/protection-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

import { UserProvider } from "@/components/providers/user-provider";
import { LoginScreen } from "@/components/auth/login-screen";

import DisableRightClick from "@/components/ui/disable-right-click";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CosyDiscord",
  description: "A sanctuary for gamers, creators, and friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-black text-white selection:bg-indigo-500/30`}
      >
        <ProtectionProvider />

        <SmoothScrollProvider>
          <UserProvider>
            <LoginScreen />
            <SplashScreen />
            <DisableRightClick />
            {children}
          </UserProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
