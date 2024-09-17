import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get('../../../public/Database/db.json');
    return response.data.products;
})

export const createProduct = createAsyncThunk("products/createProduct", async (product) => {
    const response = await axios.post('../../../public/Database/db.json', product);
    console.log(response.data); 
})

const productsSlice = createSlice({
    name: 'products',

    initialState,

    reducers: {

        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload); // action.payload is the id of the product to be deleted
        }
    },

    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const { deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;