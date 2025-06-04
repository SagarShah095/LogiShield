import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MapPin } from "lucide-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../../index.css"; // Ensure you have the correct path to your CSS file

const data = [
  { day: "Sunday", red: 500, blue: 2000 },
  { day: "Monday", red: 1200, blue: 1900 },
  { day: "Tuesday", red: 1300, blue: 3100 },
  { day: "Wednesday", red: 1100, blue: 1000 },
  { day: "Thursday", red: 700, blue: 1500 },
  { day: "Friday", red: 900, blue: 1400 },
  { day: "Saturday", red: 800, blue: 1200 },
];

const Chart = () => {
  return (
    <div className="mt-3 justify-between p-4 flex flex-col lg:flex-row gap-4">
      {/* Profit Bar Chart */}
      <div className="w-full max-w-[18rem] md:max-w-[50%] bg-white scrollbar-hide overflow-x-scroll  rounded-2xl p-4">
        <div className="min-w-[30rem] md:min-w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Profit</h2>
            <button className="bg-[#0D47A1] hover:bg-blue-900 duration-200 text-white px-4 flex items-center justify-center py-1 rounded-md">
              Week
              <RiArrowDropDownLine className="h-5 w-fit" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={450} className={"h-1/4"}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="red" fill="#ff2e2e" />
              <Bar className="rounded-t-fu" dataKey="blue" fill="#0045ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-1 bg-white rounded-2xl p-4 flex flex-col items-center">
        <div className="w-full h-[100%] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.944023956263!2d72.87765571488334!3d21.11844758594971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1be2c1917f%3A0x4e46d5d926c21e3c!2sHotel%20Moonlight!5e0!3m2!1sen!2sin!4v1627384340025!5m2!1sen!2sin"
            width="100%"
            height="95%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
        <div className="flex w-full justify-between mt-2 md:mt-0 items-center md:gap-4  md:font-semibold md:text-sm">
          <div className="flex md:gap-2 items-center">
            <div className="flex text-xs font-medium   gap-2 items-center ">
              <span>
                <img
                  src="/assets/Green.png"
                  alt=""
                  className="h-5 w-fit md:block hidden"
                />
              </span>
              On-time
            </div>
            <div className="flex text-xs font-medium  items-center gap-2 ">
              <span>
                {" "}
                <img
                  src="/assets/Yellow.png"
                  alt=""
                  className="h-5 w-fit md:block hidden"
                />
              </span>
              In-transit
            </div>
            <div className="flex text-xs font-medium  items-center gap-2 ">
              <span>
                <img
                  src="/assets/Red.png"
                  alt=""
                  className="h-5 w-fit md:block hidden"
                />
              </span>
              Delayed
            </div>
          </div>

          <button className=" bg-[#0D47A1] hover:bg-blue-900 duration-200 text-white text-xs p-1  md:p-3 rounded-md">
            View map
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
