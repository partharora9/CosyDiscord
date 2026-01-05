"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@/components/providers/user-provider";
import { ArrowRight, Lock, User } from "lucide-react";

export const LoginScreen = () => {
    const { login, isLoggedIn, hasCheckedSession } = useUser();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            setError("Please enter a username");
            return;
        }
        if (name.length < 3) {
            setError("Username must be at least 3 characters");
            return;
        }
        // Password is just for show/feel, we don't validat it against a backend
        if (!password) {
            setError("Please verify you are human (enter any password)");
            return;
        }

        login(name.trim());
    };

    // Don't show anything until we've checked local storage
    if (!hasCheckedSession) return null;

    // Utilize AnimatePresence to exit the screen smoothly once logged in
    return (
        <AnimatePresence>
            {!isLoggedIn && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, pointerEvents: "none", transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                >
                    {/* Background Ambience */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-glow" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full max-w-md p-8 relative z-10"
                    >
                        <div className="text-center mb-10 space-y-4">
                            <h1 className="text-5xl font-black text-white tracking-tighter font-[family-name:var(--font-outfit)]">
                                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cosy</span>
                            </h1>
                            <p className="text-zinc-400">Enter your credentials to access the world.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Username</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setError("");
                                        }}
                                        className="block w-full pl-12 pr-4 py-4 bg-[#0A0A0B] border border-zinc-800 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-medium"
                                        placeholder="Your unique identity"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setError("");
                                        }}
                                        className="block w-full pl-12 pr-4 py-4 bg-[#0A0A0B] border border-zinc-800 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-medium"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm text-center font-medium"
                                >
                                    {error}
                                </motion.p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2 group"
                            >
                                Enter World
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-xs text-zinc-600">
                                By entering, you agree to follow our community guidelines.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
