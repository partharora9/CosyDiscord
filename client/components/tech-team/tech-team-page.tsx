"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code2, Globe, Server, Cloud, Shield, Database, Layout } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export const TechTeamPage = () => {
    // const [selectedPortfolio, setSelectedPortfolio] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-[family-name:var(--font-outfit)] relative overflow-hidden flex flex-col items-center selection:bg-purple-500/30">

            {/* Energetic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay"></div>
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] mask-image-b-0"></div>
            </div>

            <div className="relative z-10 w-full max-w-[90rem] px-6 py-12 flex-1 flex flex-col">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="self-start mb-8"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-all group px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 backdrop-blur-md">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium tracking-wide text-sm">Back to Home</span>
                    </Link>
                </motion.div>

                <div className="flex-1 flex flex-col items-center">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center mb-20 relative"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 blur-2xl opacity-20 animate-pulse"></span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-400 relative z-10">
                                Technical Team
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            The <span className="text-purple-400 font-semibold">architects</span> and <span className="text-indigo-400 font-semibold">engineers</span> building the future.
                        </p>
                    </motion.div>

                    {/* Main Profile Card Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-2 perspective-1000">
                        {techMembers.map((member, index) => (
                            <ProfileCard
                                key={index}
                                member={member}
                                index={index}
                                onClick={() => {
                                    if (member.socials?.website) {
                                        window.open(member.socials.website, '_blank');
                                    }
                                }}
                            />
                        ))}
                    </div>

                </div>

            </div>

            {/* Portfolio Viewer Modal - Removed as external sites often block iframes */}
            {/* <AnimatePresence> ... </AnimatePresence> */}

        </div>
    );
};

const techMembers = [
    {
        name: "Parth",
        role: "Lead Engineer",
        id: "1051005126359396384",
        bio: "Architecting scalable digital ecosystems and crafting seamless user experiences. Turning complex problems into elegant code.",
        skills: [
            { name: "Next.js", icon: Globe },
            { name: "Node.js", icon: Server },
            { name: "System Design", icon: Cloud },
            { name: "Security", icon: Shield },
            { name: "Database", icon: Database },
            { name: "UI/UX", icon: Layout },
        ],
        stats: [
            { label: "Experience", value: "5+ Years" },
            { label: "Projects", value: "50+" },
            { label: "Availability", value: "Open" },
        ],
        socials: {
            github: "https://github.com/ParthArora",
            website: "https://parth-arora-portfolio.vercel.app/"
        },
        color: "purple",
        glowColor: "rgba(168, 85, 247, 0.5)"
    },
    {
        name: "Unknown",
        role: "Backend Dev",
        bio: "Identity redacted. Specializes in server-side logic and database optimization. Currently operating in stealth mode.",
        skills: [
            { name: "???", icon: Code2 },
            { name: "???", icon: Code2 },
            { name: "???", icon: Code2 },
        ],
        stats: [
            { label: "Experience", value: "???" },
            { label: "Projects", value: "???" },
            { label: "Availability", value: "Unknown" },
        ],
        isUnknown: true,
        color: "zinc",
        glowColor: "rgba(82, 82, 91, 0.2)"
    },
    {
        name: "Unknown",
        role: "Frontend Dev",
        bio: "Identity redacted. Master of pixel-perfect interfaces and smooth interactions. Keeps a low profile.",
        skills: [
            { name: "???", icon: Code2 },
            { name: "???", icon: Code2 },
            { name: "???", icon: Code2 },
        ],
        stats: [
            { label: "Experience", value: "???" },
            { label: "Projects", value: "???" },
            { label: "Availability", value: "Unknown" },
        ],
        isUnknown: true,
        color: "zinc",
        glowColor: "rgba(82, 82, 91, 0.2)"
    },
    {
        name: "Unknown",
        role: "DevOps",
        bio: "Identity redacted. Ensuring 99.9% uptime and bulletproof security infrastructure. Ghost in the machine.",
        skills: [
            { name: "???", icon: Code2 },
            { name: "???", icon: Code2 },
            { name: "???", icon: Code2 },
        ],
        stats: [
            { label: "Experience", value: "???" },
            { label: "Projects", value: "???" },
            { label: "Availability", value: "Unknown" },
        ],
        isUnknown: true,
        color: "zinc",
        glowColor: "rgba(82, 82, 91, 0.2)"
    }
];

