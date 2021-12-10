
// Q1 Log out the text Called after 2.5 seconds after the script is loaded.

const msgPrinter = () => console.log('Q1:  Called after 2.5 seconds');
const timer = () => setTimeout(msgPrinter,2500);
window.addEventListener('load', timer);
 
//Q2 Create a function that takes 2 parameters:Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function msgPrinterWith2Param(timer, msgPrinter){
   setTimeout(() => console.log(msgPrinter), timer*1000);
}

msgPrinterWith2Param(3, 'Q2:  hello this is printed in 3 second');
msgPrinterWith2Param(5, 'hello this is printed in 5 second');
msgPrinterWith2Param(10, 'hello this is printed in 10 second'); 

// Q3 log out/called after 5 second the button is clicked

const clickBtn = document.querySelector('#buttonQ3');
clickBtn.addEventListener('click',()=> {
    console.log('button clicked - now, wait patiently for 5 sec.');
    msgPrinterWith2Param(5, 'this is called after 5 seconds by clicking button')
    }); 

// Q4 Create two functions and assign them to two different variables. The only thing the third function should do is call the provided parameter function. 
   //normal function

function earthLogger1() { console.log('Earth')};
function saturnLogger1() { console.log('Saturn')};
function planetLogFunction1(callback) { callback()}

planetLogFunction1(earthLogger1);
planetLogFunction1(saturnLogger1); 

// Q4 alternate way
  //arrow function

const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');
const planetLogFunction = (callback) => callback()

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger); 

// Q5 Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

let button = document.getElementById("get-location");
let locationlink = document.querySelector('#locationlink');
let locationPara = document.querySelector('#locationPara');

button.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    // locationPara.innerText= ` Your location is ${lat.toFixed(2)}° Lattitude by ${ long.toFixed(2)}° Longitude`
  });
});

// Q6 : adding google map to users/device location

let button1 = document.getElementById("get-location");
let locationlink1 = document.querySelector('#locationlink');

button1.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    locationlink1.href= `https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&amp;output=embed`;
    locationlink1.innerText= ` You are located at ${lat.toFixed(2)}° Lattitude by ${ long.toFixed(2)}° Longitude`
  });
});

// Q7 Create a function called runAfterDelay.When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

 function runAfterDelay(delay, callback){
  setTimeout( callback,delay*1000);
}
runAfterDelay (4, function(){
  console.log('should be logged after 4 second');
});
runAfterDelay (2, function(){
  console.log('should be logged after 2 second');
  
});
 
//  Q8 double click check 

let clickCountArray = [];
const button8 = document.querySelector('#Q8-doubleClass');
button8.addEventListener('click',doubleClickFunction);

function doubleClickFunction(){
clickCountArray.push('click');

 if(clickCountArray.length === 1){
   document.querySelector('#doubleClass').innerHTML = 'clicked 1 time';
  console.log('clicked 1 time');
}else if (clickCountArray.length === 2){
  document.querySelector('#doubleClass').innerHTML = 'double clicked';
  console.log('double clicked');
} else {
  document.querySelector('#doubleClass').innerHTML = 'clicked more than two times';
  console.log('clicked more than two times');
}

setTimeout(function (){
  button8.removeEventListener('click',doubleClickFunction);
},500);
}
 
//  Q9  jokeCreater
// why changes in place of parameter matters ?!!

let shouldTellFunnyJoke = true ;
function logFunnyJoke (){
console.log('funny joke');
}

function logBadJoke (){
console.log('bad joke');
}

function jokeCreator( shouldTellFunnyJoke, logFunnyJoke, logBadJoke ){
  
  if(shouldTellFunnyJoke){
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator( true, logFunnyJoke, logBadJoke );
jokeCreator( false, logFunnyJoke, logBadJoke );
jokeCreator( true, logBadJoke, logFunnyJoke ); //??
jokeCreator( false, logBadJoke, logFunnyJoke );//??
