import { configureStore } from "@reduxjs/toolkit"

// slides
import authSlide from "./slices/authSlice"
import productSlide from "./slices/productSlide"


const store = configureStore({
    reducer: {
        auth: authSlide.reducer,
        products: productSlide.reducer
    }
})

export default store