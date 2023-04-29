import React, {useState} from 'react'
import '../style.css'


export default function Card({drama}) {

    const[isHover, setIsHover] = useState(false) ;

    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

       function mouseOver(){
        setIsHover(true)
        console.log(isHover)
       }
    
     function mouseOut(){
      setIsHover(false)
      console.log(isHover)
     }

function handlePlay(){
  setIsHover(!isHover)
}

  return (
    <div>
       {
   isHover ? <video src={trailer} alt={drama.image} id="poster" width="320" height="235" autoPlay controls loop onMouseLeave={mouseOut}  ></video>
              : <img src={drama.image} alt={drama.title} id="poster" onMouseEnter={mouseOver} />
            }
            <div id='sid1'>
              <div>
                 <div id='genre'>{drama.genre[0]}</div>
                 <div>IMDB: {drama.rating}/10</div>
              </div>
              <div id='play'>  <button onClick={handlePlay} >Play</button> </div>
            </div>

              <div id='title'>{drama.title}</div>
            
    </div>
  )
}
