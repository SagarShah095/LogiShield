import React from "react";
import Emp_Navbar from "../../Components/Employee Components/EmpNavbar/Emp_Navbar";
import Contact from "../../Components/Employee Components/Contact Us/Contact";
import Emp_Footer from "../../Components/Employee Components/EmpNavbar/Emp_Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[url('/assets/Bg_img5.png')] h-screen w-full  bg-cover bg-center bg-no-repeat">
        <div>
          <Emp_Navbar />
          <div className=" px-28 h-[60vh] mt-14">
            <Contact />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] pt-11">
        <div className="px-28"></div>
      </div>
      <div className="px-28 my-20">
        <hr className="border border-[#00000033]" />
      </div>
      <div className="px-28 my-10">
        <Emp_Footer/>
      </div>
    </div>
  );
};

export default ContactUs;
