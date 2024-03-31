## Netflix

- Create React App
- Configuration TailwindCss
- Header
- Routing of app
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our app to production
- Create Signup User Account
- Implement sign in user api
- Create Redux store with user slice
- update profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect/ nrowse to Login Page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcodede values to constants file
- Register TMDB API & Create an app & get access token
- Get Data from TMDB now playing movies list API
- early return topic (important)
- Custom Hook for Now Playing Movies
- Create movie slice
- Update store with movies
- Planning for Main container & Secondary container
- Fetch data from TMDB for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Build Movie List
- Build Movie card
- TmDB image CDN url
- usePopularMovies, useTopRated, useUpcoming custom hooks
--
- Gpt search Feature
- GPT Search bar
- Multi-language features in our app 
- Integrate GPT APIs
- memorization 

## Feature
- Login/Sign Up
    - Sign In/Sign Up
    - redirect to browse page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
    - Main Movie
        - MainContainer
            1. VideoBackground
            2. VideoTitle
        - SecondaryContainer ( movieList - Popular, Now Playing, Trending, Horror)
            1. MovieList * n
                - Cards * n   
## firebase 
1. npm install firebase 
2. npm install -g firebase-tools
3. firebase login
4. firebase init 
    -   ? Are you ready to proceed? Yes
        ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
        ? Please select an option: Use an existing project
        ? Select a default Firebase project for this directory: netflixreact-a1b83 (NetflixReact)
        i  Using project (select project)
        ? What do you want to use as your public directory? build
        ? Configure as a single-page app (rewrite all urls to /index.html)? No
        ? Set up automatic builds and deploys with GitHub? No
5. firebase deploy

## redux store
npm i -D @reduxjs/toolkit
npm i react-redux
