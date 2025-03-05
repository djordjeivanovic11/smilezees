"use client";
import { useState } from "react";
import Image from "next/image";

export default function BookACall() {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    // Add any analytics tracking if needed
    setShowIframe(true);
  };

  return (
    <div className="w-full bg-white flex items-center justify-center px-4 py-12 sm:px-6 lg:p-20">
      <div className="bg-white bg-opacity-95 p-8 sm:p-12 max-w-full lg:max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#222222] mb-4 sm:mb-6">
            Speak With Our Top Clinic
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#555555] mb-6 sm:mb-8 max-w-3xl">
            This is a call with one of our best and most popular clinics in Montenegro, offering free consultations to help you achieve the smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full lg:w-auto">
            <button
              className="px-10 py-5 bg-[#6B47FD] hover:bg-[#372d6d] text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg transition duration-300 w-full sm:w-auto"
              onClick={handleButtonClick}
            >
              Book a Free Consultation
            </button>
            <a
              href="/quote"
              className="px-10 py-5 border-2 border-[#6B47FD] text-[#6B47FD] hover:bg-[#f9f7ff] text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg transition duration-300 w-full sm:w-auto text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 w-full flex justify-center items-center">
          <Image
            src="/filip.png"
            alt="Our Team"
            width={320}
            height={320}
            className="rounded-full shadow-xl"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Fullscreen Iframe Modal */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-4/5 relative shadow-2xl overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              aria-label="Close modal"
              onClick={() => setShowIframe(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
              className="w-full h-full"
              title="Book a Call"
              aria-label="Book a Call"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
