import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  
import axios from "axios";  

export const fetchProducts = createAsyncThunk(  
    'products/fetchAll',  
    async () => {  
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");  
        return response.data;  
    }  
);  

const productSlice = createSlice({  
    name: "products",  
    initialState: {  
        products: [],  
        isLoading: false,  
        message: ""  
    },  
    extraReducers: (builder) => {  
        builder  
            .addCase(fetchProducts.pending, (state) => {  
                state.isLoading = true;  
            })  
            .addCase(fetchProducts.fulfilled, (state, action) => {  
                state.isLoading = false;  
                state.products = action.payload;  
            })  
            .addCase(fetchProducts.rejected, (state, action) => {  
                state.isLoading = false;  
                state.message = action.error.message;  
            });  
    }  
});  

export default productSlice.reducer;