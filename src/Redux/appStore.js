import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./reducer/userSlice";

const appStore = configureStore({
    reducer:{
        user: userSliceReducer
    }
})

export default appStore;