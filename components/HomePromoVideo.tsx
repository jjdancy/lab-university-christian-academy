"use client";

import { useState, useRef } from "react";

export default function HomePromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative border-b border-white/10 bg-black py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
          About Us
        </p>
        <p className="mb-2 text-center text-base font-semibold tracking-tight text-white sm:text-lg md:text-xl">
          Faith & leadership at the heart of everything we do.
        </p>
        <p className="mb-6 text-center text-sm text-white/80">
          See LAB U in action — Christ-centered education for scholars, leaders,
          and athletes. One academy.
        </p>

        {/* Smaller video box: full frame visible, viewer can go fullscreen */}
        <div className="relative mx-auto overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-contain object-center"
              src="/videos/compressed%20promo.mp4"
              loop
              playsInline
              controls
              onPlay={handlePlay}
              onPause={handlePause}
            />
            {/* Overlay with play button when paused */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <div className="absolute inset-0 bg-black/50" />
              <button
                type="button"
                onClick={handlePlay}
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 text-white shadow-lg transition-transform hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black md:h-16 md:w-16"
                aria-label="Play video"
              >
                <svg
                  className="ml-1 h-7 w-7 md:h-8 md:w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center">
          <a
            href="/about"
            className="inline-block rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
          >
            Our mission & story
          </a>
        </p>
      </div>
    </section>
  );
}
