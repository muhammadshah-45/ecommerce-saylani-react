import React from "react";
import img from '@/src/assets/shopping-cart/cartimg2.png'
export const ShoppingCart = () => {
  return (
    <>
      <div className="w-full bg-[#f6f5ff] h-[286px] flex justify-center">
        <div className="w-[84%]  flex items-center justify-start">
          <div className="text-left ml-3  my-auto">
            <h1 className="text-3xl font-semibold py-2">Shopping Cart</h1>
            <span>
              Home . Pages .{" "}
              <span className="text-[#fb2e86]">shopping cart</span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-[84%] mx-auto my-9 flex">
        <div className="w-full  justify-between flex">
          <div className="w-[65%] flex flex-col justify-between gap-2  p-1">
            <div className=" w-full flex flex-col space-y-6  justify-between">
              <div className="w-full   flex items-center justify-between">
              <h2>Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Total</h2>
              </div>
            <div className="w-full py-3 flex justify-between items-center ">
                {/* image details */}
                <div className="w-[30%]  flex justify-start space-x-4">
                    <div className="w-[83px] rounded-md relative bg-slate-200">
                  <img src={img} alt="img" />
                  <span className="absolute -top-1 -right-[5px] w-4 pb-1 pl-[1px] h-4 flex justify-center items-center  text-white bg-black rounded-full">x</span>
                    </div>
                   <div className="flex flex-col justify-start items-start">
                    <h2 className="text-[14px] text-left">Ut diam consequat</h2>
                     <span className="text-[12px] text-gray-400">Color: Brown</span>
                     <span className="text-[12px] text-gray-400">Size:XL</span>
                   </div>
                </div>
                <div className="w-[20%] text-left ">$34.00</div>
                <div className="w-[20%] ">
                <div className="w-[51px] h-[15px] text-[12px] text-gray-400 flex justify-between mx-auto bg-[#F0EFF2]"><span className="w-[12px] h-[15px]  bg-[#EFE7EF] text-[#BEBFC2]">-</span>1<span className="w-[12px] h-[15px] bg-[#EFE7EF] text-[#BEBFC2]">+</span></div>

                </div>
                <div className="w-[20%] text-right ">£219.00</div> 
            </div>
            </div>
            <div className="w-full h-[1.5px] bg-gray-400"></div>
            <div className=" w-full flex flex-col justify-between">
            <div className="w-full py-3 flex justify-between items-center ">
                {/* image details */}
                <div className="w-[30%]   flex justify-start space-x-4">
                    <div className="w-[83px] rounded-md relative bg-slate-200">
                  <img src={img} alt="img" />
                  <span className="absolute -top-1 -right-[5px] w-4 pb-1 pl-[1px] h-4 flex justify-center items-center  text-white bg-black rounded-full">x</span>
                    </div>
                   <div className="flex flex-col justify-start items-start">
                    <h2 className="text-[14px] text-left">Ut diam consequat</h2>
                     <span className="text-[12px] text-gray-400">Color: Brown</span>
                     <span className="text-[12px] text-gray-400">Size:XL</span>
                   </div>
                </div>
                <div className="w-[20%] text-left ">$34.00</div>
                <div className="w-[20%] ">
                <div className="w-[51px] h-[15px] text-[12px] text-gray-400 flex justify-between mx-auto bg-[#F0EFF2]"><span className="w-[12px] h-[15px]  bg-[#EFE7EF] text-[#BEBFC2]">-</span>1<span className="w-[12px] h-[15px] bg-[#EFE7EF] text-[#BEBFC2]">+</span></div>

                </div>
                <div className="w-[20%] text-right ">£219.00</div> 
            </div>
            </div>   
            {/* Cart Tools */}
          </div>
            <div className="w-[30%] flex flex-col space-y-6  ">
                <h1 className="font-medium">Cart Tools</h1>
                <div className="w-[97%] flex gap-4 flex-col mx-auto bg-[#F4F4FC] py-10 p-2 rounded-md">
                    {/* totals & subtotal parent div */}
                   <div className="flex space-y-2 flex-col ">
                   <div className="flex justify-between px-3">
                        <span>Subtotals:</span>
                        <span>$219.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.5px]"></div>
                    <div className="flex justify-between items-center px-3">
                    <span>Totals:</span>
                    <span>$349.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.2px]"></div>

                   </div>
                    {/*  */}
                    <div className="w-full flex gap-2 mt-3 justify-start  items-center">
                        <span className="w-3 h-3 rounded-full mt-[2px] ml-2 bg-green-400"></span>
                        <p className="text-sm text-gray-400">Shipping & taxes calculated at checkout</p>
                    </div>
                    <div className="w-[100%] flex justify-center items-center  ">
                        <button className="bg-[#19D16F] w-full mt-4 mx-3 py-1 px-4 text-white">Proceed To Checkout</button>
                    </div>
                    
                </div>
                <h1>Continue Shopping</h1>
                <div className="w-[97%] flex gap-4 flex-col mx-auto bg-[#F4F4FC] py-10 p-2 rounded-md">
                    {/* totals & subtotal parent div */}
                   <div className="flex space-y-2 flex-col ">
                   <div className="flex justify-between px-3">
                        <span>Subtotals:</span>
                        <span>$219.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.5px]"></div>
                    <div className="flex justify-between items-center px-3">
                    <span>Totals:</span>
                    <span>$349.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.2px]"></div>

                   </div>
                    {/*  */}
                    <div className="w-full flex gap-2 mt-3 justify-start  items-center">
                        <span className="w-3 h-3 rounded-full mt-[2px] ml-2 bg-green-400"></span>
                        <p className="text-sm text-gray-400">Shipping & taxes calculated at checkout</p>
                    </div>
                    <div className="w-[100%] flex justify-center items-center  ">
                        <button className="bg-[#19D16F] w-full mt-4 mx-3 py-1 px-4 text-white">Proceed To Checkout</button>
                    </div>
                    
                </div>
            </div>
          
        </div>
      </div>
    </>
  );
};
