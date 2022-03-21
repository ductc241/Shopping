import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
    name: 'auth',

    initialState: {
        authenticated: false,
        userInfor: {}
    },

    reducers: {
        setAuthen(state, action) {
            state.authenticated = true
            state.userInfor = action.payload.user
        },

        clearAuth() {
            state.authenticated = false
        }
    }
})

export const { setAuthen } = authSlide.actions;
export default authSlide