"use client"

import React from "react";
import Offers from "./Offers";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full h-full bg-[#F0F0F0] relative mt-48 md:mt-40 max-w-screen-2xl mx-auto">
            {/* Offers */}
            <span className="absolute top-[-200px] md:top-[-85px] ">
            <Offers></Offers>
            </span>


            {/* top and middle div */}
            <div className="flex md:flex-row flex-col justify-between items-start pt-44 md:pt-36 px-5 md:px-20">
            {/* top div */}
            <div className="w-full md:w-[270px] ">
                <ul>
                    <Link href="/">
                    <Image src="/logo.png" alt="Footer logo" width={200} height={200} className="w-[140px] md:w-[150px] h-auto mb-4 md:mb-8"></Image>
                    </Link>
                    <p className="text-black/60 text-[14px]">We have clothes that suits your style and which you are proud to wear. From women to men.</p>
                    {/* Icons */}
                    <div className="flex justify-start space-x-4 my-4 md:my-9">
                            {/* Twitter */}
                            <Link href="/" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-[#black]/20 rounded-full text-black text-xl hover:bg-black hover:text-white transition duration-300">
                            <FontAwesomeIcon icon={faTwitter} className="md:text-xl text-base"/>
                            </Link>
                            {/* Facebook */}
                            <Link href="/" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-[#black]/20 rounded-full text-black text-xl hover:bg-black hover:text-white transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">
                            <FontAwesomeIcon icon={faFacebook} className="md:text-xl text-base"/>
                            </Link>
                            {/* Instagram */}
                            <Link href="/" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-[#black]/20 rounded-full text-black text-xl hover:bg-black hover:text-white transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">
                            <FontAwesomeIcon icon={faInstagram} className="md:text-xl text-base"/>
                            </Link>
                            {/* Github */}
                            <Link href="/" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-[#black]/20 rounded-full text-black text-xl hover:bg-black hover:text-white transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">{/* // Using CSS variable */}
                            <FontAwesomeIcon icon={faGithub} className="md:text-xl text-base"/>
                            </Link>
                        </div>

                </ul>
            </div>

            {/* middle div */}
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-20 gap-10  mt-0 md:mt-[-4px]">
                {/* Col 1 */}
                <div className="flex flex-col  text-black/60 leading-[30px] md:leading-[40px] text-[14px] md:text-[16px]">
                    <h2 className="text-black font-bold tracking-[3px] mb-2">COMPANY</h2>
                    <Link href="/">About</Link>
                    <Link href="/">Feature</Link>
                    <Link href="/">Works</Link>
                    <Link href="/">Career</Link>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col text-black/60 leading-[30px] md:leading-[40px] text-[14px] md:text-[16px]">
                    <h2 className="text-black font-bold tracking-[3px] mb-2">HELP</h2>
                    <Link href="/">Customer Support</Link>
                    <Link href="/">Delievry Detail</Link>
                    <Link href="/">Terms & Condition</Link>
                    <Link href="/">Privacy Policy</Link>
                </div>

                {/* Col 3 */}
                <div className="flex flex-col text-black/60 leading-[30px] md:leading-[40px] text-[14px] md:text-[16px] mt-[-20px] md:mt-0">
                    <h2 className="text-black font-bold tracking-[3px] mb-2">FAQ</h2>
                    <Link href="/">Account</Link>
                    <Link href="/">Delievry Detail</Link>
                    <Link href="/">Terms & Condition</Link>
                    <Link href="/">Privacy Policy</Link>
                </div>

                {/* Col 4 */}
                <div className="flex flex-col text-black/60 leading-[30px] md:leading-[40px] text-[14px] md:text-[16px] mt-[-20px] md:mt-0">
                    <h2 className="text-black font-bold tracking-[3px] mb-2">RESOURCES</h2>
                    <Link href="/">Free eBooks</Link>
                    <Link href="/">Development Tutorial</Link>
                    <Link href="/">How to Blog</Link>
                    <Link href="/">Youtube Playlist</Link>
                </div>
            </div>
            </div>

            {/* bottom div */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 pt-4 mx-4 md:mx-20 mt-8 md:mt-0 space-y-3 md:space-y-0 pb-14">
                <p className="text-[14px] text-black/60">Shop.co © 2000-2023, All Rights Reserved</p>
                <p className="text-[14px] text-black/60">{"</>"} Developed by Anas Khan &#128420;</p>
                <div className="flex">
                    <Image src="/visa.png" alt="visa pay" width={100} height={100} className="w-[60px] md-[70px]"></Image>
                    <Image src="/mastercard.png" alt="goole pay" width={100} height={100} className="w-[60px] md-[70px]"></Image>
                    <Image src="/paypal.png" alt="paypal" width={100} height={100} className="w-[60px] md-[70px]"></Image>
                    <Image src="/apple-pay.png" alt="apple pay" width={100} height={100} className="w-[60px] md-[70px]"></Image>
                    <Image src="/google-pay.png" alt="goole pay" width={100} height={100} className="w-[60px] md-[70px]"></Image>
                </div>
            </div>
            

        </footer>
    )
}