import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
import { calendarSlice } from "./calendar/calendarSlice";



export const Store = configureStore({
    reducer: {
        auth: calendarSlice.reducer,
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})