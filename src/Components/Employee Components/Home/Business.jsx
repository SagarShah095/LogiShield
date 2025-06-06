import React from "react";

const Business = () => {
  return (
    <div>
      <div className="px-20 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-medium">Useful for business.</h1>
          <p className="text-sm text-[#000000CC]">
            Our technologies enhance business effeciency and driver safety.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-white text-start p-6 pr-28 space-y-16 my-5 shadow-xl rounded-xl">
            <div>
              <h1 className="text-sm">Time Saving</h1>
            </div>
            <div>
              <h1 className="text-3xl font-medium">20%</h1>
              <p className="text-black font-medium">Less mundanity.</p>
              <p className="text-[#00000080] text-sm">
                Process automation freesyou to focus on other tasks.
              </p>
            </div>
          </div>
          <div className="bg-white text-start p-6 pr-28 space-y-16 my-5 shadow-xl rounded-xl">
            <div>
              <h1 className="text-sm">Time Saving</h1>
            </div>
            <div>
              <h1 className="text-3xl font-medium">50%</h1>
              <p className="text-black font-medium">Fewer accidents.</p>
              <p className="text-[#00000080] text-sm">
                Analyzing driving behavior improves road safety.
              </p>
            </div>
          </div>
          <div className="bg-white text-start p-6 pr-28 space-y-16 my-5 shadow-xl rounded-xl">
            <div>
              <h1 className="text-sm">Time Saving</h1>
            </div>
            <div>
              <h1 className="text-3xl font-medium">30%</h1>
              <p className="text-black font-medium">Reduction in fuel costs.</p>
              <p className="text-[#00000080] text-sm">
                Rote optimization saves up to a third on fule.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Business;
