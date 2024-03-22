import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, checkValidDataSignUp } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/reducer/userSlice";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    console.log(isSignInForm);
    setIsSignInForm(!isSignInForm);
  };

  // sign in
  const handleButtonClick = (e) => {
    //validate form data
    // console.log(e);  console.log(email.current.value);  console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
    if (message == null) {
      if (!isSignInForm) {
        console.log("sign up Logic");
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            //  navigate('/browse');
            updateProfile(user, {
              displayName: userName.current.value,
              photoURL: "https://media.licdn.com/dms/image/C4D03AQFMoZ7OTW_qOw/profile-displayphoto-shrink_100_100/0/1661350686936?e=1716422400&v=beta&t=1FM9wzj7dDOPs6lBc6RF7d8LQMBO9mEkiVZbNacVXz4",
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName:displayName,
                    photoURL:photoURL,
                  })
                );
                // navigate("/browse");
              })
              .catch((error) => {
                // An error occurred
                setErrorMessage(error.errorMessage);
              });
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
            // ..
          });
      } else {
        console.log("sign in Logic");
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // navigate("/browse");
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
    }
  };

  /* 
  // sign in
  const handleButtonClick = (e)=>{
    //validate form data 
    // console.log(e);  console.log(email.current.value);  console.log(password.current.value);

    const message = checkValidData(email.current.value,password.current.value);
    console.log(message);
    setErrorMessage(message) 
    if(message == null){
      console.log('signIn login Logic'); 
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
         console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage( errorCode + ' ' + errorMessage)
      });
      
    }
  }
  // sign up
 const handleButtonSignUpClick =()=>{
    const message = checkValidDataSignUp(displayName.current.value,email.current.value,password.current.value);
    console.log(message);
    setErrorMessage(message)
    if(message == null){
      console.log('signUp login Logic');

      createUserWithEmailAndPassword(auth,  email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ' ' + errorMessage)
        // ..
      });
    }
  }
*/

  return (
    <div className="relative">
      <Header></Header>
      <div className="absolute bg-gradient-to-b from-black opacity-80 w-full h-screen z-[1]"></div>
      <div>
        <img
          className="w-full z-[0] absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-[3] bg-black w-3/12 p-12 left-0 right-0 my-40 mx-auto text-white bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* {
          !isSignInForm ? 
          <input type='text' placeholder='User Name' className='p-3 mx-2 my-3 rounded-md w-full bg-gray-500 bg-opacity-30'/> : <></>
        } */}
        {!isSignInForm && (
          <input
            type="text"
            ref={userName}
            placeholder="User Name"
            className="p-3 mx-2 my-3 rounded-sm w-full bg-gray-500 bg-opacity-30"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-3 mx-2 my-3 rounded-sm w-full bg-gray-500 bg-opacity-30"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 mx-2 my-3 rounded-sm w-full bg-gray-500 bg-opacity-30"
        />
        <p className="text-red-800 font-bold mx-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="mx-2 my-8 p-4 bg-red-700 rounded-md w-full "
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* {
          (isSignInForm) ? (<button onClick={handleButtonClick} className='mx-2 my-8 p-4 bg-red-700 rounded-md w-full '> Sign In</button>) 
          : (<button onClick={handleButtonSignUpClick} className='mx-2 my-8 p-4 bg-red-700 rounded-md w-full '>Sign Up</button>)
        } */}
        <p className="mx-2 text-base cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Existing User? Sign in now."}{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
