import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import ShipmentModal from "./ShipmentModal";
import "../../../index.css";

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
    <div className="h-screen max-w-[300px] md:max-w-full overflow-y-auto md:p-4">
      <div className="text-black scrollbar-hide relative sm:rounded-lg overflow-scroll  max-h-[500px]">
        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 
                        border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:focus:ring-offset-gray-800 focus:ring-2  "
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Shipment ID
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Origin
              </th>
              <th scope="col" className="px-6 py-3">
                Destination
              </th>
              <th scope="col" className="px-6 py-3">
                ETA
              </th>
              <th scope="col" className="px-6 py-3">
                Driver
              </th>
              <th scope="col" className="px-6 py-3">
                Vehical ID
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b  border-gray-200 hover:bg-gray-50 text-black"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600  dark:focus:ring-offset-gray-800 focus:ring-2  "
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">{item.origin}</td>
                <td className="px-6 py-4">{item.destination}</td>
                <td className="px-6 py-4">{item.time}</td>
                <td className="px-6 py-4">{item.driver}</td>
                <td className="px-6 py-4">{item.vehicle}</td>
                <td className="px-6 py-4 flex gap-2">
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
          className="flex mt-5 items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-black  mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing <span className="font-semibold  ">1</span> to{" "}
            <span className="font-semibold  ">6</span>
          </span>
          <ul className="inline-flex  gap-3 -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-2 h-8 ms-0 leading-tight  bg-white border 
                border-[#0D47A1] text-[#0D47A1] rounded-lg hover:text-white hover:bg-[#0D47A1]     
                dark:hover:text-white"
              >
                <FaLessThan />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#0D47A1] border rounded-lg
                border-[#0D47A1]"
              >
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex border items-center justify-center px-2 h-8 leading-tight  bg-white  
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
