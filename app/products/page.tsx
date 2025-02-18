import Casual_Shirts from "../Components/casual-shirts";
import { BreadcrumbDemo } from "@/components/ui/myBreadCrumb";

export default function Casual(){
    return(
        <>
        <BreadcrumbDemo></BreadcrumbDemo>
        <main className="flex flex-col md:flex-row justify-center md:space-x-6 md:mt-5">

            {/* right */}
            <div className="w-full h-full mt-8 md:mt-0">
            <Casual_Shirts/>
            </div>
        </main>
        </>
    )
}