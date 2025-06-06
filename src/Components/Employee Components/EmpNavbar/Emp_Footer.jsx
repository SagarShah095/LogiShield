import React from "react";
import { TbWorld } from "react-icons/tb";

const Emp_Footer = () => {
  return (
    <div className="w-full my-10">
      <div className="mt-16 w-full  justify-between flex grid-cols-4">
        <div className="w-fit justify-between">
          <div>
            <h1 className="text-lg text-[#0D47A1] font-medium">OUR COMPANY</h1>
          </div>
          <div className="mt-4 space-y-1 font-semibold">
            <h1>Abour Logishild</h1>
            <h1>Investor Relations</h1>
            <h1>Careers</h1>
            <h1>International Holiday Schedule</h1>
            <h1>Conditions of Carriage</h1>
            <h1>Binding Corporate Rules</h1>
            <h1>MEISA Newsroom</h1>
          </div>
        </div>
        <div className="w-fit">
          <div>
            <h1 className="text-lg text-[#0D47A1] font-medium">NEW CUSTOMER</h1>
          </div>
          <div className="mt-4 space-y-1 font-semibold">
            <h1>Open an Account</h1>
            <h1>Register for a Login</h1>
            <h1>New Customer Center</h1>
          </div>
          <hr className="border border-[#000000]/40 my-4" />
          <div>
            <h1 className="text-lg text-[#0D47A1] font-medium">
              CUSTOMER SUPPORT
            </h1>
            <h1 className=" font-semibold">Contact Logishild</h1>
          </div>
        </div>
        <div className="w-fit">
          <div>
            <h1 className="text-lg text-[#0D47A1] font-medium">
              MORE FORM LOGISHILD
            </h1>
          </div>
          <div className="mt-4 space-y-1 font-semibold">
            <h1>Signup for eNews</h1>
            <h1>Logishild Developer Portal</h1>
            <h1>Ful Surcharge</h1>
            <h1>Rates & Surcharge</h1>
            <h1>Resources</h1>
            <h1>Logishild Location</h1>
            <h1>Logishild Business insights</h1>
          </div>
        </div>
        <div className="w-fit">
          <div>
            <h1 className="text-lg text-[#0D47A1] font-medium">LANGUAGE</h1>
          </div>
          <div className="flex items-center mt-4 gap-1">
            <TbWorld />
            <h1 className="font-medium">INDIA</h1>
          </div>
          <div className="mt-2">
            <select
              name=""
              className="max-w-28 w-full p-3 text-[#00000080] border border-[#00000080]"
              id=""
            >
              <option value="">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 gap-8">
        <div>
          <h1 className="font-medium uppercase text-[#0D47A1]">FOLLOW FEDEX</h1>
        </div>
        <div className="flex items-center gap-2">
          <img src="/assets/Facebook.png" alt="" className="w-10" />
          <img src="/assets/Instagram.png" alt="" className="w-10" />
          <img src="/assets/Youtube.png" alt="" className="w-10" />
          <img src="/assets/linkedin.png" alt="" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default Emp_Footer;
