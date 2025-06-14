import React, { useState } from "react";
import { MdReport } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../../../index.css";
import { AnimatePresence, motion } from "framer-motion";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showShipmentDrawer, setShowShipmentDrawer] = useState(false);
  const [showVehical, setShowVehical] = useState(false);
  const [x, setX] = useState(20);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  const toggleFilter = () => setShowFilter(!showFilter);
  const toggleShipmentDrawer = () => {
    setShowShipmentDrawer(!showShipmentDrawer);
  };
  const toggleVahicalDrawer = () => setShowVehical(!showVehical);

  return (
    <div className="relative w-full">
      {/* Top bar */}
      <div className="flex md:flex-wrap justify-between gap-2 overflow-scroll scrollbar-hide items-center md:gap-2">
        <div
          className="flex items-center  rounded-md w-1/3  sm:w-fit md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
          onClick={toggleFilter}
        >
          <img src="/assets/Set.png" className="w-3 md:w-5 md:h-5" />
          <h1 className="font-medium text-base  md:font-semibold">Filter</h1>
        </div>

        <div className="flex md:flex-wrap justify-end gap-1 md:gap-2 w-full sm:w-auto">
          <div
            className="flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
            onClick={toggleShipmentDrawer}
          >
            <img src="/assets/Plus.png" className="w-3 md:w-4 md:h-4" />
            <h1 className="font-medium text-sm md:text-base md:font-semibold">
              New Shipment
            </h1>
          </div>
          <div
            className="flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
            onClick={toggleVahicalDrawer}
          >
            <img src="/assets/Truck.png" className="w-3 md:w-5 md:h-5" />
            <h1 className="text-sm md:text-base font-medium md:font-semibold">
              Add Vehicle
            </h1>
          </div>
          <div className="md:block hidden">
            <div className="flex items-center rounded-xl p-2 gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/Set.png" className="w-5 h-5" />
              <h1 className="text-base font-semibold">Report</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className=" fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4">
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-4 relative overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-lg">Filters</h2>
              <button onClick={toggleFilter}>
                <IoClose size={22} />
              </button>
            </div>

            {/* Region Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Region</h3>
              <div className="space-y-1 mt-1">
                {[
                  "North America",
                  "Southeast Asia",
                  "Oceania",
                  "Eastern Europe",
                  "India",
                  "Himalayan Region",
                  "Indo-Gangetic Plain",
                  "Western Ghats",
                ].map((region) => (
                  <div key={region}>
                    <input
                      type="radio"
                      name="region"
                      id={region}
                      className="mr-2 font-medium"
                    />
                    <label className="mr-2 font-medium" htmlFor={region}>
                      {region}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrier Filter */}
            <div className="mb-4">
              <h3 className="font-medium">Carrier</h3>
              <div className="space-y-1 mt-1">
                {["DHL", "MAERSK", "CMA", "CMA CGM"].map((carrier) => (
                  <div key={carrier}>
                    <input
                      type="radio"
                      name="carrier"
                      id={carrier}
                      className="mr-2"
                    />
                    <label className="mr-2 font-medium" htmlFor={carrier}>
                      {carrier}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Type */}
            <div className="mb-4">
              <h3 className="font-medium">Vehicle type</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {[
                  { label: "Pickup Truck", src: "/assets/Main1.png" },
                  { label: "Container Ship", src: "/assets/Main2.png" },
                  { label: "Cargo Plane", src: "/assets/Main3.png" },
                ].map(({ label, src }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center border rounded-lg p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img src={src} alt={label} className="h-full" />
                    <span className="text-base font-semibold mt-1 text-center">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={toggleFilter}
                className="border px-3 py-1 rounded-lg text-sm hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="bg-[#0D47A1] text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-900">
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Right-side New Shipment Drawer */}
      <AnimatePresence>
        {showShipmentDrawer && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-md bg-white h-full shadow-xl p-5 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">New Shipment</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleShipmentDrawer}
                >
                  <IoClose size={24} />
                </motion.button>
              </div>

              {/* Shipment Form Content */}
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">
                    Shipment Type
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Package</option>
                    <option>Container</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Priority Level
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Standard</option>
                    <option>Express</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Shipping Date
                  </label>
                  <input type="date" className="w-full border rounded-lg p-2" />
                </div>

                <div>
                  <label className="block font-medium mb-1">Sender Name</label>
                  <input
                    type="text"
                    placeholder="Ex: Radhakrishna swami"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Pickup Address
                  </label>
                  <textarea
                    placeholder="Ex: 139 Chennai Trunk Road"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="XXXXXXXX52"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Receiver Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: rajesh joshi"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Delivery Address
                  </label>
                  <textarea
                    placeholder="Ex: 304 shree ram com"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Receiver Phone
                  </label>
                  <input
                    type="text"
                    placeholder="XXXXXXXX85"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Item Weight</label>
                  <input
                    type="text"
                    placeholder="1.5 lb"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#0D47A1] text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showVehical && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-md bg-white h-full shadow-xl p-5 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Add Vehical</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleVahicalDrawer}
                >
                  <IoClose size={24} />
                </motion.button>
              </div>

              {/* Form starts here */}
              <form className="space-y-4">
                {/* Vehicle Type & Number */}
                <div>
                  <label className="block font-medium mb-1">Vehical Type</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Pickup truck</option>
                    <option>Mini Truck</option>
                    <option>Tempo</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    placeholder="MH 12 AB 1234"
                  />
                </div>

                {/* License Plate & Model */}
                <div>
                  <label className="block font-medium mb-1">
                    License Plate
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    placeholder="MH 12 AB 1234"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    placeholder="TATA ACE"
                  />
                </div>

                {/* Maximum Load & Dimensions */}
                <div>
                  <label className="block font-medium mb-1">Maximum Load</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    placeholder="XXXX Kg"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Length
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg p-2"
                      placeholder="380cm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Width
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg p-2"
                      placeholder="150cm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Height
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg p-2"
                      placeholder="185cm"
                    />
                  </div>
                </div>

                {/* Cold Storage */}
                <div>
                  <label className="block font-medium mb-1">Cold Storage</label>
                  <div className="flex items-center gap-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="coldStorage" className="mr-2" />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="coldStorage" className="mr-2" />
                      No
                    </label>
                  </div>
                </div>

                {/* Dates */}
                <div>
                  <label className="block font-medium mb-1">
                    Registration Date
                  </label>
                  <input type="date" className="w-full border rounded-lg p-2" />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Insurance Expiry Date
                  </label>
                  <input type="date" className="w-full border rounded-lg p-2" />
                </div>

                {/* File Uploads */}
                <div className="space-y-4 rounded-md p-4">
                  <div>
                    <label className="block font-medium mb-1">
                      Upload RC Document
                    </label>
                    <div className="border border-dashed border-gray-400/80 rounded-lg h-32 flex items-center justify-center text-gray-500 text-sm cursor-pointer hover:bg-gray-50">
                      <label className="w-full h-full flex items-center justify-center cursor-pointer">
                        <input type="file" className="hidden" />
                        Drag & drop or click to upload
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium mb-1">
                      Upload Insurance
                    </label>
                    <div className="border border-dashed border-gray-400/80 rounded-lg h-32 flex items-center justify-center text-gray-500 text-sm cursor-pointer hover:bg-gray-50">
                      <label className="w-full h-full flex items-center justify-center cursor-pointer">
                        <input type="file" className="hidden" />
                        Drag & drop or click to upload
                      </label>
                    </div>
                  </div>
                </div>

                {/* Status and Driver */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-medium mb-1">
                      Vehicle Status
                    </label>
                    <select className="w-full border rounded-lg p-2">
                      <option>Available</option>
                      <option>Unavailable</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Assigned Driver
                    </label>
                    <select className="w-full border rounded-lg p-2">
                      <option>Dipesh Pandav</option>
                      <option>Rahul Mehra</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#0D47A1] text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                  >
                    Add Vehical
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
