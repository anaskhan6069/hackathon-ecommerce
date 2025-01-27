"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Offers() {
  return (
    <main className="w-full flex justify-center items-center mt-6 md:mt-0 max-w-screen-2xl mx-auto">
      <div className="w-[90%] md:w-[86%] lg:w-[90%] h-full md:h-[170px] bg-black text-white rounded-[20px] px-[34px] md:px-[50] lg:px-[64] py-[36px] md:py-[22px] flex flex-col md:flex-row items-center">
        <h1 className="text-[30px] lg:text-[40px] font-extrabold leading-[35px] lg:leading-[45px] mb-5 md:mb-0">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>

        <div className="space-y-3 w-full md:w-[350px]">
          {/* Email input */}
          <div className="flex justify-center bg-[#F0F0F0] text-black/60 px-[16px] py-[12px] rounded-[62px] md:w-[350px]">
            <span className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-[20px] lg:w-[22px] h-[20px] lg:h-[22px] text-black/40"
              />
            </span>
            <input
              placeholder="Enter your email address"
              className="text-[14px] lg:text-[16px] ml-4 bg-[#F0F0F0] w-full text-black outline-none"
            ></input>
          </div>

          {/* subscribe button */}
          <div className="md:w-[350px]">
            <button className="w-full px-[16px] py-[12px] rounded-[62px] font-bold text-black bg-white text-[14px] lg:text-[16px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
