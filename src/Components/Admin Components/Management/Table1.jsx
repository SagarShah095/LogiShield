import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import ShipmentModal from "./../Shipment/ShipmentModal";
import { FiAlertTriangle } from "react-icons/fi";

const Table1 = () => {
  const tableData = [
    {
      title: "TRK128",
      status: "Active",
      origin: "Box Tuck",
      destination: "2 Hr ago",
      time: "EU-West",
      driver: "92%",
      vehicle: `2`,
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "TRK128",
      status: "Active",
      origin: "Box Tuck",
      destination: "2 Hr ago",
      time: "EU-West",
      driver: "92%",
      vehicle: `2 `,
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "TRK128",
      status: "Active",
      origin: "Box Tuck",
      destination: "2 Hr ago",
      time: "EU-West",
      driver: "92%",
      vehicle: `2 `,
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "TRK128",
      status: "Active",
      origin: "Box Tuck",
      destination: "2 Hr ago",
      time: "EU-West",
      driver: "92%",
      vehicle: `2 `,
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "TRK128",
      status: "Active",
      origin: "Box Tuck",
      destination: "2 Hr ago",
      time: "EU-West",
      driver: "92%",
      vehicle: `2 `,
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "TRK128",
      status: "Active",
      origin: "Box Tuck",
      destination: "2 Hr ago",
      time: "EU-West",
      driver: "92%",
      vehicle: `2 `,
      btn1: <MdOutlineRemoveRedEye />,
      btn2: <CiMenuKebab />,
    },
    {
      title: "TRK128",
      status: "Active",
      origin: "Box Tuck",
      destination: "2 Hr ago",
      time: "EU-West",
      driver: "92%",
      vehicle: `2 `,
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
      <h1 className="text-xl font-bold mb-4">Vehical</h1>
      <div className="text-black relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-[#F5F8FF] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Vehical ID
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Last Used
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Health Score
              </th>
              <th scope="col" className="px-6 py-3">
                Alerts
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
                className="bg-white border-b w-full border-gray-200 hover:bg-gray-50 text-black"
              >
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
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {item.vehicle}
                    <span>
                      <FiAlertTriangle />
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => handleViewClick(item)}>
                      {item.btn1}
                    </button>
                    <button onClick={() => handleViewClick(item)}>
                      {item.btn2}
                    </button>
                  </div>
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

export default Table1;
