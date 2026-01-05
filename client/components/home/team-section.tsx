"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User as UserIcon, Crown, Shield, Code, Bot, MessageCircle, Calendar, Gem } from "lucide-react";

const memberData = [
    {
        name: "Thorji",
        role: "Owner",
        id: "1094318694290706482",
        description: "Leading the community with passion and dedication since day one.",
        color: "text-amber-400",
        borderColor: "border-amber-500/30",
        bgColor: "bg-amber-500/10",
        gradient: "from-amber-500/20 to-orange-600/20",
        icon: Crown,
        joined: "May 2020",
        status: "online"
    },
    {
        name: "King",
        role: "Owner",
        id: "477851605019131916",
        description: "Building the foundation of properity and good vibes for everyone.",
        color: "text-purple-400",
        borderColor: "border-purple-500/30",
        bgColor: "bg-purple-500/10",
        gradient: "from-purple-500/20 to-pink-600/20",
        icon: Crown,
        joined: "Jun 2020",
        status: "idle"
    },
    {
        name: "Jahil",
        role: "Owner",
        id: "600870698780459008",
        description: "Bringing fresh ideas and energy to help Cosy grow and thrive.",
        color: "text-emerald-400",
        borderColor: "border-emerald-500/30",
        bgColor: "bg-emerald-500/10",
        gradient: "from-emerald-500/20 to-teal-600/20",
        icon: Crown,
        joined: "Aug 2020",
        status: "dnd"
    },
    {
        name: "Zotic",
        role: "Co-Owner",
        id: "839383263776342037",
        description: "Dedicated to keeping the community safe and properly managed.",
        color: "text-red-400",
        borderColor: "border-red-500/30",
        bgColor: "bg-red-500/10",
        gradient: "from-red-500/20 to-orange-600/20",
        icon: Crown,
        joined: "Feb 2022",
        status: "idle"
    },
    {
        name: "Clark",
        role: "Admin",
        id: "1016691985890951270",
        description: "Ensuring the server runs smoothly and rules are upheld.",
        color: "text-blue-400",
        borderColor: "border-blue-500/30",
        bgColor: "bg-blue-500/10",
        gradient: "from-blue-500/20 to-cyan-600/20",
        icon: Shield,
        joined: "Mar 2021",
        status: "online"
    },

    {
        name: "IAS",
        role: "Admin",
        id: "847521595626487859",
        description: "The technical mind behind Cosy's bots and infrastructure.",
        color: "text-pink-400",
        borderColor: "border-pink-500/30",
        bgColor: "bg-pink-500/10",
        gradient: "from-pink-500/20 to-rose-600/20",
        icon: Shield,
        joined: "Jan 2021",
        status: "online"
    }
];

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

