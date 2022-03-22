import { configureStore } from "@reduxjs/toolkit"

// slides
import authSlide from "./slices/authSlice"
import cartSlide from "./slices/cartSlide"
import productSlide from "./slices/productSlide"

const store = configureStore({
    reducer: {
        auth: authSlide.reducer,
        products: productSlide.reducer,
        cart: cartSlide.reducer
    }
})

export default store