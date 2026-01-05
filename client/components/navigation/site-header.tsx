"use client";

import { useState } from "react";
import Link from "next/link";
import { ActionLogo } from "@/components/ui/action-logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const SiteHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Stats', href: '#stats' },
        { name: 'Info', href: '#info' },
        { name: 'Team', href: '#team' },
        { name: 'Roblox', href: '#roblox-team' },
    ];

    const actionLinks = [
        { name: 'Tech Team', href: '/tech-team' },
        { name: 'Neighbours', href: '/neighbours' },
        { name: 'Blox Fruits', href: '/blox-fruits' },
        { name: 'Staff', href: '/discord-staff' },
        { name: 'Why Join?', href: '/features' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 p-4 md:px-8 flex justify-between items-center bg-transparent z-50 pointer-events-none">
                <div className="pointer-events-auto relative z-50">
                    <ActionLogo />
                </div>

                {/* Desktop Centered Navigation */}
                <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/5 pointer-events-auto transition-all duration-300 hover:bg-black/40 hover:border-white/10 hover:shadow-lg hover:shadow-indigo-500/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-zinc-300 hover:text-white transition-all duration-300 uppercase tracking-wider text-shadow-sm hover:scale-110"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Right Actions */}
                <div className="hidden lg:flex gap-4 pointer-events-auto items-center">
                    <div className="flex gap-4">
                        {actionLinks.filter(link => ["Tech Team", "Why Join?", "Staff"].includes(link.name)).map(link => (
                            <Link key={link.name} href={link.href} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <a href="https://discord.com/invite/cosy" target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 text-sm rounded-full font-bold transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]">
                        Join Discord
                    </a>
                </div>

                {/* Mobile Menu Button - Visible on lg and below (since we hid desktop actions on < lg) */}
                {/* Wait, the desktop actions were hidden lg:flex. The previous code had them flex gap-2. 
            We want to HIDE them on mobile and show hamburger.
        */}
                <div className="lg:hidden pointer-events-auto z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center pt-24 px-6 pointer-events-auto"
                    >
                        <div className="flex flex-col items-center gap-8 w-full max-w-sm overflow-y-auto max-h-[80vh] py-4">
                            {/* Main Nav Links */}
                            <div className="flex flex-col items-center gap-6 w-full border-b border-white/10 pb-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-black text-white hover:text-indigo-400 transition-colors uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-col items-center gap-4 w-full">
                                {actionLinks.map(link => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="bg-white/5 hover:bg-white/10 w-full py-4 rounded-2xl text-center text-zinc-300 font-bold border border-white/5"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a
                                    href="https://discord.com/invite/cosy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#5865F2] hover:bg-[#4752C4] w-full py-4 rounded-2xl text-center text-white font-black shadow-lg shadow-indigo-500/20"
                                >
                                    Join Discord
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
