import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({

    name: "auth",
    initialState: {
        status: 'Checking', //authenticated - not-authenticated 
        user: {},
        errorMesagge: undefined
    },

    reducers: {
        onChecking: (state) => {
            state.status = 'Checking'
            state.user = {}
            state.errorMesagge = undefined
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated'
            state.user = payload
            state.errorMesagge = undefined
        }
    }

})

export const {
    onChecking,
    onLogin
} = authSlice.actions