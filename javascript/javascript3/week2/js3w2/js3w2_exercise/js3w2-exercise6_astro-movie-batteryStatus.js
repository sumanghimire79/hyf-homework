
//Exercise 6
//Get the astronauts and the movies at the same time. 
//Log out the movies and the battery status when both promises has been resolved.

// to solve exercise , exercise 5 is taken into account
// Using async await
// 1.Fetch the astronauts
// 2.After the astronauts has been fetched, fetch movies using this api
// 3.Log out the movies

 


; (async () => {
    try {
        const astronautsResponse = await fetch("https://yesno.wtf/api");
        const astronauts = await astronautsResponse.json();
        // return astronauts;
      
        const movieResponse = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        const movies = await movieResponse.json();
        
        const movieName = await movies.map((movie) => movie.title).filter((title) => {
            if (title.includes('sum')) {
                return `${title}`
            }
        }); 
        //promise all will fetch the data and give in the same time
        const promiseAll = await Promise.all([astronauts, movieName])
        console.log(promiseAll);

       let battery = await navigator.getBattery();
       const getBatteryJason = await battryStatus(battery);

       async function battryStatus(battery) {
        console.log('battery level: ', battery.level);
    
        // ... and any subsequent updates.
        battery.onlevelchange = function () {
            console.log('battery level changed: ', this.level);
        };
    
        battery.onchargingchange = function () {
            const batteryStatus = battery.charging ? 'charging' : 'not charging';
            console.log(batteryStatus);
        };
    
        battery.ondischargingtimechange = function () {
            const ondischargingtimechange = battery.dischargingTime / 60
            console.log(ondischargingtimechange);
        };
    };  
            

    } catch (error) {
        console.log(`data not found ${error}`);
    }

})();