const ProfileCard = ({ member, index, onClick }: { member: any, index: number, onClick: () => void }) => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [0, 500], [5, -5]);
    const rotateY = useTransform(x, [0, 400], [-5, 5]);

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    useEffect(() => {
        if (member.isUnknown || !member.id) return;

        const fetchDiscordAvatar = async () => {
            try {
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
        fetchDiscordAvatar();
    }, [member.id, member.isUnknown]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
            style={{
                rotateX: member.isUnknown ? 0 : rotateX,
                rotateY: member.isUnknown ? 0 : rotateY,
                perspective: 1000
            }}
            onMouseMove={!member.isUnknown ? handleMouse : undefined}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            onClick={onClick}
            className={`group relative rounded-[2.5rem] bg-[#0A0A0B] overflow-hidden p-1 p-px transition-all duration-500 h-full flex flex-col ${!member.isUnknown ? 'hover:scale-[1.02] cursor-pointer' : ''}`}
        >
            {/* Animated Border Gradient for Known Members */}
            {!member.isUnknown && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,purple_360deg)] animate-[spin_4s_linear_infinite]" />
                </div>
            )}

            {/* Inner Content Container */}
            <div className="relative h-full bg-[#0A0A0B] rounded-[2.4rem] p-6 overflow-hidden z-10 flex flex-col">

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

                {/* Intense Glow Hover Effect */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(800px circle at top center, ${member.glowColor}, transparent 40%)`
                    }}
                />

                <div className="relative z-10 flex flex-col h-full">

                    {/* Header: Avatar & Role */}
                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="relative group/avatar mb-4">
                            {/* Rotating double ring for energy */}
                            <div className={`absolute -inset-2 rounded-full bg-gradient-to-tr ${member.isUnknown ? 'from-zinc-800 to-black' : 'from-purple-600 via-pink-600 to-indigo-600'} opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-[spin_3s_linear_infinite]`} />

                            <div className={`w-24 h-24 rounded-[1.5rem] bg-zinc-900 border-2 border-[#1a1a1a] shadow-2xl overflow-hidden relative z-10 ${member.isUnknown ? 'grayscale opacity-60' : ''}`}>
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
                                        {member.isUnknown ? (
                                            <div className="relative">
                                                <Shield className="w-8 h-8 text-zinc-700" />
                                                <div className="absolute inset-0 bg-zinc-500/20 blur-xl animate-pulse" />
                                            </div>
                                        ) : (
                                            <Code2 className="w-8 h-8 text-zinc-600" />
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Status Indicator */}
                            <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-[#0A0A0B] rounded-full flex items-center justify-center z-20`}>
                                <div className={`w-2.5 h-2.5 rounded-full ${member.isUnknown ? 'bg-zinc-600' : 'bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse'}`} />
                            </div>
                        </div>

                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${member.isUnknown ? 'bg-zinc-900/80 border-zinc-800 text-zinc-500' : 'bg-purple-950/30 border-purple-500/30 text-purple-300 shadow-[0_0_15px_-5px_purple]'} border text-[10px] font-black uppercase tracking-[0.2em] mb-4`}>
                            {member.role}
                        </div>

                        <h2 className="text-3xl font-black text-white tracking-tighter font-[family-name:var(--font-outfit)] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-white transition-all duration-300">
                            {member.name}
                        </h2>

                        <p className="text-sm text-zinc-400 font-medium leading-relaxed line-clamp-2 px-2 group-hover:text-zinc-300 transition-colors">
                            {member.bio}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-5 mb-6 bg-black/20 rounded-xl relative overflow-hidden">
                        {/* Shimmer effect on stats */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                        {member.stats.map((stat: any, i: number) => (
                            <div key={i} className="text-center relative z-10">
                                <div className={`text-base font-black text-white mb-0.5 font-[family-name:var(--font-outfit)]`}>
                                    {stat.value}
                                </div>
                                <div className="text-[8px] text-zinc-600 uppercase tracking-widest font-black">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skills & Action */}
                    <div className="mt-auto space-y-6">
                        <div className="flex flex-wrap justify-center gap-2">
                            {member.skills.slice(0, 4).map((skill: any, i: number) => (
                                <div
                                    key={i}
                                    className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${!member.isUnknown ? 'group-hover:bg-purple-500/20 group-hover:border-purple-500/30 group-hover:scale-110' : 'opacity-40'} transition-all duration-300`}
                                    title={skill.name}
                                >
                                    <skill.icon className={`w-3.5 h-3.5 ${!member.isUnknown ? 'text-zinc-400 group-hover:text-purple-300' : 'text-zinc-600'}`} />
                                </div>
                            ))}
                            {member.skills.length > 4 && (
                                <div className="px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[10px] text-zinc-500 font-bold flex items-center">
                                    +{member.skills.length - 4}
                                </div>
                            )}
                        </div>

                        {/* Click CTA for Portfolio */}
                        {!member.isUnknown && member.socials?.website && (
                            <div className="pt-2 text-center overflow-hidden">
                                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                        View Portfolio
                                    </button>
                                </div>
                                <div className="group-hover:-translate-y-full transition-transform duration-500 ease-out -mt-8">
                                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">
                                        Hover to Interact
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

const SocialButton = ({ icon: Icon, href }: { icon: any, href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all hover:-translate-y-0.5"
    >
        <Icon className="w-3.5 h-3.5" />
    </a>
);
