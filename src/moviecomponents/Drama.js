import React from 'react'
import Card from '../Components/Card';
import '../style.css'

export default function Drama({movies}) {
  
  const Dramas = movies.filter(movie=>movie.genre[0]=="Drama" || movie.genre[1]=="Drama")

  return (
    <div id="catLen">
      <h1>Drama Movies</h1>
      <div id='category'>
      {
        Dramas.map((drama)=>{
          return (
          <div key={drama.id}  id='card'>
              <Card  drama={drama} />
          </div>
          )
        })
      }
      </div>
    </div>
  )
}

