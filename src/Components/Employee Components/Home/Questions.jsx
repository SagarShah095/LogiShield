import React from "react";

const Questions = () => {
  return (
    <div className="my-16">
      <div className="flex justify-between gap-44">
        <div className="w-[40%]">
          <h1 className="text-3xl font-semibold">
            Frequently Asked Questions.
          </h1>
          <h1 className="text-[#000000CC]">
            Find clear, quick answers to common questions about our delivery,
            tracking, payments, and logistics services.
          </h1>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4 cursor-pointer w-fit">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">
              How Quickly can i Start using your solutions?
            </h1>
          </div>
          <p>
            Our solutions are easy to improvement and can be up and running in
            just a few days. depending on your fkeet size and system integration
            needs.
          </p>
          <div className="flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">
              Which types of vehicales are compatible with your system?
            </h1>
          </div>
          <div className="flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">
              Can I integrate your systens with existing hardware?
            </h1>
          </div>
          <div className="flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">
              How can i acccess fleet data?
            </h1>
          </div>
          <div className="flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">
              Do you provide technical support?
            </h1>
          </div>
          <div className="flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">
              How do your dolutions help reduce costes?
            </h1>
          </div>
          <div className="flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">Are my data secure?</h1>
          </div>
          <div className="flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-2xl font-semibold">+</span>
            <h1 className="text-lg font-medium">Do you offer a free trial?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
