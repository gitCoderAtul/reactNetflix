import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Browse() {
  const navigate = useNavigate();
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
    <div>
      <Header></Header>
     <div className='pt-[74px]'>
       browse
     </div>
    </div>
    
   /* <div className='bg-black flex justify-between items-center px-16'>
      <div>
      <img className='w-44'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt="logo"/>
      </div>
      <div>
        <button className='text-white' onClick={handleSignOut}> Sign Out</button>
      </div>
    </div>
    */
  )
}

export default Browse