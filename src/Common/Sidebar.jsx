import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaDropbox } from "react-icons/fa";
import { AiOutlineTruck } from "react-icons/ai";
import { CgFileRemove } from "react-icons/cg";
import { LuOctagonAlert } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeLine } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("Dashboard");
  const [showContent, setShowContent] = React.useState(true);

  const handleOpen = () => {
    setIsOpen((prev) => {
      const next = !prev;

      // Hide content during the transition (2 seconds)
      setShowContent(false);
      setTimeout(() => setShowContent(true), 300);

      return next;
    });
  };

  const handleTrue = activeMenu === "Alert center";

  return (
    <div
      className={`absolute md:relative top-0 left-0 h-screen z-50 bg-white shadow-lg transition-all duration-500 ease-in-out ${
        isOpen ? "w-64" : "w-0 md:w-1/4"
      } flex flex-col justify-between`}
    >
      {/* Menu Icon for Mobile */}
      {!isOpen && (
        <TiThMenu
          className="absolute top-5 left-4 md:hidden text-2xl cursor-pointer"
          onClick={handleOpen}
        />
      )}

      <div className="flex flex-col px-2 pt-4 transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="flex items-center justify-center h-24 transition-all duration-300">
          {isOpen ? (
            <div>
              <div className="absolute top-4 right-4">
                <RiCloseLargeLine className=" w-7 h-full"
                onClick={handleOpen} />
              </div>
              <div>
                <img
                  src="/assets/Logo.png"
                  alt="logo"
                  className="w-full h-28 cursor-pointer px-5"
                  
                />
              </div>
            </div>
          ) : (
            <img
              src="/assets/Logo.png"
              alt="logo"
              className="hidden md:block w-full h-28 px-5"
            />
          )}
        </div>

        {/* Profile */}
        <div
          className={`flex items-center border md:opacity-100 border-gray-300 rounded-full px-3 py-2 gap-3 mx-auto md:mx-2 transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 "
          }`}
        >
          <img
            src="/assets/img.jpg"
            className="w-10 h-10 rounded-full object-cover"
            alt="profile"
          />

          <div className="transition-opacity duration-300 ease-in">
            <h1 className="font-semibold">Adin Rose</h1>
            <p className="text-xs text-gray-600">adinRoseze@gmai.com</p>
          </div>

          <RiArrowDropDownLine className="text-2xl hidden md:block" />
        </div>

        {/* Menu */}
        <div
          className={`mt-10 space-y-3 transition-all duration-300 ease-in-out ${
            isOpen && showContent ? "block" : "hidden md:block"
          }`}
        >
          {[
            { icon: <FaDropbox />, label: "Dashboard", to: "/admin-dashboard" },
            { icon: <AiOutlineTruck />, label: "Shipment", to: "/shipment" },
            { icon: <CgFileRemove />, label: "Managment", to: "/management" },
            {
              icon: <LuOctagonAlert />,
              label: "Alert center",
              to: "/alert-center",
            },
          ].map((item, idx) => (
            <NavLink
              to={item.to}
              key={idx}
              className={({ isActive }) =>
                `flex items-center gap-3 transition-opacity py-2 px-4 rounded-xl duration-300 ease-in ${
                  isActive
                    ? "bg-[#0D47A1] text-white"
                    : "hover:bg-gray-100 text-gray-800"
                } ${isOpen ? "justify-start" : "justify-center"}`
              }
              onClick={() => setActiveMenu(item.label)}
            >
              <span className="text-xl transition-all duration-500 ease-in-out">
                {item.icon}
              </span>
              {showContent && (
                <span className="font-medium transition-all duration-500 ease-in-out">
                  {item.label}
                </span>
              )}
              {/* <span className="font-medium hidden md:block transition-all duration-500 ease-in-out">
                  {item.label}
                </span> */}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Alert Center Text */}
      {handleTrue && (
        <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer transition-all duration-300">
          <img src="/assets/exit.png" alt="" className="w-5 h-5" />
          {isOpen && (
            <span className="text-[#C72424] font-medium">Alert center</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
