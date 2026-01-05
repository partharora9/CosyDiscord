import Link from "next/link";

import { AboutSection } from "@/components/home/about-section";
import { TeamSection } from "@/components/home/team-section";
import { StatsSection } from "@/components/home/stats-section";
import { InfoSection } from "@/components/home/info-section";
import { Footer } from "@/components/footer";
import { RobloxTeamSection } from "@/components/home/roblox-team-section";
import { MinecraftSection } from "@/components/home/minecraft-section";


import { ActionLogo } from "@/components/ui/action-logo";
import { SiteHeader } from "@/components/navigation/site-header";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans relative overflow-x-hidden selection:bg-indigo-500/30">
      {/* Navigation / Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="w-full">

        {/* HERO SECTION - Explore Cosy */}
        <section className="h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
          {/* Hero Background Video/GIF */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10" />
            <img
              src="/background.gif"
              alt="Background"
              className="w-full h-full object-cover opacity-90 brightness-110 contrast-125 saturate-125"
            />
          </div>

          <div className="absolute inset-0 pointer-events-none z-10">
            {/* Ambient Floating Orbs (CSS only) */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-float mix-blend-overlay" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-float-delayed mix-blend-overlay" />
          </div>

          <div className="text-center space-y-2 mb-16 animate-fade-in-up relative z-20">
            <h1 className="lg:hidden text-[6rem] sm:text-[8rem] md:text-[13rem] leading-none font-black font-[family-name:var(--font-outfit)] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              COSY
            </h1>
          </div>



          {/* Scroll Indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce text-white/50">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Explore</p>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        {/* Content Sections */}
        <div id="about" className="min-h-screen w-full flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm relative z-20">
          <AboutSection />
        </div>
        <div id="stats" className="min-h-screen w-full flex items-center justify-center bg-zinc-950 relative z-20">
          <StatsSection />
        </div>
        <div id="info" className="min-h-screen w-full flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm relative z-20">
          <InfoSection />
        </div>
        <div id="team" className="min-h-screen w-full flex items-center justify-center bg-zinc-950 relative z-20">
          <TeamSection />
        </div>

        {/* New Roblox Team Section */}
        <div id="roblox-team" className="min-h-screen w-full flex items-center justify-center relative z-20">
          <RobloxTeamSection />
        </div>

        {/* Minecraft Section */}
        <div id="minecraft" className="min-h-screen w-full flex items-center justify-center relative z-20 bg-black">
          <MinecraftSection />
        </div>

        <div className="w-full relative z-20">
          <Footer />
        </div>

      </main>
    </div >
  );
}
