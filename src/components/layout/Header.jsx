"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-olive-700">
          DreamEvents
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Acasă", "Servicii", "Galerie", "Pachete", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="font-medium text-gray-700 hover:text-olive-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <button className="md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Link
          href="/#contact"
          className="hidden md:block bg-olive-700 hover:bg-olive-800 text-white px-6 py-2 rounded-full transition-colors font-medium"
        >
          Contactează-ne
        </Link>
      </div>
    </header>
  );
}
