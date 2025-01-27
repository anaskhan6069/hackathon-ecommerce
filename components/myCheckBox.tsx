"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const checkboxColors = [
  "bg-[#00C12B]",
  "bg-[#F50606]",
  "bg-[#F5DD06]",
  "bg-[#F57906]",
  "bg-[#06CAF5]",
  "bg-[#063AF5]",
  "bg-[#7D06F5]",
  "bg-[#F506A4]",
  "bg-[#FFFFFF]",
  "bg-[#000000]",
];

export function CheckboxDemo() {
  return (
    <div className="py-5 border-b">
        <h1 className="text-[20px] font-bold mb-3">Colors</h1>
        <div className="flex flex-wrap gap-3">
        {checkboxColors.map((color, index) => (
          <div key={index} className="flex items-center">
            <Checkbox
              id={`checkbox-${index}`}
              className={`h-[37px] w-[37px] border-[0.5px] border-black/40 rounded-full ${color}`}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
          
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}