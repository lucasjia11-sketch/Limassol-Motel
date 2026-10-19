import type { JSX } from "react";

export function CloudyButton(): JSX.Element {
  return (
    <button className="group relative px-12 py-6 font-headline font-bold text-2xl rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95 bg-white/60 backdrop-blur-xl border border-white/40 text-primary shadow-sm hover:shadow-[0_20px_40px_rgba(74,64,224,0.08)]">
      <span className="relative z-10 flex items-center gap-3">Explore Now</span>
    </button>
  );
}
