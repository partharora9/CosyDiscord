"use client";

import { motion } from "framer-motion";
import { User, Gamepad2, ArrowLeft, Swords, Skull, Ship, Anchor } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Mock Data for Blox Fruits Community
const communityLeads = [
    {
        name: "Dante",
        role: "Head of the Department",
        id: "1158267727723642900",
        bio: "Leading the Cosy fleet to dominance. Expert in fruit awakening and PvP strategy.",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        name: "Hunter",
        role: "Moderator",
        id: "866279714015412244",
        bio: "Bounty hunter extraordinaire. Protecting the crew from rival factions.",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20"
    }
];

const topPlayers = [
    { name: "FruitMaster99", activity: "Raiding Labs", level: 2550, role: "Awakened" },
    { name: "SwordSaint", activity: "PvP Arena", level: 2400, role: "Swordsman" },
    { name: "HakiGod", activity: "Hunting Sea Events", level: 2550, role: "Captain" },
    { name: "DoughUser_X", activity: "Trading Plaza", level: 1850, role: "Trader" },
    { name: "LeopardSpam", activity: "Grinding Mastery", level: 2100, role: "Bounty Hunter" },
    { name: "MarineChase", activity: "Protecting Newbies", level: 2550, role: "Admiral" },
    { name: "SeaBeastSlayer", activity: "Terror Shark Hunt", level: 2300, role: "Navigator" },
    { name: "BuddhaSpammer", activity: "Farming levels", level: 1500, role: "Grinder" },
];

export const BloxFruitsPage = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-[family-name:var(--font-outfit)] relative overflow-hidden">

            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
                {/* Ocean/Blue Theme for Blox Fruits */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group px-4 py-2 rounded-full hover:bg-white/5 w-fit">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <div className="text-center space-y-6 mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black tracking-tight flex flex-col md:block gap-2"
                    >
                        <span>Cosy</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-glow">Blox Fruits</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light"
                    >
                        Join our private servers, participate in raids, and trade with the community.
                    </motion.p>

                    {/* Stats & Play Button */}
                    <div className="flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-[#0A0A0B] border border-white/10 text-sm font-medium shadow-2xl shadow-blue-500/10"
                        >
                            <div className="flex items-center gap-2 text-green-400">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                {topPlayers.length + 45} Online
                            </div>
                            <div className="w-px h-4 bg-white/10"></div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Swords className="w-4 h-4" />
                                PvP Enabled
                            </div>
                        </motion.div>

                        {/* Play Now Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <a
                                href="https://www.roblox.com/share?code=46808cdcb784dc4fb5d99af2beae490f&type=ExperienceDetails&stamp=1767554802423"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] group"
                            >
                                <Ship className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
                                Join Server
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Fleet Commanders */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <Anchor className="w-6 h-6 text-blue-400" />
                        Fleet Commanders
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {communityLeads.map((owner, i) => (
                            <div key={i}>
                                <OwnerCard owner={owner} index={i} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Crew */}
                <div>
                    <motion.div
                        className="flex items-center justify-between mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                            <Skull className="w-6 h-6 text-cyan-400" />
                            Active Crew
                        </h2>
                        <div className="text-sm text-zinc-500 font-medium">
                            Top Bounty Hunters
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {topPlayers.map((player, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-5 rounded-2xl bg-[#0A0A0B] border border-white/5 flex items-center gap-5 hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all group"
                            >
                                <div className="relative w-14 h-14 shrink-0">
                                    <img
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.name}`}
                                        alt={player.name}
                                        className="w-full h-full rounded-xl bg-zinc-900 group-hover:scale-105 transition-transform"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0A0A0B] flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-[#0A0A0B]"></div>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-white text-sm truncate">{player.name}</h4>
                                        <span className="text-[10px] font-bold text-zinc-600 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                                            LVL {player.level}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                                        <span className="truncate text-blue-400/80">{player.activity}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusing the OwnerCard logic but keeping it self-contained for this page
const OwnerCard = ({ owner, index }: { owner: any, index: number }) => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchDiscordAvatar = async () => {
            if (!owner.id) return;
            try {
                const response = await fetch(`/api/discord/${owner.id}`);
                if (!response.ok) return;
                const data = await response.json();

                if (data.avatar) {
                    const avatarHash = data.avatar;
                    const ext = avatarHash.startsWith("a_") ? "gif" : "png";
                    setAvatarUrl(`https://cdn.discordapp.com/avatars/${data.id}/${avatarHash}.${ext}?size=512`);
                }
            } catch (err) {
                console.error("Failed to fetch discord avatar", err);
            }
        };

        fetchDiscordAvatar();
    }, [owner.id]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-[2rem] bg-[#0A0A0B] border border-white/5 flex items-center gap-8 group hover:border-white/10 transition-all hover:bg-white/[0.02]"
        >
            <div className={`w-24 h-24 rounded-2xl ${owner.bg} shrink-0 flex items-center justify-center text-3xl font-bold ${owner.color} shadow-lg shadow-black/50 overflow-hidden`}>
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={owner.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    owner.name[0]
                )}
            </div>
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{owner.name}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider border ${owner.bg} ${owner.color} ${owner.border}`}>
                        {owner.role}
                    </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {owner.bio}
                </p>
            </div>
        </motion.div>
    );
};
