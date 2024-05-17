import React, { Component, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = ()=> {


        return ( 
            <ul className="movies">
                <MovieItem/>
            </ul>
        );
    
}
 
export default Movies;