"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out"
            style={{
                transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
            }}
        >
            <div className="w-[300px] h-[300px] rounded-full bg-white opacity-40 blur-[200px] mix-blend-difference" />
        </div>
    );
}
