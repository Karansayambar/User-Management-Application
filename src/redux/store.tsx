import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice"

const store = configureStore({
    reducer : {
        users : userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;