"use client";

import { useState, useEffect } from "react";
import { Copy, Shield, Users, Sword, Sparkles, User, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
    {
        icon: Shield,
        title: "Protected Land",
        description: "Claim your territory and build without worry. Our grief protection keeps your creations safe.",
        color: "text-blue-400",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.6)]"
    },
    {
        icon: Users,
        title: "Active Community",
        description: "Join hundreds of players in our friendly community. Make friends, trade, and adventure together.",
        color: "text-purple-400",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.6)]"
    },
    {
        icon: Sword,
        title: "Custom Features",
        description: "Unique plugins, custom enchants, and exclusive events make every session memorable.",
        color: "text-red-400",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(248,113,113,0.6)]"
    },
    {
        icon: Sparkles,
        title: "Regular Events",
        description: "Weekly events, seasonal celebrations, and community challenges with amazing rewards.",
        color: "text-yellow-400",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)]"
    },
];

const team = [
    {
        name: "Unknown",
        role: "Server Owner",
        roleColor: "text-yellow-400",
        gradient: "from-yellow-400 to-orange-500",
        description: "Manages the server infrastructure and oversees all operations.",
    },
    {
        name: "Unknown",
        role: "Head Admin",
        roleColor: "text-purple-400",
        gradient: "from-purple-400 to-pink-500",
        description: "Handles player moderation and community management.",
    },
    {
        name: "Unknown",
        role: "Developer",
        roleColor: "text-green-400",
        gradient: "from-green-400 to-emerald-500",
        description: "Creates custom plugins and maintains server features.",
    },
    {
        name: "Unknown",
        role: "Community Manager",
        roleColor: "text-pink-400",
        gradient: "from-pink-400 to-rose-500",
        description: "Organizes events and keeps the community engaged.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 100 },
    },
};

export function MinecraftSection() {
    const [copied, setCopied] = useState(false);
    const serverIp = "play.cosymc.net";

    const handleCopy = () => {
        navigator.clipboard.writeText(serverIp);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full py-24 px-4 md:px-8 relative overflow-hidden bg-black selection:bg-purple-500/30">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto relative z-10 space-y-24"
            >

                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-300 text-sm font-semibold backdrop-blur-md mx-auto shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    >
                        <span className="tracking-wide">Java & Bedrock • 1.20.4</span>
                    </motion.div>

                    <div className="relative">
                        <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-100 to-purple-400/80 drop-shadow-[0_0_50px_rgba(168,85,247,0.5)] font-[family-name:var(--font-outfit)] tracking-tight">
                            COSY <span className="text-purple-500 inline-block animate-pulse duration-[3000ms]">Minecraft Server</span>
                        </h2>
                        <div className="absolute -inset-1 blur-3xl bg-purple-500/20 rounded-full z-[-1] animate-pulse" />
                    </div>

                    <p className="max-w-2xl mx-auto text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
                        A survival experience where <span className="text-purple-300 font-medium">late-night adventures</span> meet <span className="text-purple-300 font-medium">lasting friendships</span>.
                    </p>

                    {/* Server Status Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-zinc-900/90 border border-zinc-800 p-3 md:p-4 md:pl-10 rounded-3xl backdrop-blur-xl shadow-2xl mx-auto mt-8 hover:border-purple-500/50 transition-colors duration-300 group"
                    >
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </div>
                                <span className="text-zinc-200 font-bold tracking-wide">OFFLINE</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-purple-300 transition-colors">
                                <Users className="w-5 h-5" />
                                <span className="font-mono font-medium">0/100</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-black/60 rounded-2xl pl-5 pr-1.5 py-1.5 border border-zinc-800 group-hover:border-purple-500/30 transition-colors">
                            <span className="font-mono text-purple-300 font-bold tracking-wider text-lg">{serverIp}</span>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCopy}
                                className="p-3 bg-zinc-800 hover:bg-purple-600 text-white rounded-xl transition-all duration-300 shadow-lg"
                                title="Copy IP"
                            >
                                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <div className="space-y-16">
                    <motion.div variants={itemVariants} className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                            Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Features</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={cn(
                                    "group p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm transition-all duration-500",
                                    "hover:bg-zinc-900/80 hover:border-purple-500/20",
                                    feature.glow
                                )}
                            >
                                <div className={cn("w-16 h-16 rounded-2xl bg-zinc-900/80 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner", feature.color.replace('text-', 'bg-') + '/10')}>
                                    <feature.icon className={cn("w-8 h-8 transition-colors duration-500", feature.color)} />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">{feature.title}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Grid */}
                <div className="space-y-16">
                    <motion.div variants={itemVariants} className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Team</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 transition-all duration-300 hover:border-purple-500/20 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Avatar Ring */}
                                <div className={cn("w-28 h-28 rounded-full p-1 bg-gradient-to-br mb-6 shadow-xl transition-transform duration-500 group-hover:scale-105", member.gradient)}>
                                    <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden relative">
                                        <User className="w-12 h-12 text-zinc-700 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>

                                <div className="space-y-2 mb-4 relative z-10">
                                    <div className={cn("text-xs font-black uppercase tracking-[0.2em]", member.roleColor)}>
                                        {member.role}
                                    </div>
                                    <h4 className="text-3xl font-black text-white tracking-tight">{member.name}</h4>
                                </div>

                                <p className="text-zinc-500 text-sm font-medium relative z-10 group-hover:text-zinc-300 transition-colors">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
