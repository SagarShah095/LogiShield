import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="uppercase text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="flex gap-10 justify-between">
        <div className="bg-white w-full p-4 mt-5 space-y-2 rounded-lg">
          <h1 className="font-bold ">GET IN TOUCH</h1>
          <hr className="w-full border border-[#00000066]/20" />
          <div className="flex gap-3">
            <div className="w-full">
              <h1 className="font-semibold">NAME</h1>
              <input
                type="text"
                className="bg-[#F6F6F6] p-3 rounded-lg w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <h1 className="font-semibold">PHONE NUMBER</h1>
              <input
                type="text"
                className="bg-[#F6F6F6] p-3 rounded-lg w-full"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="w-[49%]">
            <h1 className="font-semibold">EMAIL</h1>
            <input
              type="text"
              className="bg-[#F6F6F6] p-3 rounded-lg w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold">YOUR MESSAGE</h1>
            <textarea
              type="text"
              rows={5}
              className="bg-[#F6F6F6] p-3 rounded-lg w-full"
              placeholder=""
            />
          </div>
          <div>
            <button className="text-white rounded-lg bg-[#0D47A1] py-3 px-20">
              SEND MESSAGE
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="bg-white p-4 mt-5 flex flex-col gap-5 rounded-lg">
            <div>
              <h1 className="font-bold ">GET IN TOUCH</h1>
              <hr className="w-full border mt-3 border-[#00000066]/20" />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <img src="/assets/Phone.png" alt="" />
                </div>
                <div>
                  <h1 className="font-medium">PHONE</h1>
                  <p className="text-[#000000CC]">84656 52253</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img src="/assets/location.png" alt="" />
                </div>
                <div>
                  <h1 className="font-medium">ADDRESS </h1>
                  <p className="text-[#000000CC]">
                    695- Shree ram com, Vip circle
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src="/assets/Email.png" alt="" />
              </div>
              <div>
                <h1 className="font-medium">EMAIL</h1>
                <p className="text-[#000000CC]">logishild@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mt-7 space-y-16 rounded-lg">
            <div>
              <h1 className="font-bold ">BUSINESS HOURS</h1>
              <hr className="w-full border mt-3 border-[#00000066]/20 " />
            </div>
            <div className="flex gap-10">
              <div>
                <h1 className="font-semibold text-sm">MONDAY - FRIDAY</h1>
                <p className="text-[#000000CC]">9.00AM - 8.00 PM</p>
              </div>
              <div>
                <h1 className="font-semibold text-sm">SATURDAY</h1>
                <p className="text-[#000000CC]">9.00AM - 6.00 PM</p>
              </div>
              <div>
                <h1 className="font-semibold text-sm">SUNDAY</h1>
                <p className="text-[#000000CC]">9.00AM - 5.00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
