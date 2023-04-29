import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../style.css'
import ModalSearch from '../moviecomponents/ModalSearch'
import Signin from '../Auth/Signin'
import Logout from '../Auth/Logout'

export default function Header({movies , isUser , setIsUser}) {
  return (
    <div id='header'>
      <div id='logo'><Link className="links" to='/'>SIDFLEX</Link></div>
      <div id='text'>
      <NavLink className="links" to='/'>Movies</NavLink>
      <NavLink className="links" to='/tvshow'>TVshow</NavLink>
      <div>{isUser ? <Logout setIsUser={setIsUser} /> :  <Signin isUser={isUser} setIsUser={setIsUser} /> }</div>
      <div> <ModalSearch movies={movies} isUser={isUser} /> </div>
      </div>
    </div>
  )
}
