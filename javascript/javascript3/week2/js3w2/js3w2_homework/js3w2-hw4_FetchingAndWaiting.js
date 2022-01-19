// Question4: Fetching and waiting
    // 1.Do the 3 steps below using promises and .then.
    // 2.Do the 3 steps below using async/await
        // The 3 steps:
            // 1.Wait 3 seconds
            // 2.After 3 seconds fetch some data from any api you like
            // 3.Log out the data from the api

//dealing/consuming promise using .then and .catch function
// setTimeout(function () {
    console.log('logged after minimum 3 sec in .then/.catch');
    const fetchData = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
        .then((jsonData) => jsonData.json())
        .then((data) => {
            setTimeout(function () { console.log(' logged after minimum +3 sec: (after 6 seconds in total:) ', data); }, 3000)
        }).catch((error) => {
            console.log(error);
        })
    // }, 3000);


 // 2.Do the 3 steps below using async/await
 // dealing/consuming promise using async/await keywords with try and catch block
async function callin3Sec() {
    console.log('logged after minimum 5 sec: in async/await');
    try {
        const fetchData = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
        const fetchJson = await fetchData.json();
        setTimeout(()=>{
            console.log('ater +3 = 8 sec async/await',fetchJson);
            // console.log( `after +3 sec more: 5+3 = 8 sec in total async await`,` ${fetchJson}` );
        },3000)
        
    } catch (error) {
        console.log(error);
    }
}
setTimeout(() => callin3Sec(), 5000)



// Which way do you prefer, the promise way or the async/await way?
    // answer/reson: async/await is just explained as clean syntax, easily understandable, standard coding !!