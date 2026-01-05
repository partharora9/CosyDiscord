"use client";

import { motion } from "framer-motion";
import { User, Scissors, ArrowRight, LucideIcon, Gamepad2, ExternalLink, Code2, Paintbrush, Hammer, Sparkles, Rocket, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    type: 'member' | 'vacant';
    id?: string;
    icon?: LucideIcon;
    gradient?: string;
    bg?: string;
    border?: string;
    badge?: string;
    applyLink?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "GOJO",
        role: "Lead Designer",
        bio: "5+ year experienced 2D clothing creator on Roblox. Owner of Asian_Clothing, known for high-quality, trend-driven designs. Achieved 300,000+ total clothing sales.",
        type: "member",
        id: "902427664500031500",
        icon: Scissors,
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-500/5",
        border: "group-hover:border-blue-500/30",
        badge: "VERIFIED CREATOR",
        applyLink: "https://discord.gg/cosy"
    },
    {
        name: "Scripter",
        role: "Open Position",
        bio: "We are looking for a talented Luau scripter to bring our game mechanics to life. Experience with Knit framework is a plus.",
        type: "vacant",
        icon: Code2,
        bg: "bg-emerald-500/5",
        gradient: "text-emerald-400"
    },
    {
        name: "Builder",
        role: "Open Position",
        bio: "Master of environmental storytelling? Join us to build immersive worlds and intricate maps for our upcoming titles.",
        type: "vacant",
        icon: Hammer,
        bg: "bg-amber-500/5",
        gradient: "text-amber-400"
    },
    {
        name: "UI Designer",
        role: "Open Position",
        bio: "Help us craft intuitive and beautiful user interfaces that enhance the player experience across all devices.",
        type: "vacant",
        icon: Paintbrush,
        bg: "bg-pink-500/5",
        gradient: "text-pink-400"
    }
];

const games = [
    {
        name: "Neighbours",
        description: "Experience life in a cosy neighbourhood with friends. Customize your home, voice chat, and participate in daily community events.",
        status: "Live",
        link: "/neighbours",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        icon: Gamepad2,
        stats: "586.1M+ Visits"
    },
    {
        name: "Blox Fruits",
        description: "Join the adventure in the ultimate anime-inspired RPG. Master your fruits, battle bosses, and become the strongest pirate.",
        status: "Live",
        link: "/blox-fruits",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        icon: Rocket,
        stats: "57.5B+ Visits"
    },
    {
        name: "Cosy Tycoon",
        description: "Build and manage your own dream café. Serve customers, unlock recipes, and decorate your space to perfection.",
        status: "Concept",
        link: null,
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        icon: Sparkles,
        stats: "In Development"
    },
    {
        name: "Mystery Title",
        description: "Top secret project. Stay tuned for announcements.",
        status: "Classified",
        link: null,
        color: "text-zinc-500",
        bg: "bg-zinc-800/50",
        border: "border-white/5",
        icon: Lock,
        stats: "Unknown"
    }
];

