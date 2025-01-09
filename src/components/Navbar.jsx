import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
export const Navbar = () => {
  const [hamburger,setHamburger] = useState(false)
  
  const toggleMenu = ()=>{
    setHamburger(!hamburger)
  }
  const closeMenu = ()=>{
    setHamburger(false)
  }
  
  return (
    <>
    <div className='w-full md:w-full border-b border-b-gray-300 h-[4rem] pb-2 flex items-end justify-between'>
      <div className=' flex w-[94%] md:w-full mx-auto lg:items-center  md:justify-around sm:gap-4 justify-between md:items-center items-center '>
      <div className='w-auto flex items-center md:gap-6  lg:gap-10'>
        <h1 className='font-inter font-bold md:text-[16px] sm:text-[16px] lg:text-[24px] tracking-wide'>Shah's Store</h1>
        <ul className='hidden w-auto h-auto md:flex lg:mt-[0px] lg:gap-7  md:mt-[0px] transition-all duration-500 font-poppins lg:text-[16px] md:text-[12px] md:gap-3 gap-9'>
            <li className='hover:border-b-[1.4px] md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Home</li>
            <li className='hover:border-b-[1.4px] md:pb-[1px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Contact</li>
            <li className='hover:border-b-[1.4px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>About</li>
            <li className='hover:border-b-[1.4px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Sign Up</li>

            {/* <li className='hover:border-b-[1.4px] md:p-[2px] hover:border-transparent md:border-b md:border-transparent md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer ' >Contact</li>
            <li className='hover:border-b-[1.4px] md:p-[2px] hover:border-transparent md:border-b md:border-transparent md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer hover:border-gray-500'>About</li>
            <li className='hover:border-b-[1.4px] md:p-[2px] hover:border-transparent md:border-b md:border-transparent md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer hover:border-gray-500' >Sign Up</li> */}
        </ul>
     </div>
     <div className='w-auto md:flex  gap-4 items-center hidden'>
        <div className='w-[225px] px-[14px] h-[38px] relative flex bg-[#f5f5f5] items-center  rounded-[5px]'>
            <input className='w-[200px] placeholder:font-poppins font-poppins text-[12px] font-normal bg-transparent  outline-none placeholder:text-left' placeholder='What are you looking for?' type="text" name="" id="" />
            <CiSearch className='absolute top-[10px] right-[8px]' size={20}/>
        </div>
        <CiHeart size={24}/>
        <CiShoppingCart size={24}/>
     </div>
     <div className='md:hidden xsm:flex xsm:gap-3  sm:flex  sm:gap-2 sm:justify-center' >
      <CiHeart size={24}  />
      <CiShoppingCart size={24} />
      
     <button 
        id="menu-btn"
        onClick={toggleMenu }
        className={`relative block cursor-pointer w-[24px] h-[24px] transition-all duration-200 ease-in md:hidden focus:outline-none ${hamburger && "open"}`}>
          {hamburger ? <AiOutlineClose /> : <AiOutlineMenu/>}
          {/* <span className="absolute top-1 left-0 w-[24px] h-[2px] rounded-lg bg-gray-500 transform rotate-0 "></span>
          <span className="absolute top-[3px]  right-0 w-[16px] rounded-lg h-[2px] bg-gray-500 transform rotate-0 translate-y-2"></span>
          <span className="absolute top-1 left-0 w-[24px] h-[2px] rounded-lg bg-gray-500 transform rotate-0 translate-y-[14px]"></span> */}
        </button>
          </div>
      </div>
     {/* Mobile Menu  */}
     <div className="md:hidden ">
      <div className={`w-auto px-[12rem] xsm:w-[340px]  xsm:py-14 xsm:px-14 py-[10rem] rounded-md shadow-sm absolute flex-col items-center  justify-center  mt-[6px] space-y-6 mx-0 bg-[#f5f5f4] sm:w-[638px] sm:py-24 sm:self-center top-[3.7rem] ${hamburger ? 'flex': "hidden"}  right-1 drop-shadow-md sm:${hamburger ? "flex" : "hidden"}`}>
         <a href="#" className="w-[350px] border-b-2 uppercase text-xl border-transparent hover:border-b-2 hover:border-black text-black">Home</a>
         <a href="#" className="w-[350px] border-b-2 uppercase text-xl border-transparent hover:border-b-2 hover:border-black text-black">Contact</a>
         <a href="#" className="w-[350px] border-b-2 uppercase text-xl border-transparent hover:border-b-2 hover:border-black text-black">About</a>
         <a href="#" className="w-[350px] border-b-2 uppercase text-xl border-transparent hover:border-b-2 hover:border-black text-black">Sign Up</a>

      </div>
     </div>
    </div>
    </>
  )
}
