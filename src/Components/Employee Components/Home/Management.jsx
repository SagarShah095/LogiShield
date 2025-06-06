import React from "react";

const Management = () => {
  return (
    <div className="mt-14">
      <div>
        <div>
          <h1>Our Service</h1>
          <h1 className="text-3xl font-medium">Supply Chain Management</h1>
          <p className="w-[55%] mt-7">
            Optimize your operations with our streamlined supply chain
            management - from sourcing and warehousing to last-mile delivery. We
            ensure complete visibility, efficiency, and control throughout your
            logistics network.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="w-fit">
            <h1 className="text-3xl w-fit">01</h1>
            <img src="/assets/Photo1.png" alt="" className="w-[90%] mt-4" />
            <div className="space-y-3 w-fit mt-3">
              <h1 className="text-2xl w-fit">Inventory Optimization</h1>
              <p className="text-sm w-[95%]">
                Optimize stock levels, reduce waste, and boost efficiency with
                real-time insights and intelligent inventory management
                solutions.
              </p>
            </div>
          </div>
          <div className="w-fit">
            <h1 className="text-3xl w-fit">02</h1>
            <img src="/assets/Photo2.png" alt="" className="w-[90%] mt-4" />
            <div className="space-y-3 mt-3 w-fit">
              <h1 className="text-2xl w-fit">Customs and Compliance</h1>
              <p className="text-sm w-[95%]">
                Ensure smooth global shipping with expert customs handling and
                full compliance with international trade regulations.
              </p>
            </div>
          </div>
          <div className="w-fit">
            <h1 className="text-3xl w-fit">03</h1>
            <img src="/assets/Photo3.png" alt="" className="w-[90%] mt-4" />
            <div className="space-y-3 w-fit mt-3">
              <h1 className="text-2xl w-fit">Real-time Tracking</h1>
              <p className="text-sm w-[95%]">
                Track shipments live with real-time updates, ensuring full
                visibility from dispatch to final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
