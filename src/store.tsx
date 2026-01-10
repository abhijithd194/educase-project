import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "./counterslice"
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})