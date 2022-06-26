
import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
//import { originals } from '../../URLs';

function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        //setMovie(response.data.results[3],[4])
        const movie_num = Math.floor(Math.random() * response.data.results.length);
                  setMovie(response.data.results[movie_num]);
      })
    }, [])

    // function truncate(str, n) {
    //     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    // }

    return (
      <div
      style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path :""})`}}
       className='banner'>
          
          <div className='content'>
              <h1 className='banner__title'>{movie ? movie.title : ""}</h1>
              <div className='banner_buttons'>
                  <button className='button' >Play</button>
                  <button className='button'>My Playlist</button>
              </div>
              {/* <h5 >Date: {movie ? movie.release_date :""}</h5> */}
              <h5 className='banner__language'>Language: {movie ? movie.original_language :""}</h5>
              <h5 className='banner__rating'>Rating: {movie ? movie.vote_average :""}</h5>
              <h1 className='banner__description'>{movie ? movie.overview : ""}</h1>
          </div>
          <div className="fade_bottom"></div>
      </div>
      
    )
}

export default Banner