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
        },
        onLogOut: (state, {payload} ) => {
            state.status = 'not-authenticated'
            state.user = {}
            state.errorMesagge = payload
        },
        onClearErrorMessage: (state) => {
            state.errorMesagge = undefined
        }    
    }

})

export const {
    onChecking,
    onLogin,
    onLogOut,
    onClearErrorMessage
} = authSlice.actions