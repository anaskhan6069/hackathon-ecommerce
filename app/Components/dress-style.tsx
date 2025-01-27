"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Dress_style(){
    return(
        <div className="m-auto w-[95%] md:w-[93%] h-full md:h-auto  bg-[#F0F0F0] flex flex-col justify-start items-center rounded-[40px] mt-8 md:mt-14 pb-10 px-4 md:px-0 pt-4 max-w-screen-2xl mx-auto overflow-hidden">
            {/* top div */}
            <div >
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold md:px-0 px-4 py-6 md:py-12 text-center leading-[36px]">BROWSE BY DRESS STYLE</h1>
            </div>

            {/* bottom div */}
            <div className="w-[90%] flex flex-wrap justify-center items-center gap-3">
                <Link href="Casual">
                <div className="w-[310px] md:w-[400px] h-[190px] md:h-[200px] relative">
                    <Image src="/dress-style/dress-style1.png" alt="Dress Style" width={500} height={500} className="w-full h-full rounded-[20px]"></Image>
                    <span className="absolute top-[25px] left-[36px] text-[22px] md:text-[32px] font-bold">Casual</span>
                </div>
                </Link>
                <Link href="/">
                <div className="w-[310px] md:w-[690px] h-[190px] md:h-[200px] bg relative">
                <Image src="/dress-style/dress-style2.png" alt="Dress Style" width={500} height={500} className="w-full h-full rounded-[20px]"></Image>
                <span className="absolute top-[25px] left-[36px] text-[22px] md:text-[32px] font-bold">Formal</span>
                </div>
                </Link>
                <Link href="/">
                <div className="w-[310px] md:w-[690px] h-[190px] md:h-[200px]  relative">
                <Image src="/dress-style/dress-style3.png" alt="Dress Style" width={500} height={500} className="w-full h-full rounded-[20px]"></Image>
                <span className="absolute top-[25px] left-[36px] text-[22px] md:text-[32px] font-bold">Party</span>
                </div>
                </Link>
                <Link href="/">
                <div className="w-[310px] md:w-[400px] h-[190px] md:h-[200px]  relative">
                <Image src="/dress-style/dress-style4.png" alt="Dress Style" width={500} height={500} className="w-full h-full rounded-[20px]"></Image>
                <span className="absolute top-[25px] left-[36px] text-[22px] md:text-[32px] font-bold">Gym</span>
                </div>
                </Link>
            </div>
        </div>
    )
}