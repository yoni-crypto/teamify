"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()

  // Determine the current theme (fallback to system theme if not set)
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} className="cursor-pointer">
      {currentTheme === "dark" ? (
        <Sun className="h-[1.5rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.2rem]" />
      )}
    </div>
  )
}