export const RobloxTeamSection = () => {
    return (
        <section className="py-16 md:py-32 px-4 relative z-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24 space-y-6 relative z-10">
                    <div className="inline-block relative group">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-md group-hover:opacity-50 transition-opacity duration-500" />
                        <span className="relative inline-block px-5 py-2 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md text-blue-400 border border-blue-500/30 text-xs font-black uppercase tracking-[0.25em] shadow-lg">
                            Roblox Division
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter font-[family-name:var(--font-outfit)] drop-shadow-2xl">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-gradient-x">Roblox Team</span>
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed">
                        Meet the <span className="text-blue-200">creative minds</span> building our experiences in the metaverse.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {teamMembers.map((member, index) => (
                        <RobloxMemberCard key={index} member={member} index={index} />
                    ))}
                </div>

                {/* GAMES SUBSECTION */}
                <div className="space-y-16">
                    {/* Header */}
                    <div className="text-center space-y-6 relative z-10">
                        <h2 className="text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-[#5865F2] tracking-tighter font-[family-name:var(--font-outfit)] py-2">
                            Our Games
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-xl font-medium">
                            Explore our collection of immersive <span className="text-purple-300">Roblox experiences</span>.
                        </p>
                    </div>

                    {/* Games Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {games.map((game, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative p-8 rounded-[2.5rem] bg-[#0A0A0B] border border-white/5 ${game.status !== 'Classified' ? `hover:${game.border.replace('border-', 'border-')}` : ''} transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col hover:shadow-2xl`}
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${game.status === 'Live' ? 'from-purple-500/10' : game.status === 'Beta' ? 'from-blue-500/10' : 'from-rose-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Top Badge */}
                                <div className="relative z-10 flex justify-between items-start mb-8">
                                    <div className={`w-16 h-16 rounded-2xl ${game.bg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                        <game.icon className={`w-8 h-8 ${game.color}`} />
                                    </div>

                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border flex items-center gap-1.5 ${game.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-white/5 text-zinc-500 border-white/5'}`}>
                                        {game.status === 'Live' && <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
                                        {game.status}
                                    </span>
                                </div>

                                <div className="relative z-10 flex-1">
                                    <h3 className="text-2xl font-black text-white mb-3 font-[family-name:var(--font-outfit)] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                                        {game.name}
                                    </h3>

                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
                                        {game.description}
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                                    <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">{game.stats}</span>

                                    {game.link ? (
                                        game.link.startsWith('/') ? (
                                            <Link
                                                href={game.link}
                                                className={`inline-flex items-center gap-2 ${game.color} text-sm font-black hover:opacity-80 transition-all group/link`}
                                            >
                                                Play Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        ) : (
                                            <a
                                                href={game.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 ${game.color} text-sm font-black hover:opacity-80 transition-all group/link`}
                                            >
                                                Play Now <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                            </a>
                                        )
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700">
                                            <Lock className="w-3 h-3" />
                                            <span>Locked</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};


const RobloxMemberCard = ({ member, index }: { member: TeamMember, index: number }) => {
    const Icon = member.icon!;
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchDiscordAvatar = async () => {
            if (!member.id) return;
            try {
                // Fetch from our local secure API route
                const response = await fetch(`/api/discord/${member.id}`);

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

        if (member.type === 'member' && member.id) {
            fetchDiscordAvatar();
        }
    }, [member.id, member.type]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative p-8 rounded-[3rem] bg-[#0A0A0B] border border-white/5 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center ${member.type === 'member' ? member.border : 'hover:border-white/20 hover:shadow-2xl'}`}
        >
            {member.type === 'member' ? (
                <>
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${(member.gradient || "").replace('text-', 'from-').replace('-400', '-500/5')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]`} />

                    {/* Verified Badge if exists */}
                    {member.badge && (
                        <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-black uppercase tracking-wider shadow-lg shadow-blue-500/10 z-20">
                            {member.badge}
                        </div>
                    )}

                    {/* Real Member Card */}
                    <div className="relative z-10">
                        <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} p-[4px] mb-8 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500 group-hover:scale-105`}>
                            <div className="w-full h-full rounded-full bg-[#0A0A0B] flex items-center justify-center overflow-hidden relative border-4 border-[#0A0A0B]">
                                {/* Use avatar image here if available, else icon */}
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                    Icon && <Icon className="w-12 h-12 text-white" />
                                )}
                            </div>
                            <div className="absolute bottom-1 right-1 p-2.5 rounded-full bg-[#0A0A0B] border border-zinc-700 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-5 h-5 text-blue-400" />
                            </div>
                        </div>

                        <h3 className="text-3xl font-black text-white mb-2 font-[family-name:var(--font-outfit)] tracking-tight">{member.name}</h3>

                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                            {member.role}
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-8 max-w-[240px] mx-auto">
                            {member.bio}
                        </p>

                        {member.applyLink && (
                            <a
                                href={member.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white text-sm font-black hover:text-white transition-all group/link px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 w-full justify-center hover:scale-105"
                            >
                                Apply Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div className={`absolute inset-0 bg-gradient-to-b ${member.gradient === 'text-emerald-400' ? 'from-emerald-500/5' : member.gradient === 'text-amber-400' ? 'from-amber-500/5' : 'from-pink-500/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]`} />

                    {/* Vacant / Hiring Card */}
                    <div className="relative z-10 w-full flex flex-col items-center h-full">
                        <div className={`w-36 h-36 rounded-full ${member.bg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-white/5 group-hover:border-white/10`}>
                            <Icon className={`w-14 h-14 ${member.gradient} drop-shadow-lg`} />
                        </div>

                        <h3 className="text-2xl font-black text-white mb-3 font-[family-name:var(--font-outfit)]">{member.name}</h3>

                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-6 group-hover:bg-white/10 transition-colors">
                            We're Hiring
                        </div>

                        <p className="text-zinc-500 text-sm mb-8 font-medium leading-relaxed max-w-[240px]">
                            {member.bio}
                        </p>

                        <a
                            href="https://discord.gg/cosy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-auto flex items-center gap-2 text-white text-sm font-black hover:opacity-90 transition-all group/link px-8 py-4 rounded-full ${member.name === 'Scripter' ? 'bg-emerald-600 shadow-emerald-500/20' : member.name === 'Builder' ? 'bg-amber-600 shadow-amber-500/20' : 'bg-pink-600 shadow-pink-500/20'} shadow-lg hover:shadow-xl w-full justify-center hover:scale-105`}
                        >
                            Apply Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </>
            )}
        </motion.div>
    );
}
