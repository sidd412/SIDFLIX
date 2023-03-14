import React from 'react'
import {Link} from 'react-router-dom' ;

export default function Blog() {
  return (
    <div>
        <h1>this is blog page</h1>
        <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
