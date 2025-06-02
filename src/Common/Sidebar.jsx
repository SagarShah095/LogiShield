import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaDropbox } from "react-icons/fa";
import { AiOutlineTruck } from "react-icons/ai";
import { CgFileRemove } from "react-icons/cg";
import { LuOctagonAlert } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("Dashboard");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "absolute left-0 top-0 z-50 w-3/4" : "w-[20%] md:w-1/4"
      } h-screen bg-white transition-all duration-300 ease-in-out `}
    >
      <div className="container mx-auto">
        {/* Logo Section */}
        <div>
          <img
            src="/assets/Logo.png"
            alt="logo"
            className="hidden md:block text-center w-full h-36 px-5"
          />
          {/* Desktop Logo */}
          {isOpen ? (
            <img
              src="/assets/Logo.png"
              alt="logo"
              className=" md:block text-center w-full h-36 px-5"
              onClick={handleOpen}
            />
          ) : (
            // Mobile Logo (Clickable)
            <img
              src="/assets/Mobile_s_logo.png"
              alt="mobile logo"
              className=" md:hidden text-center w-full h-7 my-10 px-5 cursor-pointer"
              onClick={handleOpen}
            />
          )}
        </div>

        {/* Profile Section */}
        <div className="container flex justify-center mx-auto px-2">
          <div className="flex justify-center md:justify-evenly w-fit p-1 md:w-full border border-gray-800/30 rounded-full md:items-center font-nunito">
            <img
              src="/assets/img.jpg"
              alt=""
              className="h-8 md:rounded-3xl rounded-full lg:rounded-full"
            />
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:block transition-all duration-300 ease-in-out`}
            >
              <h1 className="lg:text-lg font-semibold">Adin Rose</h1>
              <p className="xl:text-base sm:text-sm">adinRoseze@gmai.com</p>
            </div>
            <RiArrowDropDownLine className="h-10 md:block hidden w-fit" />
          </div>
        </div>

        {/* Menu Section */}
        <div
          className={`space-y-3 py-10 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100"
              : "scale-95 md:opacity-100 md:scale-100"
          } ${isOpen && "block"} md:block`}
        >
          {/* Dashboard */}

          {/* Other Menu Items */}
          {[
            { icon: <FaDropbox />, label: "Dashboard", to: "/" },
            { icon: <AiOutlineTruck />, label: "Shipment", to: "/shipment" },
            { icon: <CgFileRemove />, label: "Managment", to: "/management" },
            {
              icon: <LuOctagonAlert />,
              label: "Alert center",
              to: "/alert-center",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-center">
              <NavLink
                to={item.to}
                onClick={() => setActiveMenu(item.label)}
                className={`flex justify-center rounded-xl p-3 cursor-pointer w-fit duration-200 ${
                  activeMenu === item.label
                    ? "bg-[#0D47A1] text-white"
                    : "hover:bg-gray-200/70"
                }`}
              >
                <div className="font-nunito flex w-fit gap-3 justify-between items-center">
                  <span>{item.icon}</span>
                  <h1
                    className={`${isOpen ? "block" : "hidden"} ${
                      activeMenu === item.label ? "text-white" : "text-black/80"
                    } font-medium md:block`}
                  >
                    {item.label}
                  </h1>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
