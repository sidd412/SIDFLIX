import { useState } from 'react';
import React from 'react'
import './Login.css'

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function store(e){
    if(name && email && password){
    e.preventDefault() ;
      console.log(name, email, password)
      document.getElementById('para').innerHTML= `Welcome..... ${name}  ! ` ;
      localStorage.setItem('webName', name )
      localStorage.setItem('webEmail', email )
      localStorage.setItem('webPass', password )
      setName("") ;
      setEmail("") ;
      setPassword("") ;
      alert('You has been registered successfully')
    }
    else{
      alert('plaese enter all the fields')
      console.log('plaese enter all the fields')
    }
  }
    return (
      <>
      <div id='login'>
      <h1 id='para'>Welcome.....User !</h1><hr />
        <form action="" id='form'>
          <input className='inputs' value={name}   type="text"       onChange={(e) => setName(e.target.value)} placeholder='Enter your name'/><br />
          <input className='inputs' value={email} type="email"       onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'/><br />
          <input className='inputs' value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'/><br />
          <button className='inputs' type="submit" onClick={store}>Register</button>
          <a href="#">Have you alredy  an account ? </a>
        </form>
      </div>
      </>
    )
}

