import React from "react";

export default function Offer() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#222222] mb-6">
          Our Exclusive Offer
        </h2>
        <p className="text-base sm:text-lg text-[#555555] mb-12 max-w-2xl mx-auto">
          Smilezees transforms your dental journey with premium treatments, top specialists, and luxury accommodations at unbeatable prices. Enjoy world-class care that saves you up to 70% compared to American and South American prices.
        </p>
        <div className="space-y-8">
          <div className="text-left max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-[#372d6d] mb-3">
              Premium Dental Care
            </h3>
            <p className="text-lg text-[#555555]">
              Experience top-tier dental treatments performed by world-class specialists using cutting-edge technology.
            </p>
          </div>
          <div className="text-left max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-[#372d6d] mb-3">
              Luxury Accommodations
            </h3>
            <p className="text-lg text-[#555555]">
              Enjoy premium 5-star accommodations that provide comfort and convenience throughout your treatment journey.
            </p>
          </div>
          <div className="text-left max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-[#372d6d] mb-3">
              Unbeatable Savings
            </h3>
            <p className="text-lg text-[#555555]">
              Save up to 70% compared to U.S. and South American prices while receiving world-class dental care.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-gradient-to-r from-[#372d6d] to-[#6B47FD] text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
