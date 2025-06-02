import React from "react";

const ShipFilter = () => {
  return (
    <div className="font-rubik">
      <div>
        <div>
          <h1 className="text-2xl font-rubik font-bold">Shipment</h1>
        </div>
        <div>
          <h1 className="mt-3">Filter</h1>
          <div className="flex gap-4">
            <div className="bg-[#F5F8FF] p-2 rounded-xl w-fit">
              <select
                name=""
                id=""
                className=" max-w-24 bg-[#F5F8FF] cursor-pointer w-full"
              >
                <option value="">Status</option>
              </select>
            </div>

            <div className="bg-[#F5F8FF] p-2 rounded-xl w-fit">
              <select
                name=""
                id=""
                className=" max-w-52 bg-[#F5F8FF] cursor-pointer w-full"
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
