import React from "react";

const Customer = () => {
  return (
    <div className="w-full">
      <div className=" px-20  mx-auto w-full justify-evenly gap-8 grid grid-cols-4 pt-10">
        <div className="bg-[#00000033] p-4 rounded-xl">
          <h1 className="text-2xl font-medium text-white">2000+</h1>
          <hr className="border border-[#FFFFFF80] my-5"/>
          <h1 className="text-white">Satisfied Clients</h1>
        </div>
        <div className="bg-[#00000033] p-4 rounded-xl">
          <h1 className="text-2xl font-medium text-white">2.98%</h1>
          <hr className="border border-[#FFFFFF80] my-5"/>
          <h1 className="text-white">On-Time Delivery Rate</h1>
        </div>
        <div className="bg-[#00000033] p-4 rounded-xl">
          <h1 className="text-2xl font-medium text-white">150+</h1>
          <hr className="border border-[#FFFFFF80] my-5"/>
          <h1 className="text-white">Countries Served</h1>
        </div>
        <div className="bg-[#00000033] p-4 rounded-xl">
          <h1 className="text-2xl font-medium text-white">24/7</h1>
          <hr className="border border-[#FFFFFF80] my-5"/>
          <h1 className="text-white">Customer</h1>
        </div>
      </div>
    </div>
  );
};

export default Customer;
