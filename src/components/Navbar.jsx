import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export const Navbar = () => {
  const [hamburger,setHamburger] = useState(false)
  
    const {favoriteProducts,message} = useSelector(state=>state.favorite)
    const {cartProducts} = useSelector(state => state.cart)
    
  const toggleMenu = ()=>{
    setHamburger(!hamburger)
  }
  const closeMenu = ()=>{
    setHamburger(false)
  }
  
  return (
    <>
    <div className='w-full  md:w-full border-b border-b-gray-300 h-[4rem] pb-2 flex items-end justify-between'>
      <div className=' flex w-[94%] z-30 md:w-full mx-auto lg:items-center  md:justify-around sm:gap-4 justify-between md:items-center items-center '>
      <div className='w-auto z-40 flex items-center md:gap-6  lg:gap-10'>
        <h1 className='font-inter font-bold md:text-[16px] sm:text-[16px] lg:text-[24px] tracking-wide'>Shah's Store</h1>
        <ul className='hidden w-auto z-50 h-auto md:flex lg:mt-[0px] lg:gap-7  md:mt-[0px] transition-all duration-500 font-poppins lg:text-[16px] md:text-[12px] md:gap-3 gap-9'>
            <Link to={'/'} className='hover:border-b-[1.4px] md:pb-[1px] hover:md:p-0 hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Home</Link>
            <Link to={'/pages'}className='hover:border-b-[1.4px] md:pb-[1px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Pages</Link>
            <Link to={'/all-products'}className='hover:border-b-[1.4px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Products</Link>
            <Link to={'/signup'}className='hover:border-b-[1.4px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Blog</Link>
            <Link to={'/signup'}className='hover:border-b-[1.4px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Shop</Link>
            <Link to={'/signup'}className='hover:border-b-[1.4px] hover:border-transparent border-transparent md:border-b md:border-transparent  md:hover:border-b-[1.4px] md:hover:border-gray-500  cursor-pointer'>Contact</Link>



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
        <Link to={'/favorite'} className='relative '>
        <CiHeart  size={24}/>
        <span className={`absolute -top-1 pl-[1px]  bg-black w-5  h-5 rounded-full flex justify-center ${favoriteProducts.length <=0 ? "invisible" : "visible"} items-center text-white left-3`}>{favoriteProducts?.length}</span>
        </Link>
        <Link to='/cart' className='relative'>
        <CiShoppingCart size={24}/>
        <span className='absolute -top-1 pl-[1px]  bg-black w-5  h-5 rounded-full flex justify-center items-center text-white left-3'>{cartProducts?.length}</span>
        </Link>
     </div>
     <div className='md:hidden xsm:flex xsm:gap-3  sm:flex z-50  sm:gap-2 sm:justify-center' >
      <CiHeart size={24}  />
      <CiShoppingCart size={24} />
      
     <button 
        id="menu-btn"
        onClick={toggleMenu }
        className={`relative block cursor-pointer w-[24px] h-[24px] transition-all duration-200 ease-in md:hidden focus:outline-none ${hamburger && "open"}`}>
          {hamburger ? <AiOutlineClose color='black' size={20}/> : <AiOutlineMenu/>}
          {/* <span className="absolute top-1 left-0 w-[24px] h-[2px] rounded-lg bg-gray-500 transform rotate-0 "></span>
          <span className="absolute top-[3px]  right-0 w-[16px] rounded-lg h-[2px] bg-gray-500 transform rotate-0 translate-y-2"></span>
          <span className="absolute top-1 left-0 w-[24px] h-[2px] rounded-lg bg-gray-500 transform rotate-0 translate-y-[14px]"></span> */}
        </button>
          </div>
      </div>
     {/* Mobile Menu  */}
     <div className={`md:hidden fixed left-0 top-0 w-full min-h-screen ${hamburger ? "bg-[#f5f5f5]" : ''} z-40 `}>
      <div className={`fixed font-semibold text-4xl text-gray-700 space-y-8   w-full h-screen justify-center items-center flex-col text-center ${hamburger ? "transform-none":"transform-[-100%]"}  ${hamburger ? 'flex': "hidden"}   sm:${hamburger ? "flex" : "hidden"}`}>
         <Link to="/" className="uppercase hover:border-none hover:[text-shadow:_0_10px_12px_rgb(0_0_0_/_40%)] ">Home</Link>
         <Link to="/pages" className=" uppercase hover:border-none hover:[text-shadow:_0_10px_12px_rgb(0_0_0_/_40%)] ">Pages</Link>
         <Link href="/all-products" className=" uppercase hover:border-none hover:[text-shadow:_0_10px_12px_rgb(0_0_0_/_40%)] ">Products</Link>
         <Link href="/blog" className=" uppercase hover:border-none hover:[text-shadow:_0_10px_12px_rgb(0_0_0_/_40%)] ">Blog</Link>
         <Link href="/shop" className=" uppercase hover:border-none hover:[text-shadow:_0_10px_12px_rgb(0_0_0_/_40%)] ">Blog</Link>
         <Link href="/contact" className=" uppercase hover:border-none hover:[text-shadow:_0_10px_12px_rgb(0_0_0_/_40%)] ">Contact</Link>


      </div>
     </div>
    </div>
    </>
  )
}
