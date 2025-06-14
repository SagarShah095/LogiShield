import React from "react";
import Emp_Navbar from "../../Components/Employee Components/EmpNavbar/Emp_Navbar";
import Order from "../../Components/Employee Components/Home/Order";
import Customer from "../../Components/Employee Components/Home/Customer";
import Business from "../../Components/Employee Components/Home/Business";
import Management from "../../Components/Employee Components/Home/Management";
import Services from "../../Components/Employee Components/Home/Services";
import News from "../../Components/Employee Components/Home/News";
import Questions from "../../Components/Employee Components/Home/Questions";
import HeroSection from "./../../Components/Employee Components/Services/HeroSection";
import Offer from "../../Components/Employee Components/Services/Offer";
import Emp_Footer from '../../Components/Employee Components/EmpNavbar/Emp_Footer';

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/assets/Bg_img2.png')] h-screen w-full  bg-cover bg-center bg-no-repeat">
        <div>
          <Emp_Navbar />
          <div className="flex justify-center items-center px-16 h-[60vh]">
            <HeroSection />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] pt-11">
        <Offer />
        <div className="px-28">
          <Questions />
        </div>
      </div>
      <div className="px-28">
        <Emp_Footer />
      </div>
    </div>
  );
};

export default Home;
