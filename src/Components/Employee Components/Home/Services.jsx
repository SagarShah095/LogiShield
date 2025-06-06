import React from "react";

const Services = () => {
  const data = [
    {
      img: "/assets/Car.png",
      Title: "Local Moving",
      desc: "Fast, secure, and affordable local moving—making your neighborhood move completely stress-free.",
    },
    {
      img: "/assets/Car.png",
      Title: "International Moving",
      desc: "From packing to customs clearance—reliable international moving made simple and secure.",
    },
    {
      img: "/assets/Car.png",
      Title: "Corporate Moving",
      desc: "Professional corporate moving services ensuring minimal downtime, secure handling, and efficient relocation for businesses.",
    },
    {
      img: "/assets/Car.png",
      Title: "Long Distance Moving",
      desc: "Safe, efficient long-distance moves—trusted service that gets your belongings there, no matter the distance.",
    },
    {
      img: "/assets/Car.png",
      Title: "Instant Courier",
      desc: "Fast and reliable instant courier service ensuring your urgent packages are delivered safely and on time.",
    },
    {
      img: "/assets/Car.png",
      Title: "Direct Delivery",
      desc: "Efficient direct delivery solutions designed to minimize transit time and maximize package security.",
    },
    {
      img: "/assets/Car.png",
      Title: "Track Monitoring",
      desc: "Real-time track monitoring keeps you updated with live location and status of your shipments.",
    },
    {
      img: "/assets/Car.png",
      Title: "Easy Payment",
      desc: "Simple and secure payment options designed for hassle-free transactions and fast checkout experiences.",
    },
    {
      img: "/assets/Car.png",
      Title: "Data App Management",
      desc: "Streamlined data app management for accurate insights, smooth operations, and enhanced user experience.",
    },
  ];

  return (
    <div className="mt-28">
      <div className="">
        <div>
          <h1 className="text-[#0D47A1] font-medium">WHAT’S INCLUDED</h1>
        </div>
        <div className="flex justify-between mt-2">
          <h1 className="text-4xl font-semibold w-[30%]">
            The best services we provide
          </h1>
          <p className="text-[#0000008C] w-[43%]">
            We leverage advanced logistics technology—including real-time
            tracking, route optimization, and smart warehousing—to ensure your
            deliveries are faster, safer, and more reliable. Every order is
            handled with precision, secured with cutting-edge systems, and
            monitored from dispatch to doorstep. Trust us to deliver efficiency
            with complete transparency and care.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-3 w-full gap-6 justify-between mt-7 ">
            {data.map((item, index) => (
              <div key={index} className="">
                <div>
                  <div className="bg-[#0D47A1] w-fit p-5 rounded-md">
                    <img src={item.img} alt={item.Title} className="w-9" />
                  </div>
                  <div className="mt-3">
                    <h1 className="text-xl font-semibold">{item.Title}</h1>
                    <p className=" text-black]">{item.desc}</p>
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

export default Services;
