import React from "react";
import { LuCircleAlert } from "react-icons/lu";

const Order = () => {
  return (
    <div className=" w-[100%]">
      <div className="my-auto flex w-full items-center justify-around ">
        <div className="w-[30%]">
          <h1 className="text-4xl text-white font-semibold w-full">
            Smart Logistics That Drive Your Business Forward
          </h1>
          <h1 className="text-lg text-white w-full mt-4 ">
            Delivering fast, reliable, and cost-effective shipping solutions
            across India and beyond
          </h1>
          <button className="bg-[#0D47A1] hover:bg-[#0f53bd] duration-150 p-3 w-fit text-white rounded-lg font-medium mt-3">
            Join Now
          </button>
        </div>
        <div className="w-[30%]">
          <div className="gap-4 flex flex-col bg-black/20  rounded-lg backdrop-blur-sm p-5">
            <h1 className="text-xl text-white font-semibold">
              Enter Tracking ID
            </h1>
            <h1 className="text-white w-full">
              Real-time tracking you can count on — because your delivery
              matters
            </h1>
            <input
              type="text"
              placeholder="Type your tracking number here"
              className="placeholder:text-[#FFFFFF80] h-14 p-3 bg-[#00000033] text-white  w-full rounded-md"
            />
            <button className="text-white bg-[#0D47A1] hover:bg-[#0f53bd] duration-150  p-3 w-full rounded-md mt-2">
              Track Order
            </button>
            <div className="flex justify-between">
              <h1 className="text-[#FFFFFFCC] cursor-pointer text-sm justify-between ">
                Multiple Traking Number ?
              </h1>
              <h1 className="text-[#FFFFFF80] cursor-pointer flex items-center gap-1">
                <LuCircleAlert /> <span>Need Help</span>
              </h1>
            </div>
          </div>
          <div className="w-full justify-end flex mt-5">
            <div className=" bg-white w-fit p-3 rounded-full cursor-pointer">
              <img src="/assets/ai.png" alt="" className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
