import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const HappyCustomer = () => {
  return (
    <div className="mt-6">
      <div>
        <div className="flex justify-between items-center my-14">
          <h1 className="text-3xl font-medium">Happy Customers</h1>
          <div className="flex gap-1">
            <button className="bg-black text-white text-xl rounded-full p-3">
              <FaLessThan />
            </button>
            <button className="bg-black text-white text-xl rounded-full p-3">
              <FaGreaterThan />
            </button>
          </div>
        </div>

        <div className="flex gap-5 my-7">
          <div className="bg-black p-4 space-y-3 rounded-lg text-white">
            <div>
              <p>
                SwiftHaul has completely transformed how we manage our
                deliveries. They’re always on time, professional, and incredibly
                responsive.
              </p>
            </div>
            <div className="flex">
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
            </div>
            <div className="flex gap-3 items-center ">
              <div>
                <img src="/assets/Per1.png" alt="" className="h-12" />
              </div>
              <div>
                <h1 className="font-bold">Alex jhon</h1>
                <p>Ceo of Dior</p>
              </div>
            </div>
          </div>
          <div className="bg-black p-4 space-y-3 rounded-lg text-white">
            <div>
              <p>
                From onboarding to delivery, everything was seamless. Their
                fleet is modern, and their drivers are courteous and skilled.
              </p>
            </div>
            <div className="flex">
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
            </div>
            <div className="flex gap-3 items-center ">
              <div>
                <img src="/assets/Per2.png" alt="" className="h-12" />
              </div>
              <div>
                <h1 className="font-bold">Neel joshi</h1>
                <p>dimond exporter</p>
              </div>
            </div>
          </div>
          <div className="bg-black p-4 space-y-3 rounded-lg text-white">
            <div>
              <p>
                We love their commitment to sustainability—partnering with them
                helps us reduce our carbon footprint without sacrificing speed.
              </p>
            </div>
            <div className="flex">
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
              <img src="/assets/star.png" alt="" />
            </div>
            <div className="flex gap-3 items-center ">
              <div>
                <img src="/assets/Per3.png" alt="" className="h-12" />
              </div>
              <div>
                <h1 className="font-bold">Raj lad</h1>
                <p>bussinessman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
