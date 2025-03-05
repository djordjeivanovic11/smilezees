"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to detect when the user has scrolled down
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // If the page is scrolled more than 50px, update state
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled ? "bg-transparent" : "bg-lila"
      } p-4 sticky rounded-xl shadow-xl z-30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" width={240} height={240} alt="Smilezies Logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-8 font-body text-sm">
          <Link href="/clinics" className="hover:text-accent transition-colors duration-300">
            Clinics
          </Link>
          <Link href="/why-us" className="hover:text-accent transition-colors duration-300">
            Why Us
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Modern Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 z-40">
          <nav className="flex flex-col items-center justify-center bg-lila text-primaryText w-full h-full p-8 space-y-8 font-body text-2xl text-center">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-[#372d6d] text-3xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            <Link
              href="/clinics"
              className="text-[#372d6d] hover:text-accent transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Clinics
            </Link>
            <Link
              href="/why-us"
              className="text-[#372d6d] hover:text-accent transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/contact"
              className="text-[#372d6d] hover:text-accent transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
