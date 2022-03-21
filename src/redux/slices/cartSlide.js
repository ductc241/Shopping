import { createSlice } from "@reduxjs/toolkit"

const cartSlide = createSlice({
    name: 'cart',

    initialState: {
        cartItems: [],
        amount: 0
    },

    reducers: {
        removeCartItem(state, action) {
            const newCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload
            )
            state.cartItems = newCartItems;
        },

        decreaseCartItem(state, action) {
            const itemIdex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload
            )
            if (state.cartItems[itemIdex].qty > 1) {
                state.cartItems[itemIdex].qty -= 1
            } else {
                state.cartItems[itemIdex].qty = 1
            }
        },

        increaseCartItem(state, action) {
            const itemIdex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload
            )
            
            if(itemIdex){
                state.cartItems[itemIdex].qty += 1                
            }else{
                state.cartItems.push(action.payload)
            }
        }
    }
})

export const { removeCartItem, decreaseCartItem, increaseCartItem } = cartSlide.actions;
export default cartSlide