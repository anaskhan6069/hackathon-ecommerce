"use client";

import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/calvin-klein-logo.svg",
  },
];

const Brands = () => {
  return (
    <div className="bg-black max-w-screen-2xl mx-auto">
      <div className="mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-12">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={26}
            width={116}
            layout="intrinsic"
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11 px-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
