import Hero from "@/components/Main/Hero";
import WhyUs from "@/components/Main/WhyUs";
import Offer from "@/components/Main/Offer";

export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen">
        <Hero />
      </div>
      <div className="w-screen min-h-screen">
        <WhyUs />
      </div>
      <div className="w-screen min-h-screen">
        <Offer />
      </div>
    </>
  );
}
