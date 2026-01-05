"use client";

import { Info, HelpCircle, ShieldCheck, Gamepad, CalendarDays, ExternalLink, MessageCircle, Star, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

const infoItems = [
    {
        title: "How to Join?",
        content: "Click the 'Join Discord' button at the top! Upon entry, you'll be greeted by our security bot. Simply verify your account to unlock all channels. It takes less than a minute!",
        icon: HelpCircle,
        color: "text-indigo-400",
        borderColor: "border-indigo-400/20",
        bgColor: "bg-indigo-400/10",
        gradient: "from-indigo-500/20 to-purple-500/20",
        badges: ["Easy Verify", "Instant Access"],
        stat: "Avg. Wait: <1m"
    },
    {
        title: "Server Rules",
        content: "We prioritize a safe and cozy environment. Be respectful, no toxicity, and follow the Discord Community Guidelines. We have a zero-tolerance policy for harassment.",
        icon: ShieldCheck,
        color: "text-emerald-400",
        borderColor: "border-emerald-400/20",
        bgColor: "bg-emerald-400/10",
        gradient: "from-emerald-500/20 to-teal-500/20",
        badges: ["Safe Space", "Active Mods"],
        stat: "Ban Rate: Low"
    },
    {
        title: "Gaming & Events",
        content: "We host weekly game nights! Join us for Among Us on Fridays, Minecraft build battles on Saturdays, and chill Roblox sessions on Sundays. Movie nights happen every bi-weekly weekend.",
        icon: Gamepad,
        color: "text-pink-400",
        borderColor: "border-pink-400/20",
        bgColor: "bg-pink-400/10",
        gradient: "from-pink-500/20 to-rose-500/20",
        badges: ["Weekly Events", "Prizes"],
        stat: "Events: 3+/week"
    },
    {
        title: "Community Roles",
        content: "Level up by chatting to earn special color roles and perks! We also have self-assignable roles for games, regions, and notification preferences so you only get pinged for what you love.",
        icon: Trophy,
        color: "text-amber-400",
        borderColor: "border-amber-400/20",
        bgColor: "bg-amber-400/10",
        gradient: "from-amber-500/20 to-orange-500/20",
        badges: ["Level System", "Custom Colors"],
        stat: "Roles: 50+"
    }
];

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
            ease: [0.22, 1, 0.36, 1] as any
        }
    }
};

export const InfoSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center py-16 md:py-32 px-4 sm:px-6 lg:px-8 z-20" id="info">
            <div className="max-w-7xl mx-auto relative w-full">
                {/* Header */}
                <motion.div
                    className="text-center mb-24 space-y-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-300"></div>
                        <span className="relative inline-block px-5 py-2 rounded-full bg-[#0A0A0B] text-blue-400 border border-blue-500/30 text-xs font-black uppercase tracking-[0.25em] shadow-lg">
                            Guidelines
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-black tracking-tight drop-shadow-2xl font-[family-name:var(--font-outfit)]">
                        Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-pulse-slow">Information</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
                        Everything you need to know to get started in Cosy.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {infoItems.map((item, index) => (
                        <InfoCard key={index} item={item} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const InfoCard = ({ item, index }: { item: any, index: number }) => {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative h-full"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Animated Holographic Border */}
            <div className={`absolute -inset-[1px] rounded-[2.6rem] bg-gradient-to-br ${item.gradient.replace('from-', 'from-').replace('to-', 'via-white/20 to-')} opacity-20 group-hover:opacity-100 blur-[2px] transition-opacity duration-500`} />
            <div className={`absolute -inset-[1px] rounded-[2.6rem] bg-gradient-to-tr ${item.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />

            <div className="relative h-full p-6 md:p-10 rounded-[2.5rem] bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 flex flex-col z-10 group-hover:shadow-2xl group-hover:shadow-blue-500/10">

                {/* Top Corner Glow Splash */}
                <div className={`absolute -top-20 -right-20 w-[250px] h-[250px] bg-gradient-to-br ${item.gradient} blur-[90px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative flex flex-col sm:flex-row items-start gap-6 z-10 mb-8">
                    {/* Icon Box with Pulsing Glow */}
                    <div className="relative shrink-0">
                        <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500`} />
                        <div className={`relative p-5 rounded-3xl ${item.bgColor} ${item.color} border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                            <item.icon className="w-10 h-10" />
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        <h3 className="text-3xl font-black text-white font-[family-name:var(--font-outfit)] flex items-center justify-between gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                            {item.title}
                            <ExternalLink className="w-5 h-5 text-white/50 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-base md:text-lg group-hover:text-zinc-300 transition-colors font-medium">
                            {item.content}
                        </p>
                    </div>
                </div>

                {/* Badges and Stats Divider */}
                <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge: string, i: number) => (
                            <span key={i} className={`px-3 py-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 text-zinc-400 group-hover:text-white text-xs font-bold uppercase tracking-wide border border-white/5 transition-all duration-300`}>
                                {badge}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-black text-zinc-500 uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-md border border-white/5">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} animate-pulse`} />
                        {item.stat}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
