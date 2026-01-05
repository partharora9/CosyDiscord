"use client";

import { useEffect } from "react";

export const ProtectionProvider = () => {
    useEffect(() => {
        // Disable Right Click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable Dragging Images
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        // Optional: Disable Key Shortcuts like Ctrl+U (View Source), F12 (DevTools), Ctrl+S (Save)
        // Note: This is aggressive but requested ("no can copy").
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'c' || e.key === 'C')) ||
                e.key === 'F12'
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("dragstart", handleDragStart);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("dragstart", handleDragStart);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null; // This component renders nothing visually
};
