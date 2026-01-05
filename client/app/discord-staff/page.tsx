import Link from "next/link";
import { StaffSection } from "@/components/discord-staff/staff-section";
import { ArrowLeft } from "lucide-react";


export default function DiscordStaffPage() {
    return (
        <div className="min-h-screen font-sans relative flex flex-col bg-black">
            {/* Header for navigation back */}
            <header className="p-6 flex justify-between items-center bg-transparent relative z-20">
                <Link href="/" className="text-2xl font-black text-white tracking-tighter text-glitch hover:opacity-80 transition-opacity">
                    𝐂𝐎𝐒𝐘
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/5"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <a href="https://discord.gg/cosy" target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-full font-bold transition-all text-sm flex items-center justify-center">
                        Join Discord
                    </a>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center">
                <StaffSection />
            </main>


        </div>
    );
}
