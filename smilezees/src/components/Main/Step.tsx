import React from "react";
import { IconType } from "react-icons";

interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
  Icon: IconType;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, description, Icon }) => {
  return (
    <div className="relative flex flex-col items-center text-center lg:text-left lg:items-start bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-[280px] h-[400px] mx-auto">
      {/* Icon with Circle Background */}
      <div className="w-20 h-20 mb-5 flex items-center justify-center rounded-full bg-[#F3E8FF] shadow-inner">
        <Icon className="text-6xl text-[#6B47FD]" />
      </div>

      {/* Step Number */}
      <h3 className="text-3xl font-bold text-[#6B47FD] mb-3 tracking-widest uppercase font-sans">
        Step {stepNumber}
      </h3>

      {/* Step Title */}
      <h4 className="text-2xl font-bold text-[#222222] mb-4 font-serif">
        {title}
      </h4>

      {/* Description */}
      <p className="text-lg text-[#555555] leading-relaxed font-sans">
        {description}
      </p>

      {/* Decorative Overlay on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-[#F3E8FF] opacity-0 hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
    </div>
  );
};

export default Step;
