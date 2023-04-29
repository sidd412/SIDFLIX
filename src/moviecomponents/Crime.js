import React from 'react'
import Card from '../Components/Card'
import '../style.css'

export default function Crime({movies}) {
  const Crime = movies.filter(movie=>movie.genre[0]=="Crime" || movie.genre[1]=="Crime")
  return (
    <div id="catLen">
      <h1>Crime Movies</h1>
      <div id='category'>
      {
        Crime.map((drama)=>{
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
