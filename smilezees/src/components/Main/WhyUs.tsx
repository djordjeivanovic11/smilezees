import { FaComment, FaHotel, FaDollarSign } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className="px-8 bg-white text-center">
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#222222] mb-10 tracking-tight">
        Why <span className="text-[#6B47FD]">Smilezees?</span>
      </h2>
      <p className="text-2xl sm:text-3xl lg:text-4xl text-[#555555] mb-16 max-w-5xl mx-auto">
        We combine expert dental care with luxury accommodations and unbeatable savings to transform your dental journey into a seamless, world-class experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Expert Guidance */}
        <div className="p-14">
          <FaComment className="text-[#6B47FD] text-9xl mb-8 mx-auto" />
          <h3 className="text-4xl font-semibold text-[#222222] mb-6">
            <span className="text-[#6B47FD]">Expert</span> Guidance
          </h3>
          <p className="text-xl sm:text-2xl text-[#555555]">
            Receive personalized 1-on-1 consultations with top specialists. Get all the insights you need to plan your perfect dental trip.
          </p>
        </div>

        {/* Luxury Stay, Free */}
        <div className="">
          <FaHotel className="text-[#6B47FD] text-9xl mb-8 mx-auto" />
          <h3 className="text-4xl font-semibold text-[#222222] mb-6">
            <span className="text-[#6B47FD]">Luxury</span> Stay, Free
          </h3>
          <p className="text-xl sm:text-2xl text-[#555555]">
            Enjoy complimentary 5-star accommodation when your treatment exceeds $8,000. Experience premium comfort at no extra cost.
          </p>
        </div>

        {/* Unmatched Savings */}
        <div className="">
          <FaDollarSign className="text-[#6B47FD] text-9xl mb-8 mx-auto" />
          <h3 className="text-4xl font-semibold text-[#222222] mb-6">
            <span className="text-[#6B47FD]">Unmatched</span> Savings
          </h3>
          <p className="text-xl sm:text-2xl text-[#555555]">
            Access world-class dental treatments and save up to 70% compared to U.S. prices. Top-quality care is now more affordable than ever.
          </p>
        </div>
      </div>
    </section>
  );
}
