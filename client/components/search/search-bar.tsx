"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { COSY_DATA } from "@/data/cosy-data";
import { motion, AnimatePresence } from "framer-motion";

export const SearchBar = () => {
    const [query, setQuery] = useState("");

    const filteredData = query.length > 0
        ? COSY_DATA.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return (
        <div className="w-full max-w-2xl relative">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-zinc-400 group-focus-within:text-[#5865F2] transition-colors" />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 border-2 border-zinc-700/50 rounded-2xl bg-[#1E1F22] text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-0 focus:border-[#5865F2] transition-all text-lg shadow-xl"
                    placeholder="Search for rules, channels, or roles..."
                />
            </div>

            <AnimatePresence>
                {query.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full mt-2 w-full bg-[#2B2D31] rounded-xl shadow-2xl border border-zinc-700 overflow-hidden z-20"
                    >
                        {filteredData.length === 0 ? (
                            <div className="p-4 text-zinc-400 text-center">
                                No results found for "{query}"
                            </div>
                        ) : (
                            <div className="max-h-[60vh] overflow-y-auto p-2 space-y-2">
                                {filteredData.map((item) => (
                                    <div key={item.id} className="p-3 hover:bg-[#313338] rounded-lg cursor-pointer transition-colors group">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-zinc-200 text-lg group-hover:text-[#5865F2] transition-colors">
                                                {item.title}
                                            </span>
                                            <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-full uppercase tracking-wider font-semibold">
                                                {item.category}
                                            </span>
                                        </div>
                                        <p className="text-zinc-400 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
