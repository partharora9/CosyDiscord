"use client";

import { RefreshCw } from "lucide-react";

export const ActionLogo = () => {
    return (
        <div
            onClick={() => window.location.reload()}
            className="group relative cursor-pointer"
        >
            <div className="text-2xl font-black text-white tracking-tighter text-glitch transition-transform duration-300 group-hover:scale-105">
                𝐂𝐎𝐒𝐘
            </div>

            {/* Tooltip hint */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest text-white/50 whitespace-nowrap">
                Reload
            </div>
        </div>
    );
};
