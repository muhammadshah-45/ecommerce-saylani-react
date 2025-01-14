import React from "react";
import {Link} from 'react-router-dom'
import reviewfillstar from "@/src/assets/fillstar.svg";
import { IoEyeOutline } from "react-icons/io5";
import { CiAlarmOn, CiHeart } from "react-icons/ci";
import { useSelector ,useDispatch } from "react-redux";
import { toggleFavorite } from "@/src/Slices/FavoriteSlice";
import { toggleCart } from "@/src/Slices/CartSlice";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
export const AllProducts = () => {
  const [heart,setHeart] = useState(false)
   // Initialize favorites as an empty object  
   const [favorites, setFavorites] = useState({});  
   const [addProduct, setAddProduct] = useState({});  

  const {products,isLoading,message} = useSelector(state=>state.product)
  const cart = useSelector(state => state.cart)
  console.log(cart)
  const dispatch = useDispatch()
  const handleFavorite = (product) => {  
    const updatedFavorites = { ...favorites, [product.id]: !favorites[product.id] };  
    setFavorites(updatedFavorites);  
    dispatch(toggleFavorite(product));  
  };  
  const handleAddToCart = (data)=>{
    const updateCart = {...addProduct,[data.id]: !addProduct[data.id]}
    setAddProduct(updateCart)
    dispatch(toggleCart(data))
  }
  return (
    <>
      <section className=" lg:w-[82%] md:w-[85%] sm:w-[94%]  xsm:w-[90%] w-full mx-auto flex flex-col justify-start items-start mt-6 ">
        
        {/*Flash Sales Products  */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4">
          {/* Product 1 */}
          {products.map((product)=>(
 <div className="flex justify-start gap-1 items-start  flex-col" key={product?.id}>
 <div className="bg-[#f5f5f5] h-[230px] px-4 rounded-sm relative w-full flex justify-center items-center flex-col">
   <img src={product?.category?.image} className="w-full" alt="" />
   <span className="absolute top-[12px] font-normal font-poppins rounded-[4px] left-[12px] text-white px-3 py-1 bg-[#db4444] ">
     - 40%
   </span>
   <IoEyeOutline className="absolute top-[12px] right-[10px] bg-white p-1 text-[24px] cursor-pointer rounded-[50px]"  />
   <FaHeart  className={`absolute top-10 right-[10px] ${favorites[product.id] ? 'text-red-500': <CiHeart/>} bg-white p-1 text-[24px] cursor-pointer rounded-[50px]`} onClick={()=> handleFavorite(product)} />
   <Link onClick={()=> handleAddToCart(product)} className={`w-full ${addProduct[product.id] ? "text-white" : "text-white"} rounded-b-sm font-poppins font-medium text-[16px] absolute bottom-0 hover:visible bg-gray-700 hover:font-semibold hover:bg-black text-transparent transition-all duration-500 ease-out  py-1`}>{addProduct[product.id] ? "Added" : "Add to Cart"}</Link>
 </div>
 <h1 className="w-full  max-w-full  font-poppins font-medium text-[16px] text-black">
 {product?.title}
 </h1>
 <span className="text-[#db4444] text-[16px] font-poppins font-medium ">
    ${product?.price}
   <span className="ml-3 text-[16px] opacity-55 line-through text-black">
     $160
   </span>
 </span>
 <div className="flex justify-start items-center">
   <img src={reviewfillstar} alt="" />
   <img src={reviewfillstar} alt="" />
   <img src={reviewfillstar} alt="" />
   <img src={reviewfillstar} alt="" />
   <img src={reviewfillstar} alt="" />
   <span className="ml-2 text-black opacity-55 font-semibold text-[14px]">
     (80)
   </span>
 </div>
</div>
          ))}
         


        </div>
        
       
      </section>
    </>
  );
};
