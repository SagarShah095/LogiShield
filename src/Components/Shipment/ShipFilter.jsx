import React from "react";

const ShipFilter = () => {
  return (
    <div className="font-rubik">
      <div>
        <div className="flex justify-between mt-7 w-full">
          <h1 className="text-lg mt-3 md:mt-0 font-semibold md:text-2xl font-rubik md:font-bold">
            Shipment
          </h1>
          <button className="text-[#00000080] border border-[#00000029] md:text-base text-sm p-1 md:p-2 rounded-lg">
            Delete all
          </button>
        </div>
        <div>
          <h1 className="mt-3">Filter</h1>
          <div className="flex gap-1 md:gap-4">
            <div className="bg-[#F5F8FF] p-2 rounded-xl w-fit">
              <select
                name=""
                id=""
                className=" max-w-16 md:max-w-24 bg-[#F5F8FF] cursor-pointer w-full"
              >
                <option value="">Status</option>
              </select>
            </div>

            <div className="bg-[#F5F8FF] p-2 rounded-xl w-fit">
              <select
                name=""
                id=""
                className=" max-w-20 md:max-w-52 bg-[#F5F8FF] cursor-pointer w-full"
              >
                <option value="">Driver/Vehical</option>
              </select>
            </div>

            <div className="bg-[#F5F8FF] p-2 rounded-xl w-fit">
              <select
                name=""
                id=""
                className=" max-w-24 bg-[#F5F8FF] cursor-pointer w-full"
              >
                <option value="">Carrier</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipFilter;
