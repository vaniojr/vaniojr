"use client";

import { useEffect, useState } from "react";
import { LandingPageContent } from "./landing-page";

export function LandingPageWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-screen w-full bg-zinc-950" />
    );
  }

  return <LandingPageContent />;
}
