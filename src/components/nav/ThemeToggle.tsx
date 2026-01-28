'use client';

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const {setTheme, theme} = useTheme();
    return (
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant="ghost" size="icon">
            <Sun className="h-7! w-7! scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-yellow-300" />
            <Moon className="absolute h-7! w-7! scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-gray-300" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}