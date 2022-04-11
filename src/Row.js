import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_Url= "https://image.tmdb.org/t/p/original/";

function Row( {title, fetchUrl, isLargeRow } ) {
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

    //This runs every time a row is loaded and brings in onfo from TMDB database
    useEffect(() => {
        //make asycnhornous call as it is making an call to outside api
        async function fetchData() {

            const request = await axios.get(fetchUrl);
            
            //this essentially pulls the base URL from the axios file 
            //and then appends the req URL from the given Row 
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    
    
    const handleClick = (movies) => {
        if(trailerUrl){
            setTrailerUrl('');
        } else {
            movieTrailer(movies?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch( (error) => console.log(error));
        }
    }


  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
        {movies.map(movies => (
            <img 
            key={movies.id}
            onClick={ () => handleClick(movies)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_Url}${
                isLargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}/>
            
        ))}
        </div>

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      

    </div>
  )
}


export default Row