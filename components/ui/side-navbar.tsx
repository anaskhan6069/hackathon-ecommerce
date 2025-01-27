"use client"

import { Button } from "@/components/ui/button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./navigationMenu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="border-none bg-white"><FontAwesomeIcon className="text-black" icon={faBars} /></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
              
            </SheetHeader>
            
            {/* Links */}
        <ul className="grid grid-cols-1 gap-y-4">
          <li><Link href=""><NavigationMenuDemo/></Link></li>
          <li><Link href="">On Sale</Link></li>
          <li><Link href="">New Arrival</Link></li>
          <li><Link href="">Brands</Link></li>
        </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
