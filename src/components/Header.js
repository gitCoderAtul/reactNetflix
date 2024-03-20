import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut = ()=>{ 
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  return (
    <div className='bg-gradient-to-b from-black w-full flex justify-between items-center px-16 absolute z-[2]'>
      <img className='w-44'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt="logo">
      </img>
      {
        user && (
          <div className='flex items-center'>
            <span>{user.displayName} </span>
            <img alt="photo" src={user.photoURL} className='border-solid border-gray-600 rounded-[50%] w-10 h-10 mx-6'></img>
            <button className='text-white' onClick={handleSignOut}> Sign Out</button>
          </div>
        )
      }
      
    </div>

  )

}
export default Header 