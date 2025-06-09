import React from "react";
import { data } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";

const Offer = () => {
  const data = [
    {
      img: "/assets/I1.png",
      title: "Freight Transportation",
      desc: "We offer fast and secure freight transport across road, rail, air, and sea. Whether it’s full-truckload (FTL)",
      btn: "More Details",
    },
    {
      img: "/assets/I2.png",
      title: "Warehousing & Fulfillment",
      desc: "Smart, tech-enabled storage and fulfillment centers with live inventory tracking.",
      btn: "More Details",
    },
    {
      img: "/assets/I3.png",
      title: "Last-Mile Delivery",
      desc: "Fast and trackable delivery to the customer’s doorstep with real-time updates.",
      btn: "More Details",
    },
    {
      img: "/assets/I4.png",
      title: "Supply Chain Management",
      desc: "Integrated systems to manage, optimize, and track your full logistics network.",
      btn: "More Details",
    },
    {
      img: "/assets/I5.png",
      title: "Customs Clearance",
      desc: "Complete customs handling with proper documentation and global compliance.",
      btn: "More Details",
    },
    {
      img: "/assets/I6.png",
      title: "Reverse Logistics",
      desc: "Efficient handling of product returns, recalls, or recycling with minimal loss.",
      btn: "More Details",
    },
    {
      img: "/assets/I7.png",
      title: "Cold Chain Logistics",
      desc: "Temperature-controlled logistics for sensitive goods like food and medicine.",
      btn: "More Details",
    },
    {
      img: "/assets/I8.png",
      title: "E-commerce Logistics",
      desc: "Integrated logistics for online brands with real-time delivery and COD handling.",
      btn: "More Details",
    },
  ];

  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-semibold text-center">
            Logistics Services We Offer
          </h1>
          <div className="flex justify-center text-center items-center">
            <p className=" text-lg mt-3 w-[75%] font-semibold">
              We don’t just move goods — we move businesses. Explore our full
              range of logistics services built to simplify your supply chain.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 px-28 mt-8 gap-5 h-full">
            {data.map((item, index) => (
              <div key={index} className=" bg-white p-5 space-y-4 rounded-lg">
                <div className="">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-14 object-cover"
                  />
                </div>
                <div className="space-y-5 flex flex-col justify-between h-[68%]">
                  <div>
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                    <p className="text-[#00000080]">{item.desc}</p>
                  </div>
                  <div className="flex items-end ">
                    <button className=" flex items-center gap-1">
                      {item.btn}{" "}
                      <TbMathGreater className="text-sm text-[#00000080]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
