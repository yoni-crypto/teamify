import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  size?: number;
}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  RainbowButtonProps
>(({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "relative overflow-hidden z-10 rounded-xl px-6 py-2 text-lg font-semibold shadow-md transition-all",
        "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white",
        "hover:brightness-110 hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-orange-300",
        className
      )}
    >
      {children}
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";
