import React from 'react'
import '../style.css'
import {auth,app} from './Firebase'
import {signOut } from "firebase/auth";

export default function Logout(props) { 

    function logoutUser(e){
        e.preventDefault() ;

        signOut(auth).then(() => {
          alert('Sign-out successful.')
          props.setIsUser(false)
        }).catch((error) => {
          console.log(error)
        });
        
    }
  return (
    <>
      <button id='bt' style={{backgroundColor:"grey" , padding:"5.5px" , borderRadius:"5px"}} onClick={logoutUser}>Logout</button>
    </>
  )
}