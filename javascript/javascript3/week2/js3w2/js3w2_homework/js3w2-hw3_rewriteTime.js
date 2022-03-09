
//Question3:
// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
// The getCurrentPosition function is probably going to throw an error, 
// but that is fine. As long as you can use it as a promise.


// set Timeout Promise
function setTimeoutPromise(time) {
  return new Promise((resolve, reject) => {

    if (isNaN(time)) {
      reject('Rejected set Timeout promise ')
    } else {
    setTimeout(() => {
      resolve('Resolved set Timeout promise')
      }, time)
    }
  })
}

setTimeoutPromise('3000').then((resolveData) => {
  console.log( resolveData);
}).catch((rejectData) => {
  console.log(rejectData);
}); 


// getCurrentLocation promise : TRY1
function getCurrentLocation(resolveAfter) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success, error,options);

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    let positionString;
    function success(pos) {
      const crd = pos.coords;
      positionString = `Succes logged out after  ${resolveAfter} sec.
      Your current position is: 
      Latitude : ${crd.latitude}
      Longitude: ${crd.longitude}
      Accuracy : More or less ${crd.accuracy} meters.`;
     
    }

    let errorString;
    function error(err) {
      errorString = ` Rejected: logged out after  ${resolveAfter} sec. ${err}`
   
    }
    setTimeout(() => {
      resolve('Resolved current location promise: ' + positionString)
      reject('Rejected current location promise: '+ errorString);
    }, resolveAfter * 1000);
  
  });
}

getCurrentLocation(3).then((data) => {
  console.log(`${data}`);
}).catch((error) => {
  console.log(`${error}`); 
});;



// getCurrentLocation promise : TRY2 
var getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

getPosition()
  .then((position) => {
    console.log(position);
  })
  .catch((err) => {
    console.error(err.message);
  });




