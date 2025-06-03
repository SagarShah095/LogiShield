import React from "react";
import Table1 from "./Table1";
import Table2 from './Table2';

const MultipleBtn = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("Vehical");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleActive = activeMenu === "Vehical" ? true : false;
  console.log(handleActive," active menu");

  const menuItems = [
    { label: "Vehical" },
    { label: "Driver" },
    { label: "Maintenance" },
  ];

  return (
    <div className="bg-white p-5 h-screen">
      <div className="flex">
        <div
          className={`gap-3 flex py-10 transition-all duration-300 ease-in-out ${
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
                      className={`${isOpen ? "block" : "hidden"} ${
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
      {
        handleActive ? <Table1 /> : <Table2 />
      }
    </div>
  );
};

export default MultipleBtn;
