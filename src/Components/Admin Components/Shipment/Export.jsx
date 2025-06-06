import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdReport } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { AnimatePresence, motion } from 'framer-motion';

const Export = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showShipmentDrawer, setShowShipmentDrawer] = useState(false);
  const [showVehical, setShowVehical] = useState(false);

  const toggleFilter = () => setShowFilter(!showFilter);
  const toggleShipmentDrawer = () => setShowShipmentDrawer(!showShipmentDrawer);
  const toggleVahicalDrawer = () => setShowVehical(!showVehical);
  return (
    <div className="relative w-full">
      {/* Top bar */}
      <div className="w-fit space-y-3 md:space-y-0 md:flex mt-10 justify-between md:w-full items-center md:gap-2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search in product"
            className="p-2 pl-14 rounded-lg w-[80%]"
          />
          <IoSearch className="absolute top-1/3 left-5 text-[#00000047] " />
        </div>

        <div className="overflow-scroll scrollbar-hide flex md:justify-end gap-1 md:gap-2 w-full md:w-full sm:w-auto">
          <div
            className="flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
          >
            <h1 className=" text-xs md:text-base font-semibold">
              Bulk Update Status
            </h1>
          </div>
          <div>
            <div className="flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white">
              <HiDownload className="h-3 w-3 md:w-5 md:h-5" />
              <h1 className=" text-xs md:text-base font-semibold">Export CSV</h1>
            </div>
          </div>
          <div
            className="flex items-center rounded-md md:rounded-xl p-1 md:p-2 gap-1 md:gap-2 cursor-pointer hover:bg-blue-900 bg-[#0D47A1] text-white"
            onClick={toggleShipmentDrawer}
          >
            <img src="/assets/Plus.png" className="w-2 h-2 md:w-4 md:h-4" />
            <h1 className=" text-xs md:text-base font-semibold">
              New Shipment
            </h1>
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

      
    </div>
  );
};

export default Export;

{
  /* <div className="relative">
            <input type="text" placeholder="Search in product" className="w-1/3 p-2 pl-14 rounded-lg"/>
            <IoSearch className="absolute top-1/3 left-5 text-[#00000047] "/>
        </div> */
}
