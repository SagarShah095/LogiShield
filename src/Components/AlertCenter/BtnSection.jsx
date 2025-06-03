import React from "react";

const BtnSection = () => {

    

  return (
    <div className="relative w-full">
      <div className="flex md:flex-wrap justify-end items-center md:gap-2">
        <div className="flex md:flex-wrap justify-end gap-1 md:gap-2 w-full sm:w-auto">
          <div className="md:block hidden">
            <div className="flex items-center rounded-xl p-2 gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/Person.png" className="w-5 h-5" />
              <h1 className="text-base font-semibold">Assign Issue</h1>
            </div>
          </div>

          <div className="md:block hidden">
            <div className="flex items-center rounded-xl p-2 gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/MainFile.png" className="w-5 h-5" />
              <h1 className="text-base font-semibold">Create Incident Report</h1>
            </div>
          </div>

          <div
            className="flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
          >
            <img src="/assets/Truck.png" className="w-3 md:w-5 md:h-5" />
            <h1 className="text-sm md:text-base font-medium md:font-semibold">
             Acknowledge All
            </h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BtnSection;
