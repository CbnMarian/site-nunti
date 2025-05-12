"use client";

import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Auto-play video când componenta este montată
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Overlay pentru efect gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-olive-900/60 via-olive-800/40 to-olive-700/30 z-10" />

      {/* Video de fundal */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Fallback pentru browsere mai vechi */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Conținut */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fadeIn">
          Transformă momentele în <br />
          <span className="text-gold-300">amintiri magice</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white max-w-3xl">
          Cabină foto și efecte speciale cu fum pentru evenimente de neuitat
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <button
            onClick={() => scrollToElement("services")}
            className="btn btn-secondary"
          >
            Descoperă serviciile
          </button>
          <button
            onClick={() => scrollToElement("configurator")}
            className="btn btn-outline border-white text-white hover:bg-white hover:text-olive-800"
          >
            Creează pachetul tău
          </button>
        </div>
      </div>

      {/* Indicator scroll down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => scrollToElement("services")}
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Scroll Down"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
