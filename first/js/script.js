"use strict";

const numberOfFilms = +prompt('FIlms you count?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gneres: [],
    privat: false
};

const a = prompt('Last Film view?', ''),
      b = prompt('Rating', ''),
      c = prompt('Last Film view?', ''),
      d = prompt('Rating', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);