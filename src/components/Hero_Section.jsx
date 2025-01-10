import React from 'react'
import iphoneLogo from '../../src/assets/iphonelogo.png'
import iphonebanner from '../../src/assets/iphonebanner.png'
import remote from '../../src/assets/productimages/remote.png'
import camera from '../../src/assets/productimages/camera.png'
import cameraLogo from '../../src/assets/cameraLogo.png'
import remoteLogo from '../../src/assets/remoteLogo.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import  { useState } from 'react';  

const carouselItems1 = [
  {
    id:1,
    title:"Canon 3 Series",
    imgSrc:cameraLogo,
    imgBanner:camera,
    description :"Capturing one Lens Cameras"
   },
   {
    id:2,
    title:"iPhone 14 Series",
    imgSrc:iphoneLogo,
    imgBanner:iphonebanner,
    description :"Up to 10% off Voucher"
   },
   {
    id:3,
    title:"Gamepad 4 Series",
    imgSrc:remoteLogo,
    imgBanner:remote,
    description :"Gaming RENO LTx-50"
   },
]

export const Hero_Section = () => {
  const [currentIndex,setCurrentIndex] = useState(1);
  const handleDotClick = (index)=>{
    setCurrentIndex(index)
  }
  const previous = ()=>{
    setCurrentIndex((prevIndex) =>  
           (prevIndex - 1 + carouselItems1.length) % carouselItems1.length  
           );  
  }
  const next = ()=>{
   setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems1.length);  

  }
  return (
    <section className='lg:w-[82%] md:w-[84%] sm:w-[94%] xsm:w-[90%]  xxs:w-[90%]  mx-auto mt-8 bg-black   '>
      <div className=' w-full flex items-center justify-between '>
      <div className=' lg:w-[40%] md:w-[50%] xxs:w-[50%] h-[349px]  xs:h-[200px] xsm:h-[300px] xs:p-4 xs:w-[50%]   xxs:p-3 xxs:items-center xxs:justify-center  xsm:w-[50%] px-8 py-14 flex  flex-col justify-start items-center xsm:gap-0 xs:gap-0 xs:justify-center xs:items-center gap-4 '>
         <button onClick={next} className='hidden text-white'> Next</button>
           <div className='w-full flex items-center justify-start  xxs:gap-0 gap-3'>
            <img src={carouselItems1[currentIndex].imgSrc} className='w-[30px] xxs:w-[25px] xsm:w-[22px] ' alt="logo" />
            <p className='font-poppins font-normal mt-2 xs:mt-3 text-white text-[16px] xxs:w-full xxs:text-[8px] xsm:mt-1 xsm:text-[12px]'>{carouselItems1[currentIndex].title}</p>
           </div>
           <div className='w-full flex flex-col justify-center gap-7 xxs:gap-6 items-start'>
            <h1 className='text-white text-[48px] text-start font-semibold xs:text-[35px] xsm:text-[23px] xxs:w-[90%] xxs:text-[25px]'>{carouselItems1[currentIndex].description}</h1>
            <div className=' flex items-center justify-center'>
           <span>
            <button className='text-white ml-2 text-[16px] underline font-medium'>Shop Now</button>
           </span>
            <IoIosArrowRoundForward size={30} className='mt-1 ml-2 text-[#fafafa]'/>
            </div>
           </div>
        </div>
        <div className='lg:w-[40%] md:w-[50%] xxs:w-[50%]  xs:w-[50%] flex items-center justify-center'>
         <img src={carouselItems1[currentIndex].imgBanner} className='w-full object-contain' alt="bannerimg" />
        </div>
          <div className='lg:w-[20%] md:w-0 xxs:hidden  xxs:w-0'></div>
          <button onClick={previous} className='text-white hidden'>Previous</button>
      </div>
        <div className='flex justify-center m-0 '>  
         {carouselItems1.map((_, index) => (  
          <button  
             key={index}  
            className={`h-3 w-3 mb-3 rounded-full mx-1 ${currentIndex === index ? 'bg-[#db4444] border-[1.5px] border-white' : 'bg-gray-500'}`}  
            onClick={() => handleDotClick(index)}  
          />  
         ))}  
       </div>  
        
    </section>
  )
}


