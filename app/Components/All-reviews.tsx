
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const Reviews = [
    {
      name: "Sarah M.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
      rating: 5,
      verified: true,
      date: "Posted on August 14, 2023"
    },
    {
      name: "John D.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 5,
      verified: true,
      date: "Posted on August 14, 2023"
    },
    {
      name: "Emma L.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date: "Posted on August 14, 2023"
    },
    {
      name: "Michael B.",
      feedback:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date: "Posted on August 14, 2023"
    },
    {
      name: "Sophia K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date: "Posted on August 14, 2023"
    },
    {
        name: "Sophia K.",
        feedback:
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
        verified: false,
        date: "Posted on August 14, 2023"
      },
  ];

export default function All_reviews(){
    return (
        <main className="md:mt-5 max-w-screen-2xl mx-auto">
            {/* top div */}
            <div className="flex justify-between items-center py-5 md:mx-10 mx-4 lg:mt-0 md:mt-24 border-t-2">
            <h1 className="text-[24px] font-extrabold">All Reviews</h1>
            {/* button */}
            <div className="space-x-2 flex justify-center items-center">
              <Button variant={"outline"} className="hidden md:block rounded-[62px] px-[20px] bg-[#F0F0F0]">Latest</Button>
              <Button className="rounded-[62px] px-[20px]">Write a Review</Button>
            </div>
            </div>

            {/* Container */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-10 mx-4 mt-2">
                    {
                        Reviews.map((data, index)=>{
                            return(
                                <div key={index} className=" flex flex-col border-2 rounded-[20px] px-[32px] py-[28px]">
                                    <ul className="flex gap-2">
                                    <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                                    </ul>
                                    <p className="text-[20px] font-bold my-2">{data.name}
                                        {data.verified && (
                                                                  <FontAwesomeIcon icon={faCircleCheck} className="bg-white text-[#01AB31] rounded-full ml-2"/>
                                                                )}</p>
                                    <p className="leading-[22px] text-black/60">{data.feedback}</p>
                                    <p className="text-black/60 font-medium mt-5">{data.date}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

                    {/* Button */}
            <div className="flex justify-center items-center">
          <button className="border-2 hover:bg-slate-200 transition-all duration-200  px-[54px] py-[14px] rounded-[62px] mt-7">
            Load More Reviews
          </button>
        </div>
        
        </main>
    )
}