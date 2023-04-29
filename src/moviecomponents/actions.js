import React from 'react'
import Card from '../Components/Card'
import '../style.css'

export default function Actions({movies}) {
  const Actions = movies.filter(movie=>movie.genre[0]=="Action" || movie.genre[1]=="Action")
  return (
    <div id="catLen">
      <h1>Action Movies</h1>
      <div id='category'>
      {
        Actions.map((drama)=>{
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