"use client";

import { Trio } from "ldrs/react";
import "ldrs/react/Trio.css";

interface LoaderProps {
    size?: string;
    stroke?: string;
    speed?: string;
    color?: string;
}

export const Loader = ({
    size = "50",
    speed = "1.3",
    color = "rgba(231, 76, 60,1.0)",
}: LoaderProps) => {
    return (
        <div className="fixed flex items-center justify-center z-50">
            <Trio size={size} speed={speed} color={color} />
        </div>
    );
};
