import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ShipmentModal = ({ isOpen, onClose, shipment }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-full h-screen bg-black bg-opacity-40 flex justify-end  z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-4xl h-[100%] overflow-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4">Shipment #SH10298</h2>
        <h1 className="text-[#4A739C]">In transit · ETA 2:45 PM</h1>

        <img src="/assets/map.png" alt="Map" className="rounded mb-4" />
        <div className="text-xl font-bold">
          <h1>Route</h1>
        </div>
        <div className=" gap-4 mt-5 ">
          <div className="w-full space-y-3">
            <div className="flex w-full items-center justify-between ">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p className="">From: New York, USA</p>
              </div>

              <h1 className="">1 Infinite Loop, Cupertino, CA</h1>
            </div>
            <div className="flex w-full items-center justify-between ">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p className="">To:Toronto,Canada</p>
              </div>

              <h1 className="">123 Main St, San Francisco, CA</h1>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <div className="grid grid-cols-2">
            <div className="space-y-1">
              <h1 className="text-[#4A739C] ">Status</h1>
              <p className="text-[#0D141C] ">In transit</p>
            </div>
            <div className="space-y-1">
              <h1 className="text-[#4A739C] ">Estimated delivery</h1>
              <p className="text-[#0D141C] ">Today, 2:45 PM</p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <div className="grid grid-cols-2">
            <div className="space-y-1">
              <h1 className="text-[#4A739C] ">Last updated</h1>
              <p className="text-[#0D141C] ">4 minutes ago</p>
            </div>
            <div className="space-y-1">
              <h1 className="text-[#4A739C] ">Carrier</h1>
              <p className="text-[#0D141C] ">UPS</p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <div className="grid grid-cols-2">
            <div className="space-y-1">
              <h1 className="text-[#4A739C] ">Tracking number</h1>
              <p className="text-[#0D141C] ">1Z999AA10123456784</p>
            </div>
            <div className="space-y-1">
              <h1 className="text-[#4A739C] ">Route</h1>
              <p className="text-[#0D141C] ">SFO → SJC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentModal;
