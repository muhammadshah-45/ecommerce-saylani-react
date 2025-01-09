import React from "react";
import { Timer } from "../Timer";
import leftArrow from '@/src/assets/leftarrow.svg'
import rightArrow from '@/src/assets/rightarrow.svg'
import { IoMdSad, IoMdSave } from "react-icons/io";
import game from '@/src/assets/productimages/remote.png'
import reviewfillstar from '@/src/assets/fillstar.svg'
import reviewhalfstar from '@/src/assets/halfstar.svg'
import reviewstar from '@/src/assets/emptystar.svg'
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

export const FlashSalesProducts = () => {
 
  return (
    <>
      <section className=" lg:w-[82%] md:w-[85%] sm:w-[94%]  xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-6 ">
        <div>
          <div className="flex  gap-2 justify-center items-center">
            <span className="bg-[#DB4444] rounded-[4px] w-[13px] h-[30px]"></span>
            <span className="font-semibold text-[16px] font-poppins text-[#DB4444]">
              Today's
            </span>
          </div>
        </div>
                              {/*Today's Section  */}
        <div className="w-full xsm:bg-yellow-300 xs:bg-sky-500 xxs:bg-pink-500  flex md:justify-between">
          <div className="lg:w-1/2 md:w-[60%]  sm:w-[70%] xsm:w-[80%]  flex justify-between items-end">
            <div className="w-1/2 md:w-1/2 text-start">
              <h1 className="font-inter font-semibold text-[36px] md:text-[32px] sm:text-[28px] xsm:text-[24px]">
                Flash Sales
              </h1>
            </div>
           <Timer />
          </div>
          <div className="lg:w-1/2 md:w-[40%]  sm:w-[30%] xsm:w-[20%] flex justify-end lg:mr-0 md:mr-3 items-center ">
            <div className= "lg:w-1/6 md:w-1/5 flex lg:gap-2 md:gap-1">
              <img src={leftArrow} className="bg-[#f5f5f5] p-1 rounded-[50px] " alt="leftimg" />
              <img src={rightArrow} className="bg-[#f5f5f5] p-1 rounded-[50px] " alt="" />
            </div>
          </div>
        </div>
                          { /*Flash Sales Products  */}
        <div className="w-full flex md:flex-wrap lg:flex-wrap justify-between my-4">
          {/* Product 1 */}
          {/* <div className="w-[22%]  flex justify-start gap-1 items-start flex-col ">
            <div className="bg-[#f5f5f5] h-[230px] rounded-sm relative w-full  flex justify-center items-center flex-col">
              <img src={game} className="" alt="" />
              <span className="absolute top-[12px] rounded-[4px] left-[12px]  text-white px-3 py-1 bg-[#db4444] ">- 40%</span>
              <IoEyeOutline className="absolute top-[12px] right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
              <CiHeart className="absolute top-10 right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
            </div>
            <h1 className="font-poppins font-medium text-[16px] text-black">HAVIT HV-G92 Gamepad</h1>
            <span className="text-[#db4444] text-[16px] font-poppins font-medium ">$234<span className="ml-3 text-[16px] opacity-55 line-through text-black">$532</span></span>
            <div className="flex justify-start items-center">
               <img src={reviewfillstar}  alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <span className="ml-2 text-black opacity-55 font-semibold text-[14px]">(80)</span>
            </div>
          </div> */}
          {/* Product 2 */}
          {/* <div className="w-[22%]  flex justify-start gap-1 items-start flex-col ">
            <div className="bg-[#f5f5f5] h-[230px] rounded-sm relative w-full  flex justify-center items-center flex-col">
              <img src={game} className="" alt="" />
              <span className="absolute top-[12px] rounded-[4px] left-[12px]  text-white px-3 py-1 bg-[#db4444] ">- 40%</span>
              <IoEyeOutline className="absolute top-[12px] right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
              <CiHeart className="absolute top-10 right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
            </div>
            <h1 className="font-poppins font-medium text-[16px] text-black">HAVIT HV-G92 Gamepad</h1>
            <span className="text-[#db4444] text-[16px] font-poppins font-medium ">$234<span className="ml-3 text-[16px] opacity-55 line-through text-black">$532</span></span>
            <div className="flex justify-start items-center">
               <img src={reviewfillstar}  alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <span className="ml-2 text-black opacity-55 font-semibold text-[14px]">(80)</span>
            </div>
          </div> */}
          {/* Product 3 */}
          {/* <div className="w-[22%]  flex justify-start gap-1 items-start flex-col ">
            <div className="bg-[#f5f5f5] h-[230px] rounded-sm relative w-full  flex justify-center items-center flex-col">
              <img src={game} className="" alt="" />
              <span className="absolute top-[12px] rounded-[4px] left-[12px]  text-white px-3 py-1 bg-[#db4444] ">- 40%</span>
              <IoEyeOutline className="absolute top-[12px] right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
              <CiHeart className="absolute top-10 right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
            </div>
            <h1 className="font-poppins font-medium text-[16px] text-black">HAVIT HV-G92 Gamepad</h1>
            <span className="text-[#db4444] text-[16px] font-poppins font-medium ">$234<span className="ml-3 text-[16px] opacity-55 line-through text-black">$532</span></span>
            <div className="flex justify-start items-center">
               <img src={reviewfillstar}  alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <span className="ml-2 text-black opacity-55 font-semibold text-[14px]">(80)</span>
            </div>
          </div> */}
          {/* Product 4 */}
          {/* <div className="w-[22%]  flex justify-start gap-1 items-start flex-col ">
            <div className="bg-[#f5f5f5] h-[230px] rounded-sm relative w-full  flex justify-center items-center flex-col">
              <img src={game} className="" alt="" />
              <span className="absolute top-[12px] rounded-[4px] left-[12px]  text-white px-3 py-1 bg-[#db4444] ">- 40%</span>
              <IoEyeOutline className="absolute top-[12px] right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
              <CiHeart className="absolute top-10 right-[10px] bg-white p-1 text-[24px] rounded-[50px]"/>
            </div>
            <h1 className="font-poppins font-medium text-[16px] text-black">HAVIT HV-G92 Gamepad</h1>
            <span className="text-[#db4444] text-[16px] font-poppins font-medium ">$234<span className="ml-3 text-[16px] opacity-55 line-through text-black">$532</span></span>
            <div className="flex justify-start items-center">
               <img src={reviewfillstar}  alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <img src={reviewfillstar} alt="" />
               <span className="ml-2 text-black opacity-55 font-semibold text-[14px]">(80)</span>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
