"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import {
  FaPhoneAlt,
  FaClipboardList,
  FaComments,
  FaPlane,
  FaTooth,
  FaSmile,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Step from "@/components/Main/Step";

const HowItWorks: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 0, // Disable AOS transitions
      once: true,
    });
  }, []);

  // Custom Next Arrow for slider
  const NextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#222222] text-2xl focus:outline-none"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    );
  };

  // Custom Prev Arrow for slider
  const PrevArrow = (props:  { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#222222] text-2xl focus:outline-none"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on small screens
        },
      },
    ],
  };

  return (
    <section className="relative bg-white py-12">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] text-center mb-10 mt-8"
          data-aos="fade-up"
        >
          In 6 Easy Steps to Your Perfect Smile
        </h2>

        {/* Slider */}
        <div ref={sliderRef}>
          <Slider {...sliderSettings}>
            {/* Step 1 */}
            <div className="px-4">
              <Step
                stepNumber="1"
                title="Free Online Consultation"
                description="Talk to our dental experts to determine if our services are right for you."
                Icon={FaPhoneAlt}
              />
            </div>
            {/* Step 2 */}
            <div className="px-4">
              <Step
                stepNumber="2"
                title="Personalized Treatment Plan"
                description="Receive a tailored treatment plan designed just for your needs."
                Icon={FaClipboardList}
              />
            </div>
            {/* Step 3 */}
            <div className="px-4">
              <Step
                stepNumber="3"
                title="Ask Your Questions"
                description="Get all your questions answered about the treatment process."
                Icon={FaComments}
              />
            </div>
            {/* Step 4 */}
            <div className="px-4">
              <Step
                stepNumber="4"
                title="Travel for Treatment"
                description="Travel to Montenegro for your world-class dental care."
                Icon={FaPlane}
              />
            </div>
            {/* Step 5 */}
            <div className="px-4">
              <Step
                stepNumber="5"
                title="Receive Treatment"
                description="Our expert dentists provide top-quality treatment using modern technology."
                Icon={FaTooth}
              />
            </div>
            {/* Step 6 */}
            <div className="px-4">
              <Step
                stepNumber="6"
                title="Enjoy Your New Smile"
                description="Leave with a brilliant smile and a life-changing experience."
                Icon={FaSmile}
              />
            </div>
          </Slider>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <button
            className="bg-[#6B47FD] font-serif hover:bg-[#372d6d] text-white py-2 px-8 rounded-full shadow-md text-lg md:text-xl transition duration-300"
            onClick={toggleModal}
          >
            Learn More
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 font-serif">
              <div className="bg-white rounded-lg p-8 w-full max-w-5xl relative shadow-xl">
                <button
                  onClick={toggleModal}
                  className="absolute top-2 right-2 text-gray-600 text-3xl focus:outline-none"
                  aria-label="Close Modal"
                >
                  &times;
                </button>
                <div className="relative pt-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/pHUxGQKx0Tk?start=3"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        :global(.slick-prev:before),
        :global(.slick-next:before) {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
