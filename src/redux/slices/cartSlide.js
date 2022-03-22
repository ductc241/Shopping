import { createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

const cartSlide = createSlice({
    name: 'cart',

    initialState: {
        cartItems: [],
        amount: 0
    },

    reducers: {
        resetCartItem(state, action) {
            state.cartItems = []
            state.amount = 0
        },
        
        setCartItem(state, action) {
            state.cartItems = action.payload
            state.amount = action.payload.length
        },

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

        addCartItem(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.product === action.payload.product
            )
            
            if(itemIndex >= 0){
                state.cartItems[itemIndex].quantity += 1
                state.amount += action.payload.quantity
            }else{
                state.cartItems.push(action.payload)
                state.amount += action.payload.quantity
            }
            toast("Thêm vào giỏ thành công!");
        }
    }
})

export const { resetCartItem ,setCartItem, removeCartItem, decreaseCartItem, addCartItem } = cartSlide.actions;
export default cartSlide