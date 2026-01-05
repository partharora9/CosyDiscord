"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User as UserIcon, Crown, Shield, Code, Gem } from "lucide-react";

// You can customize this list for the specific Discord Staff
const memberData = [
    {
        name: "Zoro",
        role: "Sentinel",
        id: "1106583727817097246",
        description: "Always on guard to protect the community.",
        color: "text-teal-400",
        borderColor: "border-teal-500/30",
        gradient: "from-teal-500/20 to-emerald-600/20",
        icon: Shield,
        joined: "Jan 2023",
        status: "online"
    },
    {
        name: "Huehue",
        role: "Sentinel",
        id: "757902353679515713",
        description: "Watching over the server with a keen eye.",
        color: "text-cyan-400",
        borderColor: "border-cyan-500/30",
        gradient: "from-cyan-500/20 to-blue-600/20",
        icon: Shield,
        joined: "Feb 2023",
        status: "online"
    },
    {
        name: "Parth",
        role: "Sentinel",
        id: "1051005126359396384",
        description: "Ensuring safety and order for everyone.",
        color: "text-sky-400",
        borderColor: "border-sky-500/30",
        gradient: "from-sky-500/20 to-indigo-600/20",
        icon: Shield,
        joined: "Mar 2023",
        status: "online"
    },
    {
        name: "Amrit",
        role: "Knight of honour",
        id: "1386371452177223690",
        description: "A noble presence bringing honor to the team.",
        color: "text-lime-400",
        borderColor: "border-lime-500/30",
        gradient: "from-lime-500/20 to-green-600/20",
        icon: Gem,
        joined: "Apr 2023",
        status: "online"
    },
    {
        name: "YyY",
        role: "Elite enforcer",
        id: "1165528206330310707",
        description: "Enforcing rules with fairness and strength.",
        color: "text-fuchsia-400",
        borderColor: "border-fuchsia-500/30",
        gradient: "from-fuchsia-500/20 to-purple-600/20",
        icon: Shield,
        joined: "May 2023",
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

export const StaffSection = () => {
    const rolesOrder = ["Knight of Honour", "Sentinel", "Elite Enforcer"];

    return (
        <section className="relative w-full flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 z-20 overflow-hidden">

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Server Staff
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl font-[family-name:var(--font-outfit)]">
                        Discord <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Staff Team</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        The guardians and guides of the Cosy community.
                    </p>
                </motion.div>

                {/* Team Groups */}
                <div className="space-y-20">
                    {rolesOrder.map((role, roleIndex) => {
                        const roleMembers = memberData.filter(member => member.role.toLowerCase() === role.toLowerCase());

                        if (roleMembers.length === 0) return null;

                        return (
                            <motion.div
                                key={role}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: roleIndex * 0.1 }}
                                className="space-y-8"
                            >
                                {/* Role Heading */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-indigo-500/50" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-white/90 uppercase tracking-widest font-[family-name:var(--font-outfit)]">
                                        {role}
                                    </h3>
                                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-indigo-500/50" />
                                </div>

                                {/* Members Grid */}
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch justify-items-center"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {roleMembers.map((member, index) => (
                                        <TeamCard key={index} member={member} index={index} />
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Reusing the TeamCard component style but defined locally to contain it
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



                    <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-8 max-w-[280px]">
                        {member.description}
                    </p>
                </div>



            </div>
        </motion.div>
    );
}
