import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Redux/reducer/userSlice';
import { LOGO_URL } from '../utils/constants';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);

  // commonly apply sign in and sign out
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
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
          }), 
        );
        navigate('/browse') 
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/') 
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = ()=>{ 
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate('/');
    }).catch((error) => {
      // An error happened.
      // navigate('/error');
    });
  }

  return (
    <div className='bg-gradient-to-b from-black w-full flex justify-between items-center px-16 absolute z-[2]'>
      <img className='w-44'
      src={LOGO_URL}
        alt="logo">
      </img>
      {
        user && (
          <div className='flex items-center'>
            <span className='text-white font-semibold'>{user.displayName} </span>
            <img alt="photo" src={user.photoURL} className='border-solid border-gray-600 rounded-[50%] w-10 h-10 mx-6'></img>
            <button className='text-white' onClick={handleSignOut}> Sign Out</button>
          </div>
        )
      }
      
    </div>

  )

}
export default Header 