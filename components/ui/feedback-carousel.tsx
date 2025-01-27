// import { FaStar } from "react-icons/fa"; // Import FontAwesome icons
// import { FaCircleCheck } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah M.",
    feedback:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 5,
    verified: true,
  },
  {
    name: "John D.",
    feedback:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    rating: 5,
    verified: true,
  },
  {
    name: "Emma L.",
    feedback:
    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: false,
  },
  {
    name: "Michael B.",
    feedback:
     "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sophia K.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: false,
  },
];

export default function CustomerCarousel() {
  return (
    <main className="mt-[-20px] md:mt-14">
      <div className="w-full flex justify-center items-center mt-10 mb-1 max-w-screen-xl mx-auto">
        {/* Container */}
        <div className="w-[100%] md:w-[90%] p-3 md:p-0 ">
          {/* Header */}
          <div className="flex justify-start md:justify-between items-center mb-[-42px] md:mb-[0]  w-[60%]">
            <h1 className="text-black text-3xl md:text-4xl font-extrabold pt-4 text-left">
              OUR HAPPY CUSTOMERS
            </h1>
          </div>
          <div className="relative mt-10 bg-red-">
            {/* Carousel */}
            <Carousel className="w-full md:max-w-[100%] mx-auto relative">
              {/* Buttons */}
              <CarouselPrevious className="absolute top-[-1rem] md:top-[-3rem]  left-[320px] md:left-[630px] lg:left-[830px] xl:left-[1050px] text-gray-600 hover:text-black" />
              <CarouselNext className="absolute top-[-1rem] md:top-[-3rem]   right-0 md:right-2 text-gray-600 hover:text-black" />

              <CarouselContent className="-ml-1 flex  flex-row mt-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 w-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-2">
                      <Card className="h-[230px]">
                        <CardContent className="flex flex-col items-start justify-center p-4">
                          {/* Testimonial Card */}
                          <ul className="flex justify-start items-center space-x-1 mb-2">
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-400"/></li>
                          </ul>
                          <h2 className="flex items-center text-lg font-bold mb-2">
                            {testimonial.name}
                            {testimonial.verified && (
                              <FontAwesomeIcon icon={faCircleCheck} className="bg-white text-[#01AB31] rounded-full ml-2"/>
                            )}
                          </h2>
                          <p className="text-[16px] leading-[22px] text-black/60">&quot;{testimonial.feedback}&quot;</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}