import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./reducer/userSlice";
import moviesSliceReducer from './reducer/movieSlice';

const appStore = configureStore({
    reducer:{
        user: userSliceReducer,
        movies:moviesSliceReducer
    }
})

export default appStore;