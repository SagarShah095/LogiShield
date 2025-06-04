import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Schedule = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showShipmentDrawer, setShowShipmentDrawer] = useState(false);
  const [showVehical, setShowVehical] = useState(false);

  const toggleFilter = () => setShowFilter(!showFilter);
  const toggleShipmentDrawer = () => setShowShipmentDrawer(!showShipmentDrawer);
  const toggleVahicalDrawer = () => setShowVehical(!showVehical);

  return (
    <div className="relative w-full">
      {/* Top bar */}
      <div className="flex md:flex-wrap items-center md:gap-2 w-full">
        <div className="flex   overflow-x-auto md:flex-wrap gap-1 md:gap-2 w-full">
          <div className="w-full md:w-fit">
            <div className="w-28 md:w-full flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/calender.png" className="w-3 md:w-5 md:h-5" />
              <h1 className="text-sm md:text-base font-medium md:font-semibold">
                Schedule
              </h1>
            </div>
          </div>

          <div className="w-full md:w-fit">
            <div className="flex items-center w-36 md:w-full rounded-md md:rounded-xl gap-2 p-1 md:p-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <img src="/assets/msg.png" className="w-3 md:w-5 md:h-5" />
              <h1 className="text-sm md:text-base font-medium md:font-semibold">
                Send Message
              </h1>
            </div>
          </div>

          <div className="w-full md:w-fit">
            <div
              className="w-32 md:w-full flex items-center  rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
              onClick={toggleVahicalDrawer}
            >
              <img src="/assets/Truck.png" className="w-3 md:w-5 md:h-5" />
              <h1 className="text-sm md:text-base font-medium md:font-semibold">
                Assign Vehicle
              </h1>
            </div>
          </div>

          <div className="w-full md:w-fit">
            <div
              className="w-32 md:w-full flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
              onClick={toggleShipmentDrawer}
            >
              <img src="/assets/Plus.png" className="w-3 md:w-4 md:h-4" />
              <h1 className="font-medium text-sm md:text-base md:font-semibold">
                Add New Driver
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal */}

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

export default Schedule;
