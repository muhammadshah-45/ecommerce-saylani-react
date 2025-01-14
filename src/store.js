import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice  from "./Slices/ProductSlice";
import  favoriteSlice from './Slices/FavoriteSlice'
import  cartSlice from './Slices/CartSlice'


const store = configureStore({
    reducer:{
        product:ProductSlice,
        favorite:favoriteSlice,
        cart:cartSlice
    }
})
export default store