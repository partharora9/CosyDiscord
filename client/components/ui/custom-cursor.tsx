"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.style.cursor === 'pointer';

            setIsHovering(!!isClickable);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 1.5 : 1,
                borderColor: isHovering ? "rgba(88, 101, 242, 0.8)" : "rgba(255, 255, 255, 0.5)"
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        >
            <motion.div
                className="w-1 h-1 bg-white rounded-full"
                animate={{
                    scale: isHovering ? 0 : 1
                }}
            />
        </motion.div>
    );
};
