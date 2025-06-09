import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MainHero = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-2xl font-[500]">
            Delhivery’s suite of solutions for{" "}
          </h1>
          <hr className="border border-[#0D47A1] w-[5.7rem] mt-1" />
        </div>

        <div className="grid grid-cols-3 gap-16">
          <div className="mt-10 space-y-5">
            <img src="/assets/Box.png" alt="" />
            <div className="space-y-4">
              <h1 className="text-xl font-medium">E-Commerce Logistics</h1>
              <p>
                We offer end-to-end logistics support for online sellers,
                including fast parcel delivery, warehousing, last-mile delivery,
                and easy return management to ensure smooth customer experiences
                and faster growth.
              </p>
              <div className="flex items-center cursor-pointer w-fit gap-3 text-[#0D47A1]">
                <p className="font-medium">Know More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <img src="/assets/ship.png" alt="" />
            <div className="space-y-4">
              <h1 className="text-xl font-medium">Personal Shipping</h1>
              <p>
                Send your parcels locally or internationally with our secure
                personal courier services. Enjoy real-time tracking, doorstep
                pickup, and reliable delivery — all through a simple,
                user-friendly interface.
              </p>
              <div className="flex items-center cursor-pointer w-fit gap-3 text-[#0D47A1]">
                <p className="font-medium">Know More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <img src="/assets/chain.png" alt="" />
            <div className="space-y-4">
              <h1 className="text-xl font-medium">Business Logistics</h1>
              <p>
                Send your parcels locally or internationally with our secure
                personal courier services. Enjoy real-time tracking, doorstep
                pickup, and reliable delivery — all through a simple,
                user-friendly interface.
              </p>
              <div className="flex items-center cursor-pointer w-fit gap-3 text-[#0D47A1]">
                <p className="font-medium">Know More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
