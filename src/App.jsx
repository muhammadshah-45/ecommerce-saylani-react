import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Products } from './pages/Products'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './Slices/ProductSlice'
import { Favorite } from './pages/Favorite'
import { FlashSalesProducts } from './components/Products/FlashSalesProducts'
import  {Cart}  from './pages/Cart'
import { FilterProducts } from './pages/FilterProducts'
import { AllProducts } from './components/Products/AllProducts'
import Pr from './pages/Pr'
import { ShoppingCart } from './components/ShoppingCart'
import { Footer } from './components/Footer'

function App() {
  const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(fetchProducts())
 },[])
  return (
    <>
    <Navbar/>
 <Routes>
  <Route index element={<Home/>}/>
  <Route path='/products' element={<FlashSalesProducts/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/favorite' element = {<Favorite />} />
  <Route path='/cart' element ={<Cart/>} />
  <Route path='/filter' element = {<FilterProducts />} />
  <Route path='p' element = {<Pr />}/>
  <Route path='/all-products' element = {<AllProducts />} />
  <Route path='/shopping-cart' element = {<ShoppingCart />} />
 </Routes>
 <Footer />
    </>
  )
}

export default App
