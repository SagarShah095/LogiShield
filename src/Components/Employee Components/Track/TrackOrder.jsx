import React from "react";

const TrackOrder = () => {
  return (
    <div className="px-14 mt-28">
      <div>
        <div className="text-white px-10 gap-20 flex justify-between  rounded-xl py-20 bg-[#00000033] ">
          <div className="">
            <div className="w-full">
              <h1 className="text-4xl font-bold">Track. Trace. Trust.</h1>
            </div>
            <h1 className="text-4xl w-full font-bold">
              Stay updated on every move your package makes.
            </h1>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-lg w-full p-4 space-y-3 text-black">
              <div className="flex items-center gap-3">
                <h1 className="font-bold cursor-pointer">Track order</h1>
                <h1 className="text-[#00000059] font-bold cursor-pointer">
                  Ship order
                </h1>
              </div>
              <div className="">
                <hr className="w-[5.5rem] border border-[#0D47A1]" />
                <hr className="border border-[#00000033] w-[100%]" />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-[500]">
                  <span className="font-bold ">Track</span> your order through
                </h1>
                <div className="grid text-center grid-cols-4">
                  <h1 className="bg-black p-2 cursor-pointer rounded-l-lg  text-white">
                    Mobile
                  </h1>
                  <h1 className="bg-[#F9F9F9] p-2 cursor-pointer">AWB</h1>
                  <h1 className="bg-[#F9F9F9] p-2 cursor-pointer">Order Id</h1>
                  <h1 className="bg-[#F9F9F9] p-2 cursor-pointer rounded-r-lg">LRN</h1>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="p-3 border border-[#D4D4D4] placeholder:text-[black] w-full rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <button className="bg-black w-full text-white font-semibold p-3 rounded-lg">
                    Get OTP
                  </button>
                </div>
                <hr className="border border-[#00000033] my-6" />
                <div className="flex justify-center items-center">
                  <h1 className="text-xs text-center cursor-pointer w-fit py-3">
                    Live tracking updates & extra support on our App
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
