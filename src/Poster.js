import React from 'react';
import PropTypes from 'prop-types';
import "./Poster.css";
Poster.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string,
    isLargeRow: PropTypes.bool,

};

function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
}

function Poster(props) {

    const { img, name, overview, isLargeRow } = props;

    return (

        <div className="poster">

            <img className={`poster__img ${isLargeRow && 'poster__img--large'}`}
                src={img}
                alt={name}
            />


            <div className="poster__detail">
                <span className="poster__title">{name}</span>
                <span className="poster__overview">{truncate(overview, 30)}</span>
            </div>
        </div>
    );
}

export default Poster;