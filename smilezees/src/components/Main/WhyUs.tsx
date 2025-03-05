import { FaComments, FaBed, FaMoneyBillWave } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-5xl font-extrabold text-[#222222] mb-4">
        Why <span className="text-[#372d6d]">Smilezees?</span>
      </h2>
      <p className="text-lg text-[#555555] mb-12 max-w-2xl mx-auto">
        We combine expert dental care with luxury accommodations and unbeatable savings to transform your dental journey into a seamless, world-class experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Expert Guidance */}
        <div className="p-8">
          <FaComments className="text-[#372d6d] text-6xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-[#222222] mb-2">Expert Guidance</h3>
          <p className="text-lg text-[#555555]">
            Receive personalized 1-on-1 consultations with top specialists. We ensure you get all the insights you need to plan your perfect dental trip.
          </p>
        </div>

        {/* Luxury Stay, Free */}
        <div className="p-8">
          <FaBed className="text-[#372d6d] text-6xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-[#222222] mb-2">Luxury Stay, Free</h3>
          <p className="text-lg text-[#555555]">
            Enjoy complimentary 5-star accommodation when your treatment exceeds $8,000. Experience premium comfort at no extra cost.
          </p>
        </div>

        {/* Unmatched Savings */}
        <div className="p-8">
          <FaMoneyBillWave className="text-[#372d6d] text-6xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-[#222222] mb-2">Unmatched Savings</h3>
          <p className="text-lg text-[#555555]">
            Access world-class dental treatments and save up to 70% compared to U.S. prices. Top quality care is now more affordable than ever.
          </p>
        </div>
      </div>
    </section>
  );
}
