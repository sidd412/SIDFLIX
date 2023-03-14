import React from 'react'
import {Link} from 'react-router-dom' ;

export default function About() {
  return (
    <div>
        <h1>this is about page</h1>
        <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

