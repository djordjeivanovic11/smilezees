"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FrontHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 bg-white lg:bg-gradient-to-tr from-[#7668c4] to-[#e5daf8]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-12 lg:space-y-0">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 lg:mr-10">
            <h1 className="font-serif text-[#222222] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight animate-fade-in" style={{ fontFamily: 'Giaza, serif' }}>
              Your Next Dental Trip
            </h1>
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#372d6d] animate-slide-up">
              Free Consultations & Stay
              <br />
              Advanced Dental Treatments
              <br />
              Exceptional Results
            </h2>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/gallery">
                <button className="inline-flex items-center justify-center bg-gradient-to-r from-[#372d6d] to-[#6B47FD] text-white font-serif font-bold py-3 px-6 rounded-full shadow-xl transition-transform transform hover:scale-105 hover:from-[#6B47FD] hover:to-[#372d6d]">
                  Our Transformations
                </button>
              </Link>

              <Link href="#how-it-works-section">
                <button className="inline-flex items-center justify-center bg-white text-[#372d6d] font-serif font-bold py-3 px-6 rounded-full shadow-xl transition-transform transform hover:scale-105 hover:bg-[#f9f7ff] hover:text-[#6B47FD]">
                  How it works
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end w-full sm:w-3/4 lg:w-1/2 hidden lg:block">
            {/* Replace with your actual image gallery or component */}
            <Image 
                src="/milija.jpg"
                alt="Smilezees Hero Image"
                width={800}
                height={800}
                className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontHero;
