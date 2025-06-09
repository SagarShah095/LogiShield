import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Emp_Navbar = () => {
  const [select, setSelect] = useState("Home");

  return (
    <div className="w-full">
      <div className=" px-14 mx-auto w-full flex justify-center pt-10">
        <div className="flex items-center w-[90%] backdrop-blur-[3px] justify-center bg-[#00000033] rounded-lg">
          <div>
            <img src="/assets/logo_w.png" alt="" className="w-36" />
          </div>
          <div className="flex justify-between w-1/2 mx-36 text-lg">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Track Shipment", path: "/track-shipment" },
              { label: "Contact Us", path: "/contact" },
            ].map((item, index) => (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-white font-medium transition-colors duration-200 ${
                      isActive ? "text-white font-bold" : "text-[#FFFFFF80]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emp_Navbar;
