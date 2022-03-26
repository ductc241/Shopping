import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getByCategory } from "../../axios/product";

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (page) => {
        const { data } = await getAll(page)
        return data
    }
)

export const getProductsByCate = createAsyncThunk(
    'product/getProductsByCategory',
    async (cateId) => {
        const { data } = await getByCategory(cateId)
        return data
    }
)


const productSlide = createSlice({
    name: 'product',

    initialState: {
        isLoading: true,
        list: []
    },

    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload
            state.isLoading = false
        }),

        builder.addCase(getProductsByCate.fulfilled, (state, action) => {
            state.list = action.payload
            state.isLoading = false
        })
    }
})

export default productSlide