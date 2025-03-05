import Image from "next/image";
import React from "react";

export default function DentalClinicHero() {
  return (
    <section className="relative w-full bg-[#EAE4FF] py-28 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8">
        {/* Left Side - Image & Circles */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
          {/* Coral Circle - hidden on small screens */}
          <div
            className="hidden sm:block absolute rounded-full bg-[#FF6A6A] w-[400px] h-[400px] -left-20 top-0"
            style={{ zIndex: 1 }}
          />
          {/* Pink Circle - hidden on small screens */}
          <div
            className="hidden sm:block absolute rounded-full bg-[#FFA6B1] w-[500px] h-[500px] -left-10 top-10"
            style={{ zIndex: 2 }}
          />
          {/* Child Image */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem]">
            <Image
              src="/smile.png"
              alt="Smiling Child"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <p className="uppercase text-base sm:text-lg font-semibold text-gray-500 mb-3">
            For Dental Clinics
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#222222] mb-6 leading-tight">
            Become a part of{" "}
            <span className="text-[#6B47FD]">the Smilezees</span> Network
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#555555] max-w-2xl mb-8 leading-relaxed mx-auto">
            Join our expanding network in Southeast Europe and welcome patients 
            from Western countries to enjoy top-tier dental care at a fraction 
            of the cost. From comprehensive education and clinical support to 
            unmatched marketing resources, we empower your clinic to stand out 
            and transform countless smiles.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-4 border-2 border-[#6B47FD] text-[#6B47FD] text-xl font-semibold rounded-full hover:bg-[#f9f7ff] transition">
              Info for dental clinics
            </button>
            <button className="px-8 py-4 border-2 border-[#6B47FD] text-[#6B47FD] text-xl font-semibold rounded-full hover:bg-[#f9f7ff] transition">
              Register your clinic
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
