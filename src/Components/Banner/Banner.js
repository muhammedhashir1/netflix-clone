import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'

import axios from '../../axios'
import "./Banner.css"
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      //setMovie(response.data.results[3],[4])
      const movie_num = Math.floor(Math.random() * response.data.results.length);
                setMovie(response.data.results[movie_num]);
    })
  }, [])
  
  return (
    <div
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path :""})`}}
     className='banner'>
        
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button' >Play</button>
                <button className='button'>My Playlist</button>
            </div>
            {/* <h5 >Date: {movie ? movie.release_date :""}</h5> */}
            <h5>Language: {movie ? movie.original_language :""}</h5>
            {/* <h5>Rating: {movie ? movie.vote_average :""}</h5> */}
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
    
  )
}

export default Banner