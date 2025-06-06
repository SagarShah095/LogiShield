import React from "react";

const Summary = () => {
  return (
    <div className="bg-white  p-7 rounded-lg">
        <h1 className="font-bold">Alerts Summary</h1>
      <div className="mt-5 grid grid-cols-1  md:grid-cols-3 gap-10">
        <div className="flex justify-between border p-4 rounded-lg">
          <div className="space-y-7">
            <img src="/assets/warning.png" className="w-fit h-12" alt="" />
            <h1 className=" font-semibold">Critical Alerts</h1>
          </div>
          <div>
            <h1 className="text-5xl font-semibold">12</h1>
          </div>
        </div>

        <div className="flex justify-between border p-4 rounded-lg">
          <div className="space-y-7">
            <img src="/assets/Scruu.png" className="w-fit h-12" alt="" />
            <h1 className=" font-semibold">Maintenance Flags</h1>
          </div>
          <div>
            <h1 className="text-5xl font-semibold">34</h1>
          </div>
        </div>

        <div className="flex justify-between border p-4 rounded-lg">
          <div className="space-y-7">
            <img src="/assets/route 2.png" className="w-fit h-12" alt="" />
            <h1 className=" font-semibold">Route Incidents</h1>
          </div>
          <div>
            <h1 className="text-5xl font-semibold">15</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
