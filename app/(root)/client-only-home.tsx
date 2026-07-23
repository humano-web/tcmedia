"use client";

import { useEffect, useState } from "react";
import HomeClient from "./home-client";

export default function ClientOnlyHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <HomeClient />;
}
