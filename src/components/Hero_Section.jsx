import React from 'react'
import iphoneLogo from '@/src/assets/iphonelogo.png'
import iphonebanner from '@/src/assets/iphonebanner.png'
import { IoIosArrowRoundForward } from "react-icons/io";

export const Hero_Section = () => {
  return (
    <section className='lg:w-[82%] md:w-[84%] sm:w-[94%] xsm:w-[90%]  xxs:w-[90%]  mx-auto mt-8 bg-black   '>
      <div className=' w-full flex items-center justify-between '>
      <div className=' lg:w-[40%] md:w-[50%] xxs:w-[50%] h-[349px]  xs:h-[200px] xsm:h-[300px] xs:p-4 xs:w-[50%]   xxs:p-3 xxs:items-center xxs:justify-center  xsm:w-[50%] px-8 py-14 flex  flex-col justify-start items-center xsm:gap-0 xs:gap-0 xs:justify-center xs:items-center gap-4 '>
           <div className='w-full flex items-center justify-start  xxs:gap-0 gap-3'>
            <img src={iphoneLogo} className='w-[40px] xxs:w-[25px] xsm:w-[22px] ' alt="logo" />
            <p className='font-poppins font-normal mt-3 xs:mt-3 text-white text-[16px] xxs:w-full xxs:text-[8px] xsm:mt-1 xsm:text-[12px]'>iPhone 14 Series</p>
           </div>
           <div className='w-full flex flex-col justify-center gap-7 xxs:gap-6 items-start'>
            <h1 className='text-white text-[48px] text-start font-semibold xs:text-[35px] xsm:text-[23px] xxs:w-[90%] xxs:text-[25px]'>Up to 10% off Voucher</h1>
            <div className=' flex items-center justify-center'>
           <span>
            <button className='text-white ml-2 text-[16px] underline font-medium'>Shop Now</button>
           </span>
            <IoIosArrowRoundForward size={30} className='mt-1 ml-2 text-[#fafafa]'/>
            </div>
           </div>
        </div>
        <div className='lg:w-[40%] md:w-[50%] xxs:w-[50%]  xs:w-[50%] flex items-center justify-center'>
         <img src={iphonebanner} className='w-full object-contain' alt="bannerimg" />
        </div>
        <div className='lg:w-[20%] md:w-0 xxs:hidden  xxs:w-0'></div>
      </div>
      
        
    </section>
  )
}
