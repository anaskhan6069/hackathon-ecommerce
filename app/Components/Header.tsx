"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { SheetSide } from "@/components/ui/side-navbar";
import { NavigationMenuDemo } from "@/components/ui/navigationMenu";


const Header = () => {
  return (
    <>
      {/* Main div for header */}
      <div className="flex justify-between items-center m-auto lg:my-6 my-4 w-[100%] lg:w-[93%] px-[20px] lg:px-0 max-w-screen-2xl mx-auto">
        
        {/* Website logo */}
        <div className="lg:block flex items-center justify-center">
          <span className="block lg:hidden">
            <SheetSide/>
          </span>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={22}
            className="lg:w-[160px] lg:h-[22px] w-[126px] h-[18px] ml-3 md:ml-0"
            />
        </Link>
        </div>

        {/* Links */}
        <ul className="lg:list-none lg:flex items-center justify-center lg:gap-8 gap-[4px] hidden">
          <li><NavigationMenuDemo/></li>
          <li><Link href="/products">On Sale</Link></li>
          <li><Link href="/products">New Arrival</Link></li>
          <li><Link href="/products">Brands</Link></li>
        </ul>

        {/* Search input */}
        <div className="hidden lg:bg-[#F0F0F0] lg:text-black/40 lg:w-[500px] lg:h-[48px] lg:px-[16px] lg:py-[12px] lg:flex lg:items-center lg:rounded-3xl">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input placeholder="Search for products..." className="lg:ml-4 bg-[#F0F0F0] w-full h-full text-black outline-none"></input>
        </div>

        {/* Accounts icons */}
        <div className="flex gap-3 md:gap-6 text-lg">
          <span className="block lg:hidden">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <span>
            <Link href="Cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
          </span>
          <span>
            <Link href="Profile"><FontAwesomeIcon icon={faUser} /></Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
