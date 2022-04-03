const express = require('express');
const router = express.Router();

const movies = require('../data/movies.json');

router.get('/', async(request, response) => {
    // console.log(movies);
    // response.send({ data: [] });
    response.send(movies);
});
// this route was needed to keep beofre befor because /query and /:id routerr pattern looks the same
// so /query may never run. so by keeping up it runs the code first so it works.
router.get('/query', async(request, response) => {
    const beginYear = request.query.a;
    const endYear = request.query.b;
    const moviesID = movies.filter(
        (movie) => movie.year > beginYear && movie.year < endYear,
    );
    response.send(moviesID);
});

router.get('/rating', async(request, response) => {
    const moviesID = movies.filter(
        (movie) =>
        movie.year > request.query.beginYear &&
        movie.year < request.query.endYear &&
        movie.rating > request.query.rating,
    );
    response.send(moviesID);
});
router.get('/:id', async(request, response) => {
    const ID = Number(request.params.id);
    const moviesID = movies.filter((movie) => movie.id === ID);
    response.send(moviesID);
});
router.get('/bestMovies', async(request, response) => {
    const bestMovies = movies.filter((movie) => movie.rating > 8);
    response.send(bestMovies);
});
router.get('/latestBestMovies', async(request, response) => {
    const latestBestMovies = movies.filter(
        (movie) => movie.rating > 8 && movie.year > 1980,
    );
    response.send(latestBestMovies);
});

router.get('/latestBestMovies/:id', async(request, response) => {
    const ID = Number(request.params.id);
    const moviesID = movies.filter((movie) => movie.id === ID);
    response.send(moviesID);
});
router.get('/:beginYear/:endYear', async(request, response) => {
    const beginYear = request.params.beginYear;
    const endYear = request.params.endYear;
    const moviesID = movies.filter(
        (movie) => movie.year > beginYear && movie.year < endYear,
    );
    response.send(moviesID);
});

router.get('/:beginYear/:endYear/:rating', async(request, response) => {
    const beginYear = request.params.beginYear;
    const endYear = request.params.endYear;
    const rating = request.params.rating;
    const moviesID = movies.filter(
        (movie) =>
        movie.year > beginYear && movie.year < endYear && movie.rating > rating,
    );
    response.send(moviesID);
});
module.exports = router;