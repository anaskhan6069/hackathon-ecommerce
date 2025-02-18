"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const Herosection = () => {
  return (
    <>
      <main className=" bg-[#F3F0F1] w-full height-[663px] flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className="md:w-[700px] w-[100%] md:px-14 px-[20px]">
          <h1 className="font-extrabold lg:text-[60px] text-[36px] lg:leading-[64px] leading-[34px] md:mb-6 mb-2 md:mt-16 mt-6">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="lg:text-[16px] text-[14px] lg:leading-[22px] leading-[20px] text-black/60 md:mb-8 mb-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="px-[54px] py-[16px] rounded-[62px] bg-black text-white md:w-[210px] w-full h-[52px]">
            Shop Now
          </button>

          <div className="flex flex-wrap md:justify-between justify-center md:mt-6 mt-6">
      <div>
        <p className="lg:text-[40px] text-[24px] font-bold">
          <CountUp start={0} end={200} duration={3} />+
        </p>
        <p className="text-black/60 lg:text-[16px] text-[12px]">
          International brands
        </p>
      </div>

      <div className="px-10 md:px-0">
        <p className="lg:text-[40px] text-[24px] font-bold">
          <CountUp start={0} end={2000} duration={3.5} />+
        </p>
        <p className="text-black/60 lg:text-[16px] text-[12px]">
          High-Quality Products
        </p>
      </div>

      <div>
        <p className="lg:text-[40px] text-[24px] font-bold">
          <CountUp start={0} end={30000} duration={4.2} />+
        </p>
        <p className="text-black/60 lg:text-[16px] text-[12px]">
          Happy Customers
        </p>
      </div>
    </div>
        </div>

        {/* right side */}
        <div className="relative">
          <Image
            src="/hero-image3.png"
            alt="Main Profile"
            width={600}
            height={600}
            className="w-auto h-auto md:mt-10 mt-4 "
          ></Image>

          {/* star */}
          <Image
            src="/star.png"
            alt="star"
            width={200}
            height={200}
            className="lg:w-[106px] md:w-[75px] w-[60px] mt-10 absolute lg:top-[30px] lg:right-[40px] md:top-[30px] md:right-[15px] top-[2px] right-[30px] animate-slow-spin"
          ></Image>

          <Image
            src="/star.png"
            alt="star"
            width={200}
            height={200}
            className="lg:w-[56px] md:w-[45px] w-[40px] absolute lg:top-[270px] lg:right-[85%] md:top-[220px] md:right-[88%] top-[150px] right-[84%] animate-slow-spin"
          ></Image>
        </div>
      </main>
    </>
  );
};

export default Herosection;
