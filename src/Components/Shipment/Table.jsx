import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import ShipmentModal from "./ShipmentModal";

const Table = () => {
  const tableData = [
    {
      title: "#SH10298",
      status: "In Transit",
      origin: "New York",
      destination: "Toronto, Canada",
      time: "11:30 AM",
      driver: "John Carter",
      vehicle: "TRK392",
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "#SH10298",
      status: "In Transit",
      origin: "New York",
      destination: "Toronto, Canada",
      time: "11:30 AM",
      driver: "John Carter",
      vehicle: "TRK392",
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "#SH10298",
      status: "In Transit",
      origin: "New York",
      destination: "Toronto, Canada",
      time: "11:30 AM",
      driver: "John Carter",
      vehicle: "TRK392",
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "#SH10298",
      status: "In Transit",
      origin: "New York",
      destination: "Toronto, Canada",
      time: "11:30 AM",
      driver: "John Carter",
      vehicle: "TRK392",
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "#SH10298",
      status: "In Transit",
      origin: "New York",
      destination: "Toronto, Canada",
      time: "11:30 AM",
      driver: "John Carter",
      vehicle: "TRK392",
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
  ];

  const [selectedShipment, setSelectedShipment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = (item) => {
    setSelectedShipment(item);
    setIsModalOpen(true);
  };
  return (
    <div className="h-screen">
      <div class="text-black relative overflow-x-auto  sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 
                        border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:focus:ring-offset-gray-800 focus:ring-2  "
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Shipment ID
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Origin
              </th>
              <th scope="col" class="px-6 py-3">
                Destination
              </th>
              <th scope="col" class="px-6 py-3">
                ETA
              </th>
              <th scope="col" class="px-6 py-3">
                Driver
              </th>
              <th scope="col" class="px-6 py-3">
                Vehical ID
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                class="bg-white border-b  border-gray-200 hover:bg-gray-50 text-black"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600  dark:focus:ring-offset-gray-800 focus:ring-2  "
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {item.title}
                </th>
                <td class="px-6 py-4">{item.status}</td>
                <td class="px-6 py-4">{item.origin}</td>
                <td class="px-6 py-4">{item.destination}</td>
                <td class="px-6 py-4">{item.time}</td>
                <td class="px-6 py-4">{item.driver}</td>
                <td class="px-6 py-4">{item.vehicle}</td>
                <td class="px-6 py-4 flex gap-2">
                  <button onClick={() => handleViewClick(item)}>
                    {item.btn1}
                  </button>
                  <button>{item.btn2}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          class="flex mt-5 items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-black  mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing <span class="font-semibold  ">1</span> to{" "}
            <span class="font-semibold  ">6</span>
          </span>
          <ul class="inline-flex  gap-3 -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-2 h-8 ms-0 leading-tight  bg-white border 
                border-[#0D47A1] text-[#0D47A1] rounded-lg hover:text-white hover:bg-[#0D47A1]     
                dark:hover:text-white"
              >
                <FaLessThan />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#0D47A1] border rounded-lg
                border-[#0D47A1]"
              >
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex border items-center justify-center px-2 h-8 leading-tight  bg-white  
                border-[#0D47A1] text-[#0D47A1] rounded-lg   hover:text-white hover:bg-[#0D47A1]  
                dark:hover:text-white"
              >
                <FaGreaterThan />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ShipmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          shipment={selectedShipment}
          className=""
        />
      </div>
    </div>
  );
};

export default Table;
