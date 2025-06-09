import React from "react";

const HeroSection = () => {
  return (
    <div className="px-14 mt-24">
      <div>
        <div className="text-white space-y-12 rounded-xl py-20 bg-[#00000033] px-40">
          <h1 className="text-4xl text-center">
            Comprehensive Logistics Services Built for Speed, Scale, and Success
          </h1>
          <p className="text-start">
            From first-mile pickups to last-mile delivery, our full-spectrum
            logistics services are designed to move your business forward.
            Whether you're shipping locally or globally, we offer seamless
            freight solutions, real-time tracking, warehousing, and dependable
            delivery — all powered by modern technology and a customer-first
            mindset.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#00000033] rounded-lg p-5 text-white">
              Explore our service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
