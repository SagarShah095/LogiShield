import React from "react";

const Section1 = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2 bg-white w-full p-4 rounded-xl mt-4">
          <h1 className="font-semibold">Total Shipments Today</h1>
          <div className="flex items-center text-[#4CAF50] font-medium font-nunito gap-2">
            <img src="/assets/Arrow1.png" alt="" />
            <h1>3.2%</h1>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">₹ 3,248</h1>
        </div>
        <div className="space-y-2 bg-white w-full p-4 rounded-xl mt-4">
          <h1 className="font-semibold">On-Time Deliveries</h1>
          <div className="flex items-center text-[#F44336] font-medium font-nunito gap-2">
            <img src="/assets/Arrow2.png" alt="" />
            <h1>1.1%</h1>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">89.4%</h1>
        </div>
        <div className="space-y-2 bg-white w-full p-4 rounded-xl mt-4">
          <h1 className="font-semibold">Active Vehicles</h1>
          {/* <div className="flex items-center text-[#4CAF50] font-medium font-nunito gap-2">
            <img src="/assets/Arrow1.png" alt="" />
            <h1>423 / 500</h1>
          </div> */}
          <div className="flex items-end h-full pb-10">
            <h1 className="text-2xl md:text-3xl flex items-end h-full font-bold">
              423 / 500
            </h1>
          </div>
        </div>
        <div className="space-y-2 bg-white w-full p-4 rounded-xl mt-4">
          <h1 className="font-semibold">idle Time Average</h1>
          <div className="flex items-center text-[#4CAF50] font-medium font-nunito gap-2">
            <img src="/assets/Arrow1.png" alt="" />
            <h1>0.3H</h1>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">1.2Hr</h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
