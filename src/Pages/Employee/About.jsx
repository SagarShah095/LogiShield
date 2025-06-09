import React from "react";
import Emp_Navbar from "../../Components/Employee Components/EmpNavbar/Emp_Navbar";
import Delivery from "../../Components/Employee Components/About/Delivery";
import Hero from "../../Components/Employee Components/About/Hero";
import Journey from "../../Components/Employee Components/About/Journey";
import HappyCustomer from "../../Components/Employee Components/About/HappyCustomer";
import Emp_Footer from "../../Components/Employee Components/EmpNavbar/Emp_Footer";

const About = () => {
  return (
    <div>
      <div className="bg-[url('/assets/bg_img3.png')] h-[75%] w-full  bg-cover bg-center bg-no-repeat">
        <div>
          <Emp_Navbar />
          <div className="flex justify-center items-center px-16 h-[60vh]">
            <Delivery />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] pt-11">
        <div className="px-28">
          <Hero />
          <Journey />
          <HappyCustomer />
        </div>
      </div>
      <div className="px-28 mt-20">
        <hr className="border border-[#00000033]"/>
      </div>
      <div className="px-28">
        <Emp_Footer />
      </div>
    </div>
  );
};

export default About;
