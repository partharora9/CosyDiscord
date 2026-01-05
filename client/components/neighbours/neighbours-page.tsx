"use client";

import { motion } from "framer-motion";
import { User, Crown, Shield, Gamepad2, Sparkles, Pickaxe, Hammer, Clock, Trophy, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

// Mock Data
const owners = [
    {
        name: "YvY",
        role: "Head of the Department",
        id: "1165528206330310707",
        bio: "Managing neighbours  operations by YvY since 2025",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        name: "Lyna",
        role: "Moderator",
        id: "757902353679515713",
        bio: "Keeping the server running smoothly and efficiently.",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20"
    }
];

const players = [
    { name: "StarGazer42", activity: "Building a castle", level: 42, role: "Architect" },
    { name: "NightOwl_MC", activity: "Mining diamonds", level: 28, role: "Miner" },
    { name: "CosyBuilder", activity: "Farming crops", level: 15, role: "Farmer" },
    { name: "PixelDreamer", activity: "Exploring the End", level: 65, role: "Explorer" },
    { name: "MoonlightMiner", activity: "AFK at spawn", level: 5, role: "Member" },
    { name: "StardustPlayer", activity: "Trading with villagers", level: 33, role: "Trader" },
    { name: "RedstonePro", activity: "Wiring a door", level: 50, role: "Engineer" },
    { name: "PvpMaster", activity: "In the arena", level: 99, role: "Gladiator" },
];

export const NeighboursPage = () => {
    const [onlineCount, setOnlineCount] = useState(0);

    useEffect(() => {
        setOnlineCount(Math.floor(Math.random() * 41) + 10); // Random number between 10 and 50
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-[family-name:var(--font-outfit)] relative overflow-hidden">

            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
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
                        className="text-5xl md:text-8xl font-black tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-glow">Neighbours</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light"
                    >
                        Meet the players who call Cosy their home. See who&apos;s online and join the fun!
                    </motion.p>

                    {/* Status Pill */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-[#0A0A0B] border border-white/10 text-sm font-medium shadow-2xl shadow-purple-500/10"
                    >
                        <div className="flex items-center gap-2 text-green-400">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            {onlineCount}/50 Online
                        </div>

                    </motion.div>

                    {/* Play Now Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="https://www.roblox.com/games/12699642568/Neighbors#!/about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] group"
                        >
                            <Gamepad2 className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
                            Play Now
                        </a>
                    </motion.div>
                </div>


                {/* Server Owners */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {owners.map((owner, i) => (
                            <OwnerCard key={i} owner={owner} index={i} />
                        ))}
                    </div>
                </div>



                {/* Footer Note */}


            </div>
        </div>
    );
};

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
                    <Image
                        src={avatarUrl}
                        alt={owner.name}
                        width={96}
                        height={96}
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
