
import React from 'react'
import { Hero_Section } from '../components/Hero_Section'
import { FlashSalesProducts } from '../components/Products/FlashSalesProducts'
import { useSelector } from 'react-redux'
import { TodayTimer } from '../components/TodayTimer'


export const Home = () => {
 
  const favorite = useSelector(state => state.favorite)
  
  console.log(favorite)
  return (
  
    <>
       <Hero_Section/>
       <TodayTimer />
        <FlashSalesProducts/>
{/* <Timer /> */}
  </>
  )
}
