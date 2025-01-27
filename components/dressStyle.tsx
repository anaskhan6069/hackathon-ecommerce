import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { Button } from "./ui/button"
  
  export function Dress_Style() {
    return (
        <>
      <div className="py-5">
        <div className="flex justify-between">
        <h1 className="text-[20px] font-bold">Dress Style</h1>
        </div>
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/60">Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-black/60">Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-black/60">Party</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-black/60">Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>

        {/* button */}
      <div className="flex justify-center items-center mb-10 md:mb-0">  
        <Button className="w-[100%] rounded-[62px]">Apply Filter</Button>
      </div>
    </>
    )
  }
  