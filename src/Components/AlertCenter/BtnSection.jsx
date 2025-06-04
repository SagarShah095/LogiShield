import React from "react";
import "../../index.css";

const BtnSection = () => {
  return (
    <div className="relative w-full">
      <div className="flex md:flex-wrap justify-end items-center md:gap-2">
        <div className="flex md:flex-wrap overflow-x-scroll scrollbar-hide justify-end gap-1 md:gap-2 w-full sm:w-auto">
          <div className="min-w-max">
            <div className="flex w-32 md:w-fit items-center rounded-md md:rounded-xl p-2 gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/Person.png" className="w-3 md:w-5 md:h-5" />
              <h1 className="text-sm md:text-base font-medium md:font-semibold">
                Assign Issue
              </h1>
            </div>
          </div>

          <div className="min-w-max">
            <div className="flex items-center w-[11.4rem] md:w-fit rounded-md md:rounded-xl p-2 gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/MainFile.png" className="w-3 md:w-5 md:h-5" />
              <h1 className="text-sm md:text-base font-medium md:font-semibold">
                Create Incident Report
              </h1>
            </div>
          </div>

          <div className="min-w-max">
            <div className="flex items-center rounded-md w-36 md:w-fit md:rounded-xl p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/Truck.png" className="w-3 md:w-5 md:h-5" />
              <h1 className="text-sm md:text-base font-medium md:font-semibold">
                Acknowledge All
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnSection;
