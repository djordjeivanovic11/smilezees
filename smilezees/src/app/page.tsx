"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Main/Hero";
import WhyUs from "@/components/Main/WhyUs";
import ClinicsCTA from "@/components/Main/Clinics/ClinicsCTA";
import CTA from "@/components/Main/CTA";
import FreeQuote from "@/components/Main/FreeQuote";
import DiscountPopup from "@/components/Main/Popup";
import HowItWorks from "@/components/Main/HIW";

export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const popupDismissed = localStorage.getItem("popupDismissed");
    if (!popupDismissed) {
      setIsPopupVisible(true);
    }
  }, []);

  const handlePopupClose = () => {
    localStorage.setItem("popupDismissed", "true");
    setIsPopupVisible(false);
  };

  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <FreeQuote />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <ClinicsCTA />
      </div>
      <div>
        <CTA />
      </div>
      {isPopupVisible && (
        <DiscountPopup show={true} handleClose={handlePopupClose} />
      )}
    </>
  );
}
