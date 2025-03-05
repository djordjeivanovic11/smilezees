"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FrontHero: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to an API
    console.log("Name:", name, "Phone:", phone);
  };

  return (
    <section className="relative w-full overflow-hidden py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-16 lg:space-y-0">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-10 lg:mr-20">
            <h1 className="font-serif text-[#222222] font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-tight animate-fade-in">
              Your Next Dental Journey
            </h1>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#222222] opacity-80 animate-slide-up">
              Free Consultations & Stay
              <br />
              Premium Dental Treatments
              <br />
              Stunning Results Guaranteed
            </h2>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-6">
              <Link href="/gallery">
                <button className="inline-flex items-center justify-center bg-gradient-to-r from-[#6B47FD] to-[#372d6d] text-white font-serif font-bold text-xl py-6 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:from-[#372d6d] hover:to-[#6B47FD]">
                  Explore Our Transformations
                </button>
              </Link>

              <Link href="#how-it-works-section">
                <button className="inline-flex items-center justify-center border-2 border-[#6B47FD] text-[#6B47FD] font-serif font-bold text-xl py-6 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-[#f9f7ff] hover:text-[#372d6d]">
                  How It Works
                </button>
              </Link>
            </div>

            {/* Form Section */}
            <div className="mt-12 flex flex-col items-center lg:items-start space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full max-w-md">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-8 py-6 border-2 border-[#6B47FD] rounded-full text-[#222222] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#6B47FD] text-xl"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-8 py-6 border-2 border-[#6B47FD] rounded-full text-[#222222] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#6B47FD] text-xl"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#6B47FD] to-[#372d6d] text-white font-serif font-bold py-6 px-12 rounded-full transition-all duration-300 transform hover:scale-110 hover:from-[#372d6d] hover:to-[#6B47FD] text-xl"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end w-full sm:w-3/4 lg:w-1/2 hidden lg:block">
            {/* Replace with your actual image gallery or component */}
            <Image
              src="/milija.jpg"
              alt="Dental Treatment Hero Image"
              width={1200}
              height={1200}
              className="rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontHero;
