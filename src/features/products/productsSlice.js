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

const productsSlice = createSlice({
    name: 'products',

    initialState,

    reducers: {},

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


export default productsSlice.reducer;