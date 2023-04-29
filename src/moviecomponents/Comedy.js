import React from 'react'
import Card from '../Components/Card'
import '../style.css'

export default function Comedy({movies}) {
  const Comedies = movies.filter(movie=>movie.genre[0]=="Comedy" || movie.genre[1]=="Comedy")
  return (
    <div id="catLen">
      <h1>Comedy Movies</h1>
      <div id='category'>
      {
        Comedies.map((drama)=>{
          return (
          <div key={drama.id} id="card">
              <Card drama={drama}/>
          </div>
          )
        })
      }
      </div>
    </div>
  )
}