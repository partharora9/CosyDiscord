"use client";

import { Plus, Compass, Download } from "lucide-react";

export const ActionTooltip = ({
    label,
    children,
    side,
    align,
}: {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}) => {
    return (
        <div className="group relative flex items-center">
            {children}
            <div className="absolute left-full ml-2 hidden group-hover:flex bg-black text-white text-xs px-2 py-1 rounded z-50 whitespace-nowrap">
                {label}
            </div>
        </div>
    );
};

export const NavigationAction = () => {
    return (
        <div>
            <ActionTooltip side="right" align="center" label="Add a server">
                <button
                    className="group flex items-center"
                >
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                        <Plus
                            className="group-hover:text-white transition text-emerald-500"
                            size={25}
                        />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    );
}