export const TeamSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center py-32 px-4 sm:px-6 lg:px-8 z-20 overflow-hidden" id="team">

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Leadership
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl font-[family-name:var(--font-outfit)]">
                        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Team</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        The passionate people behind Cosy.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {memberData.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const TeamCard = ({ member, index }: { member: any, index: number }) => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [decorationUrl, setDecorationUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchDiscordAvatar = async () => {
            if (!member.id) return;
            try {
                const response = await fetch(`/api/discord/${member.id}`);
                if (!response.ok) return;
                const data = await response.json();

                if (data.avatar) {
                    const avatarHash = data.avatar;
                    const ext = avatarHash.startsWith("a_") ? "gif" : "png";
                    setAvatarUrl(`https://cdn.discordapp.com/avatars/${data.id}/${avatarHash}.${ext}?size=512`);
                }

                if (data.avatar_decoration) {
                    setDecorationUrl(`https://cdn.discordapp.com/avatar-decorations/${data.id}/${data.avatar_decoration}.png?size=512`);
                }
            } catch (err) {
                console.error("Failed to fetch discord avatar", err);
            }
        };

        fetchDiscordAvatar();
    }, [member.id]);

    const statusColors = {
        online: "bg-green-500 shadow-[0_0_15px_#22c55e]",
        idle: "bg-amber-500 shadow-[0_0_15px_#f59e0b]",
        dnd: "bg-rose-500 shadow-[0_0_15px_#f43f5e]",
        offline: "bg-zinc-500"
    };

    return (
        <motion.div
            variants={itemVariants}
            className="group relative w-full h-full"
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Animated Rotating Border/Glow - "The Energy" */}
            <div className={`absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-r ${member.gradient.replace('from-', 'from-').replace('to-', 'via-white/20 to-')} opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
            <div className={`absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />

            {/* Main Card Content */}
            <div className="relative h-full p-8 rounded-[2.5rem] bg-[#0A0A0B] border border-white/5 group-hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center overflow-hidden z-10">

                {/* Internal Energetic Splash */}
                <div className={`absolute top-0 inset-x-0 h-[200px] bg-gradient-to-b ${member.gradient} blur-[70px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative mb-8">
                    {/* Spiraling Energy Ring */}
                    <div className={`absolute -inset-6 rounded-full border-2 border-dashed ${member.borderColor} opacity-0 group-hover:opacity-60 animate-[spin_5s_linear_infinite] transition-opacity duration-500`} />
                    <div className={`absolute -inset-6 rounded-full border border-dotted ${member.borderColor} opacity-0 group-hover:opacity-40 animate-[spin_8s_linear_infinite_reverse] transition-opacity duration-500`} />

                    {/* Avatar Container */}
                    <div className={`relative w-40 h-40 rounded-full p-1.5 bg-gradient-to-br ${member.gradient} shadow-2xl group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-shadow duration-500`}>
                        <div className="w-full h-full rounded-full overflow-visible bg-zinc-950 relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                            {avatarUrl ? (
                                <img
                                    src={avatarUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                <div className={`w-full h-full flex items-center justify-center rounded-full ${member.color}`}>
                                    <UserIcon className="w-16 h-16" />
                                </div>
                            )}

                            {/* Discord Decoration Overlay */}
                            {decorationUrl && (
                                <img
                                    src={decorationUrl}
                                    alt="decoration"
                                    className="absolute -top-[15%] -left-[15%] w-[130%] h-[130%] pointer-events-none z-20"
                                />
                            )}
                        </div>

                        {/* Pulsing Status Dot */}
                        <div className={`absolute bottom-3 right-3 w-6 h-6 rounded-full border-[3px] border-[#0A0A0B] ${statusColors[member.status as keyof typeof statusColors]} z-20 animate-pulse`} />
                    </div>

                    {/* Floating Role Icon */}
                    <motion.div
                        className={`absolute -bottom-1 -right-1 p-3 rounded-2xl bg-[#0A0A0B] border border-white/10 text-white shadow-xl z-20`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <member.icon className={`w-6 h-6 ${member.color}`} />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full flex flex-col items-center relative z-20">
                    <h3 className="text-4xl font-black text-white mb-3 font-[family-name:var(--font-outfit)] tracking-tight drop-shadow-lg">
                        {member.name}
                    </h3>

                    {/* Energetic Role Pill */}
                    <div className={`relative px-5 py-1.5 mb-6 group/pill`}>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} opacity-20 blur-sm group-hover:opacity-60 transition-opacity duration-300`} />
                        <div className={`relative px-4 py-1.5 rounded-full bg-black/50 border border-white/5 ${member.color} text-[11px] font-black tracking-[0.25em] uppercase shadow-sm`}>
                            {member.role}
                        </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-8 max-w-[90%] sm:max-w-xs">
                        {member.description}
                    </p>
                </div>

                {/* Footer Actions */}
                <div className="w-full pt-6 border-t border-white/5 flex items-center justify-center text-xs font-bold relative z-20">


                    <a
                        href="https://discord.gg/cosy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2.5 px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 ${member.color} border border-white/5 hover:border-white/20 transition-all duration-300 group/btn shadow-lg shadow-black/20 hover:shadow-${member.color}/20`}
                    >
                        <span>Message</span>
                        <MessageCircle className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </motion.div>
    );
}
