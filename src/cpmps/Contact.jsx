import React from 'react'
import {Link} from 'react-router-dom' ;

export default function Contact() {
  return (
    <div>
        <h1>this is Contact page</h1>
        <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

