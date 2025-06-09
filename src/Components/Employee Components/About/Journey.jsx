import React from "react";

const Journey = () => {
  return (
    <div className="mt-16">
      <div>
        <div>
          <h1 className="text-3xl font-medium">Our Journey</h1>
          <p className="mt-2 font-[500]">
            Since 2020, we've been on a mission to redefine logistics for the
            modern world. What started as a small team with big ambitions has
            grown into a dynamic logistics network that connects cities,
            businesses, and people across the nation. Each year, we’ve taken
            bold steps — expanding our fleet, adopting smart technologies,
            building warehouses, and entering global markets.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-between gap-4">
            <div className="bg-[url('/assets/F1.png')] rounded-lg text-white font-medium flex items-end justify-between p-4 bg-cover bg-center h-72  mt-8">
              <div>
                <h1 className="text-xl w-[50%]">Company Founded</h1>
                <p>2021</p>
              </div>
              <div className="flex items-center justify-center bg-white p-2 rounded-full border-[2px] border-[#0D47A1] ">
                <img src="/assets/CrsArrow.png" alt="" />
              </div>
            </div>
            <div className="bg-[url('/assets/F2.png')] rounded-lg text-white font-medium flex items-end justify-between p-4 bg-cover bg-center h-72  mt-8">
              <div>
                <h1 className="text-xl w-[50%]">First Fleet Launched</h1>
                <p>2022</p>
              </div>
              <div className="flex items-center justify-center bg-white p-2 rounded-full border-[2px] border-[#0D47A1] ">
                <img src="/assets/CrsArrow.png" alt="" />
              </div>
            </div>
          </div>
          <div
            className="bg-[url('/assets/F3.png')] rounded-lg text-white font-medium flex items-end 
          justify-between p-4 bg-cover bg-center h-72 w-[50%] mt-8"
          >
            <div>
              <h1 className="text-xl ">Cross-Country Operations Began</h1>
              <p>2023</p>
            </div>
            <div className="flex items-center justify-center bg-white p-2 rounded-full border-[2px] border-[#0D47A1] ">
              <img src="/assets/CrsArrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div
            className="bg-[url('/assets/F4.png')] w-[40%] rounded-lg text-white font-medium 
            flex items-end justify-between p-4 bg-cover bg-center h-72  mt-8"
          >
            <div>
              <h1 className="text-xl w-[50%]">24/7 Real-Time Tracking Added</h1>
              <p>2024</p>
            </div>
            <div className="flex items-center justify-center bg-white p-2 rounded-full border-[2px] border-[#0D47A1] ">
              <img src="/assets/CrsArrow.png" alt="" />
            </div>
          </div>
          <div
            className="bg-[url('/assets/F5.png')] rounded-lg text-white font-medium flex items-end 
          justify-between p-4 bg-cover bg-center h-72 w-[60%] mt-8"
          >
            <div>
              <h1 className="text-xl ">Global Expansion</h1>
              <p>2025</p>
            </div>
            <div className="flex items-center justify-center bg-white p-2 rounded-full border-[2px] border-[#0D47A1] ">
              <img src="/assets/CrsArrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
