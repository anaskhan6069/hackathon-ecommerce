"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import All_reviews from "@/app/Components/All-reviews";
import Also_like_product from "../Also-like-product";
import { BreadcrumbDemo } from "@/components/ui/myBreadCrumb";
import Link from "next/link";

interface Iproduct {
  id: number;
  title: string;
  price: string;
  ratings: string;
  old_price?: string;
  price_percentage?: string;
  img_url: string;
  img1?: string;
  img2?: string;
  img3?: string;
  discreption: string;

}

const product: Iproduct[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: "$120",
    ratings: "4.5/5",
    img_url: "/products/product1.png",
    img1: "/products/product1.png",
    img2: "/product-detail/pro-detail2.png",
    img3: "/product-detail/pro-detail3.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: "$240",
    ratings: "3.5/5",
    old_price: "$260",
    price_percentage: "-20%",
    img_url: "/products/product2.png",
    img1: "/products/product2.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
  },
  {
    id: 3,
    title: "Checked Shirt",
    price: "$180",
    ratings: "4.5/5",
    img_url: "/products/product3.png",
    img1: "/products/product3.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: "$130",
    ratings: "4.5/5",
    old_price: "$160",
    price_percentage: "-30%",
    img_url: "/products/product4.png",
    img1: "/products/product4.png",
    img2: "/product-detail/pro-detail2.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
  },
  {
    id : 5,
    title : "Vertical Striped Shirt",
    price : "$212",
    ratings : "5.0/5",
    old_price : "$232",
    price_percentage : "-20%",
    img_url : "/products/product5.png",
    img1: "/products/product5.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
},
{
    id : 6,
    title : "Courage Graphic T-shirt",
    price : "$145",
    ratings : "4.0/5",
    img_url : "/products/product6.png",
    img1: "/products/product6.png",
    img2: "/product-detail/pro-detail1.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
},
{
    id : 7,
    title : "Loose Fit Bermuda Shorts",
    price : "$80",
    ratings : "3.0/5",
    img_url : "/products/product7.png",
    img1: "/products/product7.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
},
{
    id : 8,
    title : "Faded Skinny Jeans",
    price : "$210",
    ratings : "4.5/5",
    img_url : "/products/product8.png",
    img1: "/products/product8.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
},
{
  id : 9,
  title : "Polo with Contrast Trims",
  price : "$212",
  ratings : "5.0/5",
  old_price : "$242",
  price_percentage : "-20%",
  img_url : "/product-detail/alsolike1.png",
  img1: "/product-detail/alsolike1.png",
  img2: "/product-detail/alsolike1.png",
  img3: "/product-detail/alsolike1.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
},
{
  id : 10,
  title : "Gradient Graphic T-shirt",
  price : "$145",
  ratings : "4.0/5",
  img_url : "/product-detail/alsolike2.png",
  img1: "/product-detail/alsolike2.png",
  img2: "/product-detail/alsolike2.png",
  img3: "/product-detail/alsolike2.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
},
{
  id : 11,
  title : "Polo with Tipping Details",
  price : "$180",
  ratings : "3.0/5",
  img_url : "/product-detail/alsolike3.png",
  img1: "/product-detail/alsolike3.png",
  img2: "/product-detail/alsolike3.png",
  img3: "/product-detail/alsolike3.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
},
{
  id : 12,
  title : "Black Striped T-shirt",
  price : "$120",
  ratings : "4.5/5",
  old_price : "$152",
  img_url : "/product-detail/alsolike4.png",
  img1: "/product-detail/alsolike4.png",
  img2: "/product-detail/alsolike4.png",
  img3: "/product-detail/alsolike4.png",
    discreption : "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
}
];

