import React from "react";

const Date = () => {
  return (
    <div className="mt-8 ">
      <div className="flex gap-2 w-[80%]">
        <div className="w-full space-y-2">
          <h1 className="text-xs md:font-semibold">Start Date</h1>
          <input
            type="date"
            className="max-w-56 w-full cursor-pointer uppercase placeholder:text-[#00000066] bg-[#F5F8FF] p-2 rounded-lg"
            placeholder="DD/MM/YYYY"
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="text-xs md:font-semibold">End Date</h1>
          <input
            type="date"
            className="max-w-56 w-full cursor-pointer uppercase placeholder:text-[#00000066] bg-[#F5F8FF] p-2 rounded-lg"
            placeholder="DD/MM/YYYY"
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="text-xs md:font-semibold">City</h1>
          <input
            type="text"
            className="max-w-56 w-full cursor-pointer placeholder:text-[#00000066] bg-[#F5F8FF] p-2 rounded-lg"
            placeholder="India"
          />
        </div>
      </div>
    </div>
  );
};

export default Date;
