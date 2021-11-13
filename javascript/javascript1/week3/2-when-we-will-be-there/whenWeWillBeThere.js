/* suman ghimire js1-w3 when we will be there */

// solution one //

/* function that feeds two arguments speed and km.  */

function travelTimeCalculator(speed, km) {
  let takenTime = km / speed;
  const hours = Math.floor(takenTime);
  const minutes = Math.floor((takenTime - hours)*60);
   return `${hours} hours and ${minutes} minutes`;
  };
const travelTime = travelTimeCalculator(50, 432);
console.log( "solution one: "+ travelTime); // 8 hours and 38 minutes


// solution two: separate two functions

// calculates the travel time and returns the value by calling another function -- time_convert1(takenTime1)
function travelTimeCalculator1(speed, km) {
  let takenTime1 = km / speed;
  return time_convert1(takenTime1);
};
 
function time_convert1(takenTime1) {
  const hours = Math.floor(takenTime1);
  const minutes = Math.floor((takenTime1 - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime1 = travelTimeCalculator(50, 432);
console.log("Solution two: "+travelTime1); // 8 hours and 38 minutes
