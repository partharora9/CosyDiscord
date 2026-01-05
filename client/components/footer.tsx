"use client";

import Link from "next/link";
import { Twitter, Instagram, Github } from "lucide-react";

// Custom Discord Icon
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.14 96.36"
        fill="currentColor"
    >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.82,105.82,0,0,0,126.6,80.22c1.29-18.89-5.38-41.29-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
);

export const Footer = () => {
    return (
        <footer className="w-full bg-black border-t border-white/5 py-20 px-4 sm:px-6 lg:px-8 relative z-30">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-5 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-outfit)]">
                                Cosy
                            </span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-7 max-w-sm font-light">
                            A cozy community where friendships bloom under the stars. Join us for late-night adventures, gaming sessions, and good vibes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 md:col-span-3 lg:col-start-7 space-y-8">
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest font-[family-name:var(--font-outfit)]">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "About", href: "#about" },
                                { name: "Stats", href: "#stats" },
                                { name: "Info", href: "#info" },
                                { name: "Team", href: "#team" },
                                { name: "Roblox Team", href: "#roblox-team" },
                                { name: "Tech Team", href: "/tech-team" },
                                { name: "Why Join", href: "/features" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-zinc-500 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="col-span-1 md:col-span-3 space-y-8">
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest font-[family-name:var(--font-outfit)]">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#5865F2]/20 hover:text-[#5865F2] text-zinc-400 transition-all duration-300">
                                <DiscordIcon className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-pink-500/20 hover:text-pink-500 text-zinc-400 transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/20 hover:text-white text-zinc-400 transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-600">
                    <p>© 2026 Cosy. All rights reserved.</p>
                    <p>Designed by cosy</p>
                </div>
            </div>
        </footer>
    );
};
