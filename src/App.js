import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Header from './Components/Header'
import TVshow from './Components/TVshow'
import AllMovies from './moviecomponents/AllMovies'
import NoAccess from './Auth/NoAccess'
import Footer from './Components/Footer'

export default function App() {

  const [isUser , setIsUser] = useState(false)

  const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '937ed5ced7mshb84dc4c211adb54p15df81jsn500a04a8e5f5',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

const [movies, setMovies] = useState([])

useEffect(()=>{
    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(res => {
            console.log(res) ;
            setMovies(res) ;
        })
        .catch(err => console.error(err));
},[]);


  return (
      <BrowserRouter>
      <Header movies={movies} setIsUser={setIsUser} isUser={isUser} />
      <Routes>
        <Route path="/" element={ isUser? <AllMovies movies={movies} /> : <NoAccess/> }/>
        <Route path="/tvshow" element={isUser? <TVshow/> : <NoAccess/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}
