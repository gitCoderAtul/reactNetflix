import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Redux/reducer/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../Redux/reducer/gptSlice";
import lang from "../utils/languageConstat";
import { changeLanguage } from "../Redux/reducer/configSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  // commonly apply sign in and sign out
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate('/');
      })
      .catch((error) => {
        // An error happened.
        // navigate('/error');
      });
  };

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e)=>{
   // console.log(e.target.value); 
 dispatch(changeLanguage(e.target.value)) 
  }

  return (
    <div className="bg-gradient-to-b from-black w-full flex justify-between items-center px-16 absolute z-[2]">
      <img className="w-44" src={LOGO_URL} alt="logo"></img>
      {user && (
        <div className="flex items-center">
          <select
            className="px-3 py-1 bg-gray-800 bg-opacity-65 text-white rounded-sm"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option value={lang.identifier} key={lang.identifier}>
                {" "}
                {lang.name}{" "}
              </option>
            ))}
            {/* <option value="en"> English </option>
              <option value="hindi"> Hindi </option>
              <option value="mararthi"> Marathi </option>
              <option value="gujarati"> Gujarati </option>
              <option value="russian"> Russian </option>               */}
          </select>
          <button
            className="bg-purple-900 bg-opacity-65 text-white px-3 py-1 mx-4 rounded-sm"
            onClick={handleGptSearchClick}
          >
           {
            showGptSearch ? 'Homepage' :'GPT Search'
           }  
          </button>
          <span className="text-white font-semibold">{user.displayName} </span>
          <img
            alt="photo"
            src={user.photoURL}
            className="border-solid border-gray-600 rounded-[50%] w-10 h-10 mx-6"
          ></img>
          <button className="text-white" onClick={handleSignOut}>
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
export default Header;
