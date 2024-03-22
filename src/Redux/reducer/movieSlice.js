import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies: (state,action) =>{
            // console.log(state);
            // console.log(action);
            state.nowPlayingMovies = action.payload;
            // console.log(state.nowPlayingMovies);
        },
        addPopularMovies: (state,action) =>{
            // console.log(state);
            // console.log(action);
            state.popularMovies = action.payload;
            // console.log(state.popularMovies);
        }, 
        addTopRatedMovies: (state,action) =>{ 
            state.topRatedMovies = action.payload; 
        }, 
        addUpcomingMovies: (state,action) =>{ 
            state.upcomingMovies = action.payload; 
        },   
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addUpcomingMovies, addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;