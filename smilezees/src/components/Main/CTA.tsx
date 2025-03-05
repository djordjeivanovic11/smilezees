"use client";
import React from "react";

export default function AnimatedCTA() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#222222] mb-6 animate-fade-in">
          Your Perfect Smile Awaits
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#555555] mb-10 max-w-3xl mx-auto animate-slide-up">
          Discover unparalleled dental care that transforms your smile and elevates your confidence.
        </p>
        <button className="px-10 py-5 bg-gradient-to-r from-[#6B47FD] to-[#372d6d] text-white text-xl font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 animate-bounce">
          Book Your Consultation Now
        </button>
      </div>
    </section>
  );
}
