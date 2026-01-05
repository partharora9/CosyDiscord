"use client";

import { History, Heart, Building2, Pickaxe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1] as const
        }
    }
};

export const AboutSection = () => {
    const [memberCount, setMemberCount] = useState("5,000+");

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/discord/server');
                if (!res.ok) return;
                const data = await res.json();
                if (data.approximate_member_count) {
                    setMemberCount(data.approximate_member_count.toLocaleString() + "+");
                }
            } catch (error) {
                console.error("Failed to fetch member count", error);
            }
        };
        fetchStats();
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center py-32 px-4 sm:px-6 lg:px-8 z-20 overflow-hidden" id="about">

            {/* Ambient Background Glows */}


            <div className="max-w-7xl mx-auto relative w-full">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-24 space-y-6 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-md group-hover:opacity-50 transition-opacity duration-500" />
                        <span className="relative inline-block px-5 py-2 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30 text-xs font-black uppercase tracking-[0.25em] shadow-lg">
                            Discover
                        </span>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter font-[family-name:var(--font-outfit)] drop-shadow-2xl">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">Cosy</span>
                    </h2>
                    <p className="text-zinc-400 max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed">
                        A sanctuary for <span className="text-white">gamers</span>, <span className="text-white">creators</span>, and <span className="text-white">friends</span>.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {/* Left Column: Main Story */}
                    <motion.div className="lg:col-span-7 space-y-8" variants={itemVariants}>
                        {/* Main Card */}
                        <div className="group relative p-10 rounded-[3rem] bg-[#0A0A0B] border border-white/5 overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.2)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Animated blobs */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/10">
                                        <Heart className="w-8 h-8 group-hover:animate-pulse" />
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        {["Gaming", "Social", "Chill"].map((tag, i) => (
                                            <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 text-zinc-300 text-xs font-bold border border-white/5 uppercase tracking-wide group-hover:bg-white/10 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 font-[family-name:var(--font-outfit)] tracking-tight">More Than Just a Server</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed font-medium mb-10 max-w-2xl">
                                    Cosy isn't just another Discord server; it's a digital home. We've cultivated a <span className="text-indigo-400 font-bold glow-sm">toxic-free environment</span> where you can truly be yourself. Find a duo, share art, or just vent—we're here for you.
                                </p>

                                <div className="flex items-center gap-6 text-sm font-bold text-zinc-500 border-t border-white/5 pt-8">
                                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-green-500/10 text-green-400 border border-green-500/10">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                                        <span>Active Now</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                                        <span>24/7 Moderation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* History Card */}
                        <div className="group relative p-10 rounded-[3rem] bg-[#0A0A0B] border border-white/5 overflow-hidden transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.15)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 shrink-0 border border-amber-500/10 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-amber-500/10">
                                    <History className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-3xl font-black text-white font-[family-name:var(--font-outfit)]">Our Story</h3>
                                        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-black border border-amber-500/20 uppercase tracking-widest shadow-sm">Since 2020</span>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed font-medium mb-8">
                                        Founded in 2020 with a simple vision: a comfortable space to unwind. From a small friend group to a thriving global family. Our core values of <span className="text-amber-400 font-bold">kindness and inclusivity</span> remain unchanged.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-5 rounded-2xl bg-black/40 border border-white/5 group-hover:border-amber-500/20 transition-colors">
                                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-bold">Members</p>
                                            <p className="text-3xl font-black text-white">{memberCount}</p>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-black/40 border border-white/5 group-hover:border-amber-500/20 transition-colors">
                                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-bold">Countries</p>
                                            <p className="text-3xl font-black text-white">40+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Expansions */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            className="p-10 rounded-[3rem] bg-gradient-to-br from-[#1a1b26] to-[#0A0A0B] border border-white/5 text-center relative overflow-hidden group shadow-2xl"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-gradient-xy"></div>
                            <h3 className="text-2xl font-black text-white mb-2 font-[family-name:var(--font-outfit)] relative z-10 tracking-tight">Expansions • 2025</h3>
                            <p className="text-zinc-300 text-sm font-medium relative z-10">We are constantly growing our universe.</p>
                        </motion.div>

                        {/* Roblox Card */}
                        <motion.div variants={itemVariants}>
                            <div className="group relative p-8 rounded-[2.5rem] bg-[#0A0A0B] border border-white/5 hover:border-red-500/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.2)]">
                                <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                                    <span className="text-[10px] text-zinc-400 font-black tracking-wider">ONLINE</span>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-red-500/10 text-red-500 shrink-0 border border-red-500/10 group-hover:rotate-6 transition-transform duration-300">
                                        <Building2 className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-2 font-[family-name:var(--font-outfit)] flex flex-wrap items-center gap-3">
                                            Neighbours
                                            <span className="text-[10px] px-2.5 py-0.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 font-black uppercase tracking-wide">Roblox</span>
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-medium">
                                            A dedicated community space within the Roblox game Neighbours. Customize your own home in our exclusive server neighborhood.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Minecraft Card */}
                        <motion.div variants={itemVariants}>
                            <div className="group relative p-8 rounded-[2.5rem] bg-[#0A0A0B] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]">
                                <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/5">
                                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
                                    <span className="text-[10px] text-zinc-400 font-black tracking-wider">OFFLINE</span>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 shrink-0 border border-emerald-500/10 group-hover:-rotate-6 transition-transform duration-300">
                                        <Pickaxe className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-2 font-[family-name:var(--font-outfit)] flex flex-wrap items-center gap-3">
                                            Cosy SMP
                                            <span className="text-[10px] px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black uppercase tracking-wide">Minecraft</span>
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-medium">
                                            Our official Survival Multiplayer server. Build together, explore new biomes, and participate in weekly competitions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
