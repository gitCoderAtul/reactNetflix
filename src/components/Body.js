import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../Redux/reducer/userSlice";

function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  /* // onAuthStateChanged move to common child component and we will remove navigate from other component. and commonly apply to onAuthStateChanged
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName:displayName,
            photoURL:photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
*/
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default Body;
