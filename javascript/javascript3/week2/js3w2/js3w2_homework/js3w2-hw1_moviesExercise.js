//Question1: Fetch movies from the api:
// 1. Create an array of bad movies
// 2. Creat an array of bad movies since year 2000

 fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then((data) => data.json())
    .then((movies) => {
        movies.map((movie) => {
            const movieRating = movie.rating;
            let tag;
            if (movieRating >= 7) {
                tag = 'best movies';
            } else if (movieRating < 7 && movieRating > 2) {
                tag = 'average movies';
            } else if (movieRating <= 2) {
                tag = 'bad movies';
            }

            const tagObj = {
                movieTag: tag
            }

            const movieWithTag = {
                ...movie,
                ...tagObj
            }

            return movieWithTag;
        }).filter((allMovies) => {
            if (allMovies.movieTag === 'bad movies' && allMovies.year >= 2000) {

                console.log( [allMovies.year,allMovies.title]);
            }
        })

    }).catch((errorData) => {
        console.log('failed to fetch data', errorData);
    })

   