export default function Product_detail() {
  // Functionality of items increment and decrement
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const colors = ["#4F4631", "#314F4A", "#31344F"];

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const params = useParams();
  const id = params.id; //id coming from dynamic routing path
  const item = product.find((item) => item.id === Number(id));
  if (!item) {
    return <h1>Product Not Found</h1>;
  }

  // Corrected: Dynamically render images based on available properties
  const images = [item.img1, item.img2, item.img3].filter((img): img is string => Boolean(img));


  

  return (
    <>

    <BreadcrumbDemo></BreadcrumbDemo>

    <div className="flex flex-col md:flex-row justify-center md:justify-evenly md:mt-10 p-4 md:p-0 md:px-6 max-w-screen-2xl mx-auto">
      {/* left */}
      <div className="w-full lg:w-[160px] md:w-[130px] flex md:flex-col justify-start items-center gap-4 lg:gap-3 md:gap-1 order-2 md:order-1 overflow-hidden">
        {/* Dynamically render images */}
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Product Detail ${index + 1}`}
            width={200}
            height={200}
            className="w-full md:w-full h-[100px] md:h-[167px] rounded-[20px] mt-3 md:mt-0 hover:scale-110 transition-all duration-500"
          />
        ))}
      </div>

      {/* mid div */}
      <div className="w-full lg:w-[455px] md:w-[355px] h-[290px] lg:h-[530px] md:h-[430px] order-1 md:order-2 md:mr-6 md:ml-1 overflow-hidden">
        <Image
          src={item.img_url}
          alt="Product Detail"
          width={500}
          height={500}
          className="w-full h-full hover:scale-110 transition-all duration-500"
        ></Image>
      </div>

      {/* right div */}
      <div className="w-full lg:w-[600px] md:w-[450px] order-3 mt-3 md:mt-0">
        <h1 className="text-[24px] md:text-[30px] lg:text-[40px] md:font-extrabold uppercase">{item.title}</h1>
        {/* ratings */}
        <div className="flex text-[#FFC633] md:text-[16px] text-[14px] gap-2 mt-1">
          <p>{<FontAwesomeIcon icon={faStar} />}</p>
          <p>{<FontAwesomeIcon icon={faStar} />}</p>
          <p>{<FontAwesomeIcon icon={faStar} />}</p>
          <p>{<FontAwesomeIcon icon={faStar} />}</p>
          <p>{<FontAwesomeIcon icon={faStarHalf} />}</p>
          <p className="text-black/60 md:text-[16px] text-[14px]">
            {item.ratings}
          </p>
        </div>
        {/* price */}
        <p className="text-[24px] md:text-[28px] lg:text-[32px] font-bold mt-1 flex items-center gap-3">
          {item.price}
          <span className="text-black/40 line-through">{item.old_price}</span>
          {item.price_percentage ? (
                      <span className="text-[12px] py-[6px] px-[12px] md:py-[6px] md:px-[14px] rounded-[62px] bg-[#FF3333]/10 text-[#FF3333]">
                      {item.price_percentage}
                    </span>
                    ) : null}
        </p>
        {/* descreption */}
        <p className="md:text-[16px] text-[14px] text-black/60">{item.discreption}</p>

        {/* select color */}
        <div className="mt-3 pt-3 border-t">
      <p className="text-black/60">Select Color</p>
      <div className="flex gap-3 mt-2">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-[37px] h-[37px] rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 
              ${selectedColor === color ? "scale-110 shadow-md" : "scale-100"} `}
            style={{ backgroundColor: color }}
          >
            <FontAwesomeIcon
              icon={faCheck}
              className={`w-[16px] h-[16px] text-white transition-opacity duration-200 
                ${selectedColor === color ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        ))}
      </div>
    </div>

        {/* select size */}
        <div className="mt-3 pt-3 border-t">
      <p className="text-black/60">Select Size</p>
      <div className="flex space-x-2 md:space-x-3 mt-2">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`flex justify-between items-center px-[20px] md:px-[24px] py-[10px] md:py-[12px] rounded-[62px] text-[14px] md:text-[16px] cursor-pointer transition-all 
              ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-black/60"
              }`}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
      
       {/* buttons  */}
       <div className="flex justify-start items-center mt-4 pt-4 space-x-2 md:space-x-4 border-t">
       <div className="flex justify-between items-center w-[150px] md:w-[170px] px-[20px] py-[14px] rounded-[62px] bg-[#F0F0F0] text-black text-[16px] font-bold">
        <FontAwesomeIcon icon={faPlus} className="text-[22px] hover:cursor-pointer" onClick={increment}/>
            {count}
       <FontAwesomeIcon icon={faMinus} className="text-[22px] hover:cursor-pointer"  onClick={decrement}/>
       </div>
       
       <Link href="/Cart">
       <Button className="w-[240px] md:w-[400px]  h-[52px] px-[54px] py-[16px] rounded-[62px] bg-black text-white">Add to Cart</Button>
       </Link>
       </div>
      </div>

    </div>

    {/* All reviews */}
    <All_reviews/>

    {/* You might also like products */}
    <Also_like_product/>
    </>
  );
}
