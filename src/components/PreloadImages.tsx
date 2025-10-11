"use client";

import { useEffect } from "react";
import { recentEvents } from "@/data/events";
import { managers } from "@/data/managers";

export default function PreloadImages() {
  useEffect(() => {
    const images = [
      ...recentEvents.map(event => event.image),
      ...managers.map(manager => manager.image),
    ];

    images.forEach(href => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = href;
      link.as = "image";
      document.head.appendChild(link);
    });
  }, []);

  return null;
}