import axios from './axious';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Row.css";
import Poster from './Poster';

function Row(props) {


    Row.prototype = {
        title: PropTypes.string.isRequired,
        fetchUrl: PropTypes.string.isRequired,
        isLargeRow: PropTypes.bool

    }
    Row.defaultProps = {
        isLargeRow: false
    };


    const { title, fetchUrl, isLargeRow } = props;
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }


        fetchData();

    }, [fetchUrl]);








    return (

        <div className="row">

            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => (
                    <Poster
                        key={movie.id}
                        img={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        name={movie.name}
                        isLargeRow={isLargeRow}
                        overview={movie.overview}
                    />
                )
                )}
            </div>





        </div>
    )
}

export default Row;


