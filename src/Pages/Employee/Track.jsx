import React from "react";
import Emp_Navbar from "../../Components/Employee Components/EmpNavbar/Emp_Navbar";
import TrackOrder from "./../../Components/Employee Components/Track/TrackOrder";
import MainHero from "../../Components/Employee Components/Track/MainHero";
import Emp_Footer from "../../Components/Employee Components/EmpNavbar/Emp_Footer";

const Track = () => {
  return (
    <div>
      <div className="bg-[url('/assets/Bg_img4.png')] h-screen w-full  bg-cover bg-center bg-no-repeat">
        <div>
          <Emp_Navbar />
          <div className="flex justify-center items-center px-16 h-[60vh]">
            <TrackOrder />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] pt-11">
        <div className="px-28">
          <MainHero />
        </div>
      </div>
      <div className="px-28 my-20">
        <hr className="border border-[#00000033]" />
      </div>
      <div className="px-28 my-10">
        <Emp_Footer />
      </div>
    </div>
  );
};

export default Track;
