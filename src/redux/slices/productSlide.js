import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../axios/product";

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async () => {
        const { data } = await getAll()
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
        })
    }
})

export default productSlide