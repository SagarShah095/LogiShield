import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-2xl font-medium">What We Do</h1>
          <p className="font-[500] mt-2">
            At Logishild , we simplify the complex world of logistics. We offer
            end-to-end supply chain solutions — from freight transportation and
            warehousing to last-mile delivery and customs clearance. With a
            technology-first approach and a commitment to reliability, we move
            goods faster, safer, and smarter across the globe. Our services are
            tailored for manufacturers, retailers, and e-commerce brands who
            demand precision, visibility, and efficiency. Whether it’s a single
            package or a global shipment, we ensure it arrives on time, every
            time.
          </p>
        </div>
        <div className="flex gap-5 items-center mt-10">
          <div className="">
            <img
              src="/assets/mimg1.png"
              alt=""
              className="w-72 rounded-l-2xl"
            />
          </div>
          <div className="w-[50%] space-y-4">
            <h1 className="text-3xl font-medium">Modern & Tech-Focused</h1>
            <p className="">
              To deliver smart, secure, and scalable logistics solutions that
              empower businesses to move faster and operate globally.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-5 items-center mt-10">
          <div className="w-[50%] space-y-4">
            <h1 className="text-3xl font-medium">Customer-Centric</h1>
            <p className="">
              To simplify shipping for our clients by offering reliable,
              transparent, and personalized logistics services that exceed
              expectations.
            </p>
          </div>
          <div className="">
            <img
              src="/assets/mimg2.png"
              alt=""
              className="w-72 rounded-r-2xl"
            />
          </div>
        </div>

        <div className="flex gap-5 items-center mt-10">
          <div className="">
            <img
              src="/assets/mimg3.png"
              alt=""
              className="w-72 rounded-l-2xl"
            />
          </div>
          <div className="w-[50%] space-y-4">
            <h1 className="text-3xl font-medium">Efficiency-Driven</h1>
            <p className="">
              To provide efficient and timely freight solutions that reduce
              costs, increase visibility, and drive business growth.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-5 items-center mt-10">
          <div className="w-[50%] space-y-4">
            <h1 className="text-3xl font-medium">Trust & Reliability Focus</h1>
            <p className="">
              To be the most trusted logistics partner by delivering every
              shipment with precision, care, and consistency.
            </p>
          </div>
          <div className="">
            <img
              src="/assets/mimg4.png"
              alt=""
              className="w-72 rounded-r-2xl"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center mt-10">
          <div className="">
            <img
              src="/assets/mimg5.png"
              alt=""
              className="w-72 rounded-l-2xl"
            />
          </div>
          <div className="w-[50%] space-y-4">
            <h1 className="text-3xl font-medium">Green & Global</h1>
            <p className="">
              To revolutionize global logistics through innovation and
              sustainability, one shipment at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
