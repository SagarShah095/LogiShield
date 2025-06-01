import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-white ">
      <div className="container mx-auto">
        <div>
          <img
            src="/assets/Logo.png"
            alt=""
            className="text-center w-full h-36 px-5"
          />
        </div>
        <div className="container mx-auto px-2">
          <div className="flex justify-evenly border border-gray-800/30 rounded-full items-center font-nunito">
            <img src="/assets/img.jpg" alt="" className="h-8 rounded-full" />
            <div>
              <h1 className="text-lg font-semibold">Adin Rose</h1>
              <p className="">adinRoseze@gmai.com</p>
            </div>
            <RiArrowDropDownLine className="h-10 w-fit" />
          </div>
        </div>
        <div className="space-y-3 py-10">
          <div className="flex justify-center ">
            <div className="flex justify-center rounded-xl cursor-pointer hover:bg-blue-900 p-3 bg-[#0D47A1] w-fit duration-200">
              <div className="font-nunito flex w-fit gap-3 justify-start items-center">
                <img src="/assets/Vector.png" alt="" className="w-5 h-fit" />
                <h1 className="text-white font-medium">Dashbord</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex justify-center rounded-xl p-3 cursor-pointer w-fit duration-200">
              <div className="font-nunito flex w-fit gap-3 justify-between items-center">
                <img src="/assets/Bus.png" alt="" className="w-5 h-fit" />
                <h1 className="text-black/80 font-medium">Shipment</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex justify-center rounded-xl p-3 cursor-pointer  w-fit duration-200">
              <div className="font-nunito flex w-fit gap-3 justify-between items-center">
                <img src="/assets/file.png" alt="" className="w-5 h-fit" />
                <h1 className="text-black/80 font-medium">Managment</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex justify-center rounded-xl p-3 cursor-pointer  w-fit duration-200">
              <div className="font-nunito flex w-fit gap-3 justify-between items-center">
                <img src="/assets/alert.png" alt="" className="w-5 h-fit" />
                <h1 className="text-black/80 font-medium">Alert center</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
