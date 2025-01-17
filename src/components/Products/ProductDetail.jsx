import React from "react";
import img from "@/src/assets/product-detail/product1.png";
import mainimg from "@/src/assets/product-detail/product4.png";
import reviewfillstar from "@/src/assets/fillstar.svg";
import facebook from '@/src/assets/social-icons/facebook.png'
import insta from '@/src/assets/social-icons/insta.png'
import twitter from '@/src/assets/social-icons/twitter.png'


import { CiHeart } from "react-icons/ci";
const ProductDetail = () => {
  return (
    <>
      <div className="w-full bg-[#f6f5ff] h-[286px] flex justify-center">
        <div className="w-[84%]  flex items-center justify-start">
          <div className="text-left ml-3  my-auto">
            <h1 className="text-3xl font-semibold font-josefin py-2">
              Product Details
            </h1>
            <span>
              Home . Pages .{" "}
              <span className="text-[#fb2e86]">Product Details</span>
            </span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-[80%] bg-white shadow-custom my-8 p-3 rounded-[2px] flex space-x-4 mx-auto">
        <div className=" gap-[11px] flex flex-col">
          <div className="w-[151px]">
            <img src={img} alt="" />
          </div>
          <div className="w-[151px]">
            <img src={img} alt="" />
          </div>
          <div className="w-[151px]">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="">
          <div className="w-[375px]">
            <img src={mainimg} alt="" />
          </div>
        </div>
        <div className="w-[50%] flex  flex-col justify-center ">
          <div className="flex flex-col justify-start items-start space-x-1 gap-2"
          >
            <h1 className="font-josefin text-4xl text-[#0D134E]">Playwood arm chair </h1>
            <div className="flex gap-1 items-center">
              <div className="flex gap-[1px]">
                <img src={reviewfillstar} alt="" />
                <img src={reviewfillstar} alt="" />
                <img src={reviewfillstar} alt="" />
                <img src={reviewfillstar} alt="" />
                <img src={reviewfillstar} alt="" />
              </div>{" "}
              <span className="text-[14px] font-josefin text-[#151875] ">(22)</span>
            </div>
            <div className="text-[16px] font-josefin">
              <span className="text-[#151875] ">$23.00 <span className="ml-1 text-[#FB2E86] line-through">$32.00</span></span>
            </div>
            <span className="font-josefin text-[16px] text-[#0D134E]">Color</span>
            <p className="text-left text-[#A9ACC6] text-[16px] font-josefin ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              architecto beatae officia dicta molestias dignissimos quaerat
              cumque animi ratione. Soluta quae tempore hic excepturi
              necessitatibus a iusto ut molestiae nisi.
            </p>
            <div className="flex items-center gap-4">
                <button className="ml-6 text-[#151875] text-[16px] font-josefin">Add To Cart</button>
               <span><CiHeart size={20} className="mt-[1px] text-[#151875]"/></span>
            </div>
            <div className="flex gap-2 flex-col justify-start items-start">
                <span className="text-[16px] text-[#151875] font-josefin">Categories</span>
                <span className="text-[16px] text-[#151875] font-josefin">Tags</span>
                <div className="flex gap-5">
                    <span className="text-[16px] text-[#151875] font-josefin">Share</span>
                    <div className="flex gap-3">
                        <img src={facebook} alt="" />
                        <img src={insta} alt="" />
                        <img src={twitter} alt="" />

                    </div>
                </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
