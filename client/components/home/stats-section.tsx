"use client";

import { Users, Hash, Wifi, ExternalLink, Zap, MessageSquare, Mic, Activity, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WorldChat } from "./world-chat";

interface ServerStats {
    members: string;
    online: string;
    serverName: string;
    presenceCount?: number;
    premiumSubscriptionCount?: number;
    premiumTier?: number;
    voiceChannels?: number;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

export const StatsSection = () => {
    const [stats, setStats] = useState<ServerStats>({
        members: "0",
        online: "0",
        serverName: "Cosy",
        premiumSubscriptionCount: 0,
        premiumTier: 0,
        voiceChannels: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/discord/server');
                if (!res.ok) return;
                const data = await res.json();

                if (data.approximate_member_count) {
                    setStats({
                        members: data.approximate_member_count.toLocaleString(),
                        online: data.approximate_presence_count?.toLocaleString() || "0",
                        serverName: data.name || "Cosy",
                        presenceCount: data.approximate_presence_count,
                        premiumSubscriptionCount: data.premium_subscription_count || 0,
                        premiumTier: data.premium_tier || 0,
                        voiceChannels: data.voice_channels || 0
                    });
                }
            } catch (error) {
                console.error("Failed to fetch server stats", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <section className="relative flex flex-col justify-center py-16 md:py-32 px-4 sm:px-6 lg:px-8 z-20" id="stats">
            <div className="max-w-7xl mx-auto w-full space-y-8">

                {/* Header */}
                <motion.div
                    className="text-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Live Dashboard
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight font-[family-name:var(--font-outfit)]">
                        Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Overview</span>
                    </h2>
                    <p className="text-zinc-400 text-lg font-light">Real-time data from our Discord community.</p>
                </motion.div>


                {/* Top Row: 4 Detailed Stats Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Total Members */}
                    <StatCard
                        icon={Users}
                        label="Total Members"
                        value={stats.members}
                        subtext="+124 this week"
                        color="indigo"
                    />

                    {/* Online Now */}
                    <StatCard
                        icon={Wifi}
                        label="Online Now"
                        value={stats.online}
                        subtext="Active & Chatting"
                        color="emerald"
                    />

                    {/* Voice Activity (Real-time) */}
                    <StatCard
                        icon={Mic}
                        label="Voice Channels"
                        value={stats.voiceChannels?.toString() || "0"}
                        subtext="Ready to Speak"
                        color="rose"
                    />

                    {/* Server Boosts (Real-time) */}
                    <StatCard
                        icon={Zap}
                        label="Server Boosts"
                        value={`Level ${stats.premiumTier}`}
                        subtext={`${stats.premiumSubscriptionCount} Boosts`}
                        color="purple"
                    />
                </motion.div>

                {/* Bottom Row: Chat + Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full items-stretch">

                    {/* Live World Chat (Spans 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 min-h-[600px] flex flex-col"
                    >
                        <div className="relative h-full bg-[#0A0A0B] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                            {/* Header Stripe */}
                            <div className="h-14 border-b border-white/5 bg-white/[0.02] flex items-center px-6 justify-between shrink-0">
                                <div className="flex items-center gap-2 text-sm font-bold text-zinc-400">
                                    <Hash className="w-4 h-4 text-zinc-500" />
                                    <span>world-chat</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Live Feed
                                </div>
                            </div>

                            {/* Chat Component */}
                            <div className="flex-1 relative">
                                <WorldChat />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column Stack */}
                    <div className="flex flex-col gap-6 h-full">

                        {/* Server Status Card - Energetic Tech Look */}
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-[#0A0A0B] border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-500" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 blur-[60px] rounded-full group-hover:bg-purple-500/10 transition-colors duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white font-[family-name:var(--font-outfit)] tracking-tight">System Status</h3>
                                </div>
                                <div className="space-y-4">
                                    <StatusItem label="API Latency" value="24ms" status="good" />
                                    <StatusItem label="Chat Gateway" value="Connected" status="good" />
                                    <StatusItem label="Voice Servers" value="Operational" status="good" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Ready to Join Action - High Energy Gradient */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover="hover"
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex-1 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center gap-8 relative overflow-hidden group shadow-2xl shadow-indigo-500/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2] to-[#4752C4] z-0" />
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-0" />

                            {/* Animated Background Blobs */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-[100px] rounded-full animate-pulse-slow" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-400/20 blur-[100px] rounded-full animate-pulse-slow delay-1000" />

                            <div className="relative z-10 p-5 bg-white/10 rounded-3xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-xl border border-white/20 backdrop-blur-sm">
                                <ExternalsDiscordIcon className="w-14 h-14 text-white drop-shadow-lg" />
                            </div>

                            <div className="relative z-10 space-y-2">
                                <h3 className="text-4xl font-black text-white mb-2 font-[family-name:var(--font-outfit)] tracking-tight drop-shadow-lg">Join the Fun</h3>
                                <p className="text-white/90 text-sm font-medium max-w-[220px] mx-auto leading-relaxed">
                                    Be part of the most cozy community on Discord.
                                </p>
                            </div>

                            <a
                                href="https://discord.com/invite/cosy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 inline-flex items-center gap-2 bg-white text-[#5865F2] font-black py-4 px-8 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group/btn"
                            >
                                Join Server
                                <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

// Sub-components for cleaner code
const StatCard = ({ icon: Icon, label, value, subtext, color }: { icon: any, label: string, value: string, subtext: string, color: string }) => {

    const colors: Record<string, string> = {
        indigo: "text-indigo-400 group-hover:text-white bg-indigo-500/10 group-hover:bg-indigo-500 border-indigo-500/20 group-hover:border-indigo-500/50 shadow-indigo-500/20",
        emerald: "text-emerald-400 group-hover:text-white bg-emerald-500/10 group-hover:bg-emerald-500 border-emerald-500/20 group-hover:border-emerald-500/50 shadow-emerald-500/20",
        rose: "text-rose-400 group-hover:text-white bg-rose-500/10 group-hover:bg-rose-500 border-rose-500/20 group-hover:border-rose-500/50 shadow-rose-500/20",
        purple: "text-purple-400 group-hover:text-white bg-purple-500/10 group-hover:bg-purple-500 border-purple-500/20 group-hover:border-purple-500/50 shadow-purple-500/20",
    };

    const gradients: Record<string, string> = {
        indigo: "from-indigo-500/20 to-blue-500/20",
        emerald: "from-emerald-500/20 to-teal-500/20",
        rose: "from-rose-500/20 to-pink-500/20",
        purple: "from-purple-500/20 to-violet-500/20",
    };

    return (
        <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-[2rem] bg-[#0A0A0B] border border-white/5 flex flex-col items-start justify-between gap-6 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
        >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className={`relative z-10 p-3.5 rounded-2xl ${colors[color]} border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg hover:rotate-6`}>
                <Icon className="w-7 h-7" />
            </div>

            <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-[family-name:var(--font-outfit)] tracking-tight drop-shadow-sm">{value}</h3>
                <div className="flex flex-col">
                    <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider group-hover:text-white/80 transition-colors">{label}</p>
                    <p className={`text-xs mt-1 font-medium ${color === 'rose' ? 'text-rose-400' : 'text-zinc-500'} group-hover:text-white/60 transition-colors`}>{subtext}</p>
                </div>
            </div>
        </motion.div>
    );
};

const StatusItem = ({ label, value, status }: { label: string, value: string, status: 'good' | 'bad' }) => (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
        <span className="text-zinc-400 text-xs font-medium">{label}</span>
        <div className="flex items-center gap-2">
            <span className="text-white text-xs font-bold">{value}</span>
            <div className={`w-2 h-2 rounded-full ${status === 'good' ? 'bg-emerald-500' : 'bg-red-500'} shadow-[0_0_8px_currentColor]`} />
        </div>
    </div>
);

function ExternalsDiscordIcon({ className }: { className?: string }) {
    return (
        <motion.svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="currentColor"
            variants={{
                hover: {
                    rotate: [0, -10, 10, -10, 10, 0],
                    transition: { duration: 0.5, ease: "easeInOut" }
                }
            }}
        >
            <defs>
                <mask id="discord-mask">
                    <rect width="24" height="24" fill="white" />
                    <g style={{ transformOrigin: "8px 13px" }}>
                        <motion.path
                            d="M8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.956 2.419-2.157 2.419Z"
                            fill="black"
                            variants={{
                                hover: { scaleY: [1, 0.1, 1], transition: { duration: 0.3, delay: 0.1, repeat: 1, repeatDelay: 0.5 } }
                            }}
                        />
                    </g>
                    <g style={{ transformOrigin: "16px 13px" }}>
                        <motion.path
                            d="M15.995 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.095 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z"
                            fill="black"
                            variants={{
                                hover: { scaleY: [1, 0.1, 1], transition: { duration: 0.3, delay: 0.1, repeat: 1, repeatDelay: 0.5 } }
                            }}
                        />
                    </g>
                </mask>
            </defs>
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.48 13.48 0 0 0-.59 1.226 18.667 18.667 0 0 0-7.53 0 13.483 13.483 0 0 0-.593-1.226.075.075 0 0 0-.078-.037 19.791 19.791 0 0 0-4.886 1.516.07.07 0 0 0-.03.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.897 19.897 0 0 0 5.993 3.03.076.076 0 0 0 .084-.029 14.136 14.136 0 0 0 1.225-1.996.076.076 0 0 0-.041-.105 13.116 13.116 0 0 1-1.897-.905.075.075 0 0 1-.005-.125c.168-.125.336-.252.497-.384a.075.075 0 0 1 .103-.005 14.888 14.888 0 0 0 10.994 0 .075.075 0 0 1 .103.005c.163.132.332.259.502.384a.075.075 0 0 1-.006.125 12.89 12.89 0 0 1-1.896.905.076.076 0 0 0-.041.105 14.12 14.12 0 0 0 1.226 1.996.077.077 0 0 0 .083.028 19.887 19.887 0 0 0 6.002-3.03.075.075 0 0 0 .031-.057c.451-4.846-.665-9.378-5.32-13.66a.07.07 0 0 0-.03-.027Z" mask="url(#discord-mask)" />
        </motion.svg>
    );
}
