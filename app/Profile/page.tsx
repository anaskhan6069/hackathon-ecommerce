"use client"

import Image from "next/image";
import React from "react"


const Profile = () => {
    return (
        <>
        <div className="flex flex-col sm:flex-row justify-center items-center h-[400px] w-[90%] md:w-[60%] lg:w-[40%] m-auto">
            <Image src="/development-in-process.png" alt="development in process" 
            width={150} height={150} 
            className="animate-slow-spin w-28 h-28 sm:w-40 sm:h-40"></Image>
            <h1 className="text-center sm:text-left mt-4 text-xl sm:text-4xl font-bold">Profile page is not ready yet. Stay tuned!</h1>
        </div>
        </>
    )
}

export default Profile;