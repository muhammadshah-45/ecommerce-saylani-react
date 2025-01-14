import React from 'react'
import { useSelector } from 'react-redux'
import img from '@/src/assets/productimages/camera.png'
import { CiHeart, CiShoppingCart, CiZoomIn } from 'react-icons/ci'
import cart from '@/src/assets/shopping-cart/cart.png'
export const Cart = () => {
  const {cartProducts,message} = useSelector(state=>state.cart)
  console.log(cartProducts)
  if(cartProducts.length <= 0 ){
    return(
      <div className='w-full h-[70vh] space-y-2  flex flex-col items-center justify-center m-auto'>
        <img src={cart} className='w-[100px] animate-bounce' alt="" />
      <p className='font-semibolds font-poppinss'>No Product available in cart</p>
      </div>
    )
  }
  return (
    <div className=' p-2 w-full flex flex-col space-y-4 justify-center items-center m-auto'>
      {cartProducts.map((product)=>(
 <div className='bg-white rounded-md shadow-lg shadow-fuchsia-200 p-2 w-[80%] gap-6 flex justify-evenly items-center'>
 <div className='w-[500px]'>
   <img src={product?.category?.image} className='w-full' alt="" />
 </div>
 <div className=' flex flex-col justify-start items-start'>
   <div className='flex items-center gap-3'>
   <h1 className='font-medium'>{product?.title}</h1>
   <div className='flex space-x-2 mt-1'>
     <span className='w-3 h-3 bg-orange-300 rounded-full'></span>
     <span className='w-3 h-3 bg-purple-400 rounded-full'></span>
     <span className='w-3 h-3 bg-pink-500 rounded-full'></span>

   </div>
   </div>
   <div>
     <span>${product?.price}</span>
   </div>
   <p>{product?.description}</p>
   <div className='flex justify-center items-center'>
     <CiShoppingCart size={20} />
     <CiHeart />
     <CiZoomIn />
   </div>
 </div>
</div>
      ))}
     
    </div>
  )
}

