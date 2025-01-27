"use client"

import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
const Toptag = () => {
    return (
        <>
            <div className="bg-black flex items-center justify-center h-[38px] w-full max-w-screen-2xl mx-auto">
                
                <div className="m-auto flex items-center justify-center">
                <p className="text-white/80 md:text-[14px] text-[12px]">Sign up and get 20% off to your first order. 
                </p>
                <Link href="#" className="text-white underline underline-offset-4 md:text-[14px] text-[12px]">Sign Up Now</Link>
                </div>

                <button type="button" className="text-white hidden md:block text-xl absolute right-14"><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        </>
    )
}

export default Toptag;