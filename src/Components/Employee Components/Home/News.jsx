import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const News = () => {
  const newData = [
    {
      img: "/assets/img1.png",
      date: "21 Dec 2024",
      title: "British Airways Boosts India Cargo",
      desc: "British Airways plans increased routes and cargo services in India, leveraging the upcoming India-UK Free Trade Agreement",
    },
    {
      img: "/assets/img2.png",
      date: "25 Mar 2025",
      title: "Panattoni Builds Tamil Nadu Park",
      desc: "Invests ₹210 crore in Hosur logistics park to enhance industrial and supply chain infrastructure.",
    },
    {
      img: "/assets/img3.png",
      date: "14 April 2025",
      title: "Portless Raises $18M Amid Demand Surge",
      desc: "Portless secures $18M funding as brands seek fast, duty-paid deliveries post de minimis repeal.",
    },
  ];
  return (
    <div className="mt-14">
      <div className="">
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl font-medium">Our Latest News</h1>
          <div className="flex text-[#0D47A1] cursor-pointer font-medium items-center gap-2">
            <h1>View All</h1>
            <FaGreaterThan />
          </div>
        </div>

        <div className=" grid w-full justify-between gap-20 grid-cols-3">
          {newData.map((item, index) => (
            <div key={index} className="space-y-3 w-full gap-4 mt-6">
              <img src={item.img} alt={item.title} className="w-full" />
              <div className="w-full space-y-3">
                <p className="text-sm text-[#0D47A1] font-medium mt-1">
                  {item.date}
                </p>
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
