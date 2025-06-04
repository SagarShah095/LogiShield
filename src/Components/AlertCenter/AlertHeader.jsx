import React from "react";
import AlertTable from './AlertTable';
import "../../index.css"

const AlertHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("Weather Delay");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  

  const menuItems = [
    { label: "Weather Delay" },
    { label: "Vehical Malfunction" },
    { label: "Customs Hold" },
    { label: "Driver Incident" },
    { label: "Route Blockage" },
  ];

  return (
    <div className="bg-white p-5 h-screen">
      <div className="flex">
        <div
          className={`gap-3 flex py-10 overflow-scroll scrollbar-hide transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100"
              : "scale-95 md:opacity-100 md:scale-100"
          } ${isOpen && "block"} `}
        >
          {menuItems.map((item, idx) => {
            const isActive = activeMenu === item.label;

            return (
              <div key={idx} className="flex justify-center">
                <div
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex justify-center rounded-xl p-3 cursor-pointer w-fit bg-[#F5F8FF] duration-200 ${
                    isActive
                      ? "border-[2px] border-[#0D47A1] text-[#0D47A1]"
                      : "border border-white text-black"
                  }`}
                >
                  <div className="font-nunito flex w-fit gap-3 justify-between items-center">
                    <h1
                      className={`w-[8.9rem] ${
                        isActive ? "text-[#0D47A1]" : "text-black/80"
                      } font-medium md:block `}
                    >
                      {item.label}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <AlertTable />
      </div>
    </div>
  );
};

export default AlertHeader;
