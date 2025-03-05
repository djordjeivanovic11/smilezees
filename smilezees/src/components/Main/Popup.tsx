"use client";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

interface DiscountPopupProps {
  show: boolean;
  handleClose: () => void;
}

const DiscountPopup: React.FC<DiscountPopupProps> = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shouldShow, setShouldShow] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Check if the popup was previously dismissed via cookie
    const isPopupDismissed = document.cookie
      .split("; ")
      .find((row) => row.startsWith("popupDismissed="));
    if (!isPopupDismissed) {
      const timer = setTimeout(() => setShouldShow(true), 11000); // Show after 11 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      await axios.post("/api/send", { email });
      setSubmitted(true);
      setError(null);
    } catch (error) {
      console.error("Failed to send email:", error);
      setError("Failed to send email. Please try again.");
    }
  };

  const handleDismiss = async () => {
    if (isDismissing) return;
    setIsDismissing(true);
    try {
      // If you don't need the API call, comment out or remove the line below.
      await axios.post("/api/dismiss-popup");
    } catch (error) {
      console.error("Failed to dismiss popup:", error);
      // Even if the API call fails, we want to dismiss the popup.
    } finally {
      document.cookie = "popupDismissed=true; path=/; max-age=604800"; // 7 days
      setShouldShow(false);
      handleClose();
    }
  };

  if (!show || !shouldShow) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-[#F7E7CE] text-[#6B47FD] rounded-3xl shadow-2xl p-8 sm:p-12 max-w-full lg:max-w-5xl w-11/12 border border-[#6B47FD] transition-all duration-500">
        <div className="flex justify-end">
          <button
            onClick={handleDismiss}
            className={`text-3xl leading-none font-bold text-[#6B47FD] hover:text-[#372d6d] ${
              isDismissing ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isDismissing}
            aria-label="Close popup"
          >
            &times;
          </button>
        </div>
        {!submitted ? (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              May Vibes, Summer Dreams!
            </h2>
            <p className="text-center mb-6 text-lg sm:text-xl">
              Kick off your summer with an exclusive discount of up to{" "}
              <strong className="font-bold">€1500</strong> on dental treatments and
              enjoy complimentary accommodation. Claim this offer now!
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-3 rounded-md bg-white text-[#6B47FD] placeholder-gray-500 border ${
                  error ? "border-red-500" : "border-[#6B47FD]"
                } focus:outline-none focus:ring-2 focus:ring-[#6B47FD] transition`}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-[#6B47FD] text-white py-3 rounded-lg border border-[#372d6d] hover:bg-[#372d6d] transition duration-300 text-lg font-bold"
            >
              Claim Your Discount
            </button>
          </>
        ) : (
          <div className="text-center">
            <FaCheckCircle size={50} className="text-green-400 mb-3" />
            <h4 className="text-xl font-semibold">Thank you!</h4>
            <p className="text-lg">
              Your discount details are on their way. Check your email to claim this exclusive May offer!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountPopup;
