const LOGO_URL = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
const IMG_TMDB_URL = "https://image.tmdb.org/t/p/w780/"
const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDY3ZWM3ODJkZmYxNTE1MDRlNmRkMmYzYTRjMmZjMyIsInN1YiI6IjY1NDYyNTY2MWFjMjkyN2IyZjI1NTU1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XmUj9rFmo10AaX0BPj2pMdvioe_d5Sbut-zkvB2Mdmk'
    }
  };
  const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
  const SUPPORTED_LANGUAGE = [{identifier:'en', name:'English'},
  {identifier:'hindi', name:'Hindi'},
  {identifier:'marathi', name:'Marathi'},
  {identifier:'gujarati', name:'Gujarati'},
  {identifier:'russian', name:'Russian'}
]

const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export {LOGO_URL, IMG_TMDB_URL, API_OPTIONS, BG_URL, SUPPORTED_LANGUAGE, OPENAI_KEY}