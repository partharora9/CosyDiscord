"use client";

import { Users, Moon, Coffee, Calendar, Mic, Bot, Heart, Sparkles, MessageCircle, Gamepad2, Headphones, Coins } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Users,
        title: "Friendly Community",
        description: "Meet amazing people from around the world in a welcoming and supportive environment. Our staff works hard to ensure kindness prevails.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/5",
        gradient: "from-indigo-500/10 to-transparent",
        border: "border-indigo-500/20",
        hoverBorder: "group-hover:border-indigo-500/50",
        hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(129,140,248,0.3)]",
        badge: "Most Popular",
        stat: "Active Daily"
    },
    {
        icon: Moon,
        title: "Late Night Vibes",
        description: "Perfect for cozy late-night sessions with a chill, relaxed atmosphere. We have dedicated channels for lo-fi music and deep talks.",
        color: "text-purple-400",
        bg: "bg-purple-500/5",
        gradient: "from-purple-500/10 to-transparent",
        border: "border-purple-500/20",
        hoverBorder: "group-hover:border-purple-500/50",
        hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)]",
        badge: "24/7 Active",
        stat: "Lo-Fi Radio"
    },
    {
        icon: Coffee,
        title: "Relaxing Space",
        description: "A digital comfort zone designed to help users unwind and escape daily chaos. No drama, just good vibes and peaceful interactions.",
        color: "text-amber-400",
        bg: "bg-amber-500/5",
        gradient: "from-amber-500/10 to-transparent",
        border: "border-amber-500/20",
        hoverBorder: "group-hover:border-amber-500/50",
        hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]",
        badge: "Stress Free",
        stat: "No Toxicity"
    },
    {
        icon: Calendar,
        title: "Fun Events",
        description: "Regular community events, game nights (Among Us, Minecraft), and movie weekends to keep the experience engaging and fun for everyone.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/5",
        gradient: "from-emerald-500/10 to-transparent",
        border: "border-emerald-500/20",
        hoverBorder: "group-hover:border-emerald-500/50",
        hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]",
        badge: "Weekly",
        stat: "Prizes"
    },
    {
        icon: Mic,
        title: "Active Voice Chats",
        description: "Hop into our active voice channels! Whether you want to game, listen to music together, or just body-double while working, there's a spot for you.",
        color: "text-rose-400",
        bg: "bg-rose-500/5",
        gradient: "from-rose-500/10 to-transparent",
        border: "border-rose-500/20",
        hoverBorder: "group-hover:border-rose-500/50",
        hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,113,133,0.3)]",
        badge: "Social",
        stat: "Always Open"
    },
    {
        icon: Bot,
        title: "Custom Bots & Econ",
        description: "Enjoy our unique server economy, fun mini-games, and custom bots designed specifically to enhance your Cosy experience.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/5",
        gradient: "from-cyan-500/10 to-transparent",
        border: "border-cyan-500/20",
        hoverBorder: "group-hover:border-cyan-500/50",
        hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
        badge: "Custom",
        stat: "Economy"
    }
];

export const FeaturesSection = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-20">
            <div className="max-w-7xl mx-auto relative cursor-default">
                <div className="text-center mb-24 space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#5865F2]/10 text-[#5865F2] border border-[#5865F2]/20 text-xs font-bold uppercase tracking-[0.2em]">
                        Why Choose Us
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg font-[family-name:var(--font-outfit)]">
                        Why Join <span className="text-[#5865F2] drop-shadow-[0_0_15px_rgba(88,101,242,0.5)]">Cosy?</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed font-light">
                        We’ve created the perfect space for you to relax and connect. Discover what makes our community truly special.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.a
                            key={index}
                            href="https://discord.gg/cosy"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-[2.5rem] bg-[#0A0A0B] ${feature.border} ${feature.hoverBorder} ${feature.hoverShadow} border flex flex-col items-start space-y-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden h-full`}
                        >
                            {/* Inner Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="w-full flex justify-between items-start relative z-10">
                                <div className={`p-4 rounded-2xl bg-[#111113] ${feature.color} ring-1 ring-white/5 group-hover:bg-white/5 transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>

                                {feature.badge && (
                                    <div className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border bg-[#111113] border-white/5 text-zinc-400 group-hover:text-white transition-colors`}>
                                        {feature.badge}
                                    </div>
                                )}
                            </div>

                            <div className="relative z-10 space-y-3 flex-1">
                                <h3 className="text-2xl font-bold text-white tracking-tight font-[family-name:var(--font-outfit)] flex items-center gap-2">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="relative z-10 w-full pt-6 mt-auto border-t border-white/5 flex items-center justify-between text-xs font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                <span className="flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3" />
                                    {feature.stat}
                                </span>
                                <span className="group-hover:translate-x-1 transition-transform">
                                    Learn more →
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
