// function runner(time = Math.floor(Math.random() * 6000) + 2000) { // random number between 2000 and 8000
//     return new Promise((resolve, reject) => setTimeout(() => resolve(time), time))
// }
// const totalRunners = 10; // Could be any number here
// const runnersCompeting = Array.from({ length: totalRunners }, () => runner); // Creating an array of runners to compete
// const runnersRacing = runnersCompeting.map((runner) => { // start runners
//     return runner()
// })
// // do Promise.all it will give us an array containing all the result times of runners.
// Promise.all(runnersRacing).then((result) => {
//     console.log('result '+result)
//     // convert array of results into seconds by using .map methods
//     const msToSeconds = result.map((item) => { return item / 1000 })
//     // use reduce method to find smallest value in the array.
//     // smallest value represents the fastest runner
//     const fastestRunner = msToSeconds.reduce((a, b) => a <= b ? a : b)
//     console.log(`The fastest Runner completed the race in ${fastestRunner} Seconds`)
// }
// )



function runner(time = Math.floor(Math.random() * 6000) + 2000) { // random number between 2000 and 8000
    return new Promise((resolve, reject) => setTimeout(() => resolve(time), time))
}

const totalRunners = 1000000; // Could be any number here

const runnersCompeting = Array.from({ length: totalRunners }, () => runner); // Creating an array of runners to compete
var t0 = new Date().getTime();
const runnersRacing = runnersCompeting.map((runner) => { // start runners
    return runner()
})


// runner().then(data =>{
//         console.log(`${data/1000} seconds `);
//     }).catch(error=>{
//         console.log(error);
//     })


Promise.all(runnersRacing).then((data) => {
    console.log(data);
    const smallest = data.reduce((a, b) => a<=b ? a : b)
    console.log(smallest/1000);
}).catch(error => {
    console.log(error);
});



var t1 = new Date().getTime();

console.log(t1 - t0) // 16 ms 