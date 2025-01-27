"use client"

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image";
import { AccordionDemo } from "./ui/myAccordion";
import { SliderDemo } from "./pricing";
import { CheckboxDemo } from "./myCheckBox";
import Size from "@/app/Components/sizes";
import { Dress_Style } from "./dressStyle";


const SHEET_SIDES = ["bottom"] as const



export function Filters_up() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="border-none rounded-full px-2 py-4 hover:bg-white bg-[#F0F0F0]"><Image src="/filter-icon.png" alt="Filter icon" width={100} height={100} className="w-[22px] h-[22px]"></Image></Button>
          </SheetTrigger>
          <SheetContent side={side}>
          <SheetHeader>

              <SheetTitle className="absolute top-[14px] text-[20px]">Filters</SheetTitle>
              
            </SheetHeader>
            {/* FILTERS */}
                    
            <div className="w-full md:w-[310px] h-full rounded-[20px] overflow-scroll mt-8">
                <AccordionDemo></AccordionDemo>
                <SliderDemo></SliderDemo>
                <CheckboxDemo></CheckboxDemo>
                <Size></Size>
                <Dress_Style/>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
