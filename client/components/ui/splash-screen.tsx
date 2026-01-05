"use client";

import { useEffect, useState } from "react";


export function SplashScreen() {
    const [show, setShow] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.body.style.overflow = "hidden";

        const hideTimer = setTimeout(() => {
            setShow(false);
            document.body.style.overflow = "unset";
        }, 2500);

        return () => {
            clearTimeout(hideTimer);
            document.body.style.overflow = "unset";
        };
    }, []);

    if (!mounted || !show) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000 animate-out fade-out">
            {/* Blurred Background Video/GIF */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <img
                    src="/background.gif"
                    alt="Loading Background"
                    className="w-full h-full object-cover blur-xl scale-110 opacity-60"
                />
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full space-y-12">
                {/* Staggered Letter Reveal Animation */}
                <div className="relative flex space-x-1">
                    {['𝐂', '𝐎', '𝐒', '𝐘'].map((letter, index) => (
                        <span
                            key={index}
                            className="text-7xl md:text-9xl font-black tracking-tight text-white drop-shadow-2xl font-[family-name:var(--font-outfit)] animate-fade-scale-glow"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                {/* Discord-style Rotating Loading Text - REMOVED */}
            </div>
        </div>
    );
}
