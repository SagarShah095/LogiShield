import React from "react";
import Emp_Navbar from "../../Components/Employee Components/EmpNavbar/Emp_Navbar";
import HeroSection from "../../Components/Employee Components/Services/HeroSection";

const Services = () => {
  return (
    <div>
      <div className="bg-[url('/assets/Bg_img2.png')] h-screen w-full  bg-cover bg-center bg-no-repeat ">
        <div>
          <Emp_Navbar />
        </div>
        <div className="px-14">
            <HeroSection />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Services;
