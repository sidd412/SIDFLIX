import React , {useState} from 'react'
import { MDBInput, MDBCol } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Components/Card';

export default function SearchBar({movies}) {
  const [ searchResult, setSearchResults] = useState([])

  const handleSubmit = (e)=>e.preventDefault();
  const handleChange = (e)=>{
    if(!e.target.value ){ setSearchResults([]); } 
    else{ const resultArray = movies.filter(movie=>movie.title.includes(e.target.value)||movie.director[0].includes(e.target.value))
    setSearchResults(resultArray)}
    console.log(searchResult) ;
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <MDBCol md="6">
      <MDBInput hint="Search"  id="search" onChange={handleChange} type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
    </MDBCol>
      </form>
         
         <div id="searchedCards">
         {
          searchResult.map((drama)=>{
            return (
              <>
              <div key={drama.id} id="searchedCard">
              <img src={drama.image} alt={drama.title} id="poster" />
              <div id='genre'>{drama.genre[0]}</div>
              <div>IMDB: {drama.rating}/10</div>
              <div id='title'>{drama.title}</div>
              </div>
               
              </>
            )
          })
         }
         </div>
    

    </>
  )
}
