"use client"

import React from "react"
import Herosection from "./Components/Herosection"
import Brands from "./Components/Brands"
import Top_sell from "./products/Top-sell"
import Dress_style from "./Components/dress-style"
import CustomerCarousel from "@/components/ui/feedback-carousel"
import New_arrival from "./products/New-arrival"





const Page = () => {
    return (
        <>
        <main className="w-screen">
            <Herosection></Herosection>
            <Brands></Brands>
            <New_arrival/>
            <Top_sell/>
            <Dress_style/>
            <CustomerCarousel></CustomerCarousel>
            
        </main>
            
        </>
    )
}

export default Page;