import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Filters_up } from "@/components/filters-up";


interface Iproduct {
  id: number;
  title: string;
  price: string;
  ratings: string;
  old_price?: string;
  price_percentage?: string;
  img_url: string;
}

const product: Iproduct[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: "$120",
    ratings: "4.5/5",
    img_url: "/products/product1.png",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: "$240",
    ratings: "3.5/5",
    old_price: "$260",
    price_percentage: "-20%",
    img_url: "/products/product2.png",
  },
  {
    id: 3,
    title: "Checked Shirt",
    price: "$180",
    ratings: "4.5/5",
    img_url: "/products/product3.png",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: "$130",
    ratings: "4.5/5",
    old_price: "$160",
    price_percentage: "-30%",
    img_url: "/products/product4.png",
  },
  {
    id: 5,
    title: "Checked Shirt",
    price: "$180",
    ratings: "4.5/5",
    img_url: "/products/product3.png",
  },
  {
    id: 6,
    title: "Sleeve Striped T-shirt",
    price: "$130",
    ratings: "4.5/5",
    old_price: "$160",
    price_percentage: "-30%",
    img_url: "/products/product4.png",
  },
  {
    id: 7,
    title: "Checked Shirt",
    price: "$180",
    ratings: "4.5/5",
    img_url: "/products/product3.png",
  },
  {
    id: 8,
    title: "Sleeve Striped T-shirt",
    price: "$130",
    ratings: "4.5/5",
    old_price: "$160",
    price_percentage: "-30%",
    img_url: "/products/product4.png",
  },
  {
    id: 9,
    title: "Checked Shirt",
    price: "$180",
    ratings: "4.5/5",
    img_url: "/products/product3.png",
  },
  
];

export default function Casual_Shirts() {
  return (
    <>
      <div className="w-full sm:w-[96%] h-[full] max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-5 md:mb-0 px-5 md:px-0">
            <h1 className="text-[30px] md:text-[32px] md:text-left font-extrabold text-center">
                Casual
            </h1>
            <div className="block md:hidden">
                <Filters_up/>
            </div>
        </div>
        

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-9 mt-2 px-4 md:px-0">
          {product.map((data) => {
            return (
                <Link href={`/products/${data.id}`} key={data.id}>
              <div key={data.id} className="mb-5 lg:mb-0 h-[240px] sm:h-[420px]">
                  <div className="w-full aspect-[4/5] h-[140px] sm:h-[280px] bg-[#F0EEED] rounded-[20px] overflow-hidden">
                    <Image
                      src={data.img_url}
                      alt={data.title}
                      width={300}
                      height={300}
                      className="w-full h-full rounded-[20px] hover:scale-110 transition-all duration-500"
                    ></Image>
                  </div>

                <div>
                  <p className="md:text-[18px] sm:text-[16px] text-[14px] font-bold md:mt-3 mt-1">
                    {data.title}
                  </p>
                  <div className="flex text-[#FFC633] md:text-[14px] text-[12px] gap-2 mt-1">
                    <p>{<FontAwesomeIcon icon={faStar} />}</p>
                    <p>{<FontAwesomeIcon icon={faStar} />}</p>
                    <p>{<FontAwesomeIcon icon={faStar} />}</p>
                    <p>{<FontAwesomeIcon icon={faStar} />}</p>
                    <p>{<FontAwesomeIcon icon={faStarHalf} />}</p>
                    <p className="text-black/60 md:text-[14px] text-[12px]">
                      {data.ratings}
                    </p>
                  </div>
                  <p className="md:text-[22px] sm:text-[18px] text-[16px] font-bold mt-1 flex items-center gap-3">
                    {data.price}
                    <span className="text-black/40 line-through">
                      {data.old_price}
                    </span>
                    {data.price_percentage ? (
                      <span className="text-[12px] py-[6px] px-[12px] md:py-[6px] md:px-[14px] rounded-[62px] bg-[#FF3333]/10 text-[#FF3333]">
                      {data.price_percentage}
                    </span>
                    ) : null }
                    
                  </p>
                </div>
              </div>
                </Link>
            );
          })}
        </div>
      </div>

      
    </>
  );
}
