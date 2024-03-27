import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./reducer/userSlice";
import moviesSliceReducer from './reducer/movieSlice';
import gptSliceReducer from './reducer/gptSlice'

const appStore = configureStore({
    reducer:{
        user: userSliceReducer,
        movies:moviesSliceReducer,
        gpt:gptSliceReducer
    }
})

export default appStore;