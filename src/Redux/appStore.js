import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./reducer/userSlice";
import moviesSliceReducer from './reducer/movieSlice';
import gptSliceReducer from './reducer/gptSlice'
import configReducer from './reducer/configSlice';

const appStore = configureStore({
    reducer:{
        user: userSliceReducer,
        movies:moviesSliceReducer,
        gpt:gptSliceReducer,
        config:configReducer
    }
})

export default appStore;