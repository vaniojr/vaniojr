"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonStar, SunMedium } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="outline"
        className="h-9 w-9 border-white/15 bg-white/[0.02] text-zinc-100"
        disabled
        aria-label="Toggle color theme"
      />
    );
  }

  return (
    <Button
      size="icon"
      variant="outline"
      className="h-9 w-9 border-white/15 bg-white/[0.02] text-zinc-100 hover:bg-white/[0.07]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
    >
      <SunMedium className="size-4 scale-100 rotate-0 transition-transform dark:-rotate-90 dark:scale-0" />
      <MoonStar className="absolute size-4 scale-0 rotate-90 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
