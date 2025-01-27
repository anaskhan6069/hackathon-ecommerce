
import { CheckboxDemo } from "@/components/myCheckBox";
import { SliderDemo } from "@/components/pricing";
import { AccordionDemo } from "@/components/ui/myAccordion";
import Size from "../Components/sizes";
import { Dress_Style } from "@/components/dressStyle";
import Casual_Shirts from "../Components/casual-shirts";
import { BreadcrumbDemo } from "@/components/ui/myBreadCrumb";

export default function Casual(){
    return(
        <>
        <BreadcrumbDemo></BreadcrumbDemo>
        <main className="flex flex-col md:flex-row justify-center md:space-x-6 md:mt-5">
            {/* Left */}
            <div className="hidden md:block w-full md:w-[310px] h-full rounded-[20px] p-5 border">
            <AccordionDemo></AccordionDemo>
            <SliderDemo></SliderDemo>
            <CheckboxDemo></CheckboxDemo>
            <Size></Size>
            <Dress_Style/>
            </div>

            {/* right */}
            <div className="w-full md:w-[930px] h-full mt-8 md:mt-0">
            <Casual_Shirts/>
            </div>
        </main>
        </>
    )
}