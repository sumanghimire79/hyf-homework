
//exercise 5
// Using async await
// 1.Fetch the astronauts
// 2.After the astronauts has been fetched, fetch movies using this api
// 3.Log out the movies


/* 

 async function getAstronauts(){
  const astronautsResponse = await fetch("https://yesno.wtf/api");
  const astronauts = await astronautsResponse.json();
  // return astronauts;
  console.log(astronauts);

}

async function getMovies() {

  const movieResponse = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
  const movies = await movieResponse.json();
  const movieName = await movies.map((movie) => movie.title).filter((title) => {
    if (title.includes('sum')) {
      console.log(title);
    }
  });

  return movieName; // is this the way to do it?? what about astronauts?? how to return astronauts and movies both at a time??
}


async function asyncAwaitAStroMovies() {
  try {
  await getAstronauts();
  await getMovies();
  } catch (err) {
    throw "Fetchin the astronauts went wrong";
  }
}
const asyncAwaitPromis = asyncAwaitAStroMovies();
console.log('exercise 5 ==', asyncAwaitPromis);



 */


//*************exercise 5 in anotherway******** */


// get Astronauts AND movie in the same function using self calling function 

async function xx() {
try {
  const astronautsResponse = await fetch("http://api.open-notify.org/astros.json");
  const astronauts = await astronautsResponse.json();
  console.log(astronauts);
  const yesNoAnswer = await astronauts.people.name;
  console.log(yesNoAnswer);

  const movieResponse = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
  const movies = await movieResponse.json();
  const movieName = await movies.map((movie) => movie.title).filter((title) => {
    if (title.includes('sum')) {
      return title;
    }
  });
  console.log(movieName,yesNoAnswer);
return {movieName,yesNoAnswer}
   
} catch (error) {
  console.log('error is my error'+error);
}
 

}
const yy = xx();
console.log(yy);
// .then((movie=>{console.log(movie)}));
