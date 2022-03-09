
  //exercise 4
    //Create a function that returns a promise, that you can use like this:
        // YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
        // resolves with a yes
        // resolves with a no
        // or rejects
        // Look into Math.random()
   
 // promise creation phase
 function promisFunct(){
//  const yesNoPromise = new Promise((resolve, reject)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const rand= Math.floor(Math.random()*2);
  if(rand===0){
     resolve("yes");
    }else{
      resolve("no");
    }
      reject("errors");
    }, 4000);
  })

  // return yesNoPromise ; // instead returning here we can directly write return at the beginning of new keyword of promise creation 
}
  
    // promise consumption phase using .then and .catch
  
    // yesNoPromise // if promise is not wrapped in the finction then instead calling function, the name of the promise is called and .then is called
    promisFunct().then((data) => {
      // console.log(` Exercise 4 == The answer is '${data}'`);
    })
    .catch((error) => {
      // console.log(` Exercise 4 == The  error answer is: ${error}`);
    });
  
   // exercise 4.1: The above example show how to consume the promise using promises. Now try consume the YesNoFail4Seconds using async/await
   // promise consumption phase using async/await 
  async function promiseExercise4() {
      try {
        // const resolveMsg = await yesNoPromise; // promise is wrapped in function so insead calling promise, it is calling function 
        const resolveMsg = await  promisFunct();
          // console.log('resolve msg from AsyncAwait: ', resolveMsg);;
      } catch (err) {
          // throw "catch/error message of asys/await is: " + err;
      }
  }
  const promiseExercise = promiseExercise4();
  // console.log('exercise 4 ==', promiseExercise);

  // solved in class

function promiseinClass() {
  return new Promise((resolve, reject) => {
    const randomNmber = Math.floor(Math.random() * 3);
    console.log(randomNmber);
  
    setTimeout(()=>{
      if (randomNmber == 0) {
        resolve('resolve yes')
      } else if (randomNmber == 1) {
        resolve('resolve no')
      } else if (randomNmber == 2)
      reject('error')
  
    },5000)

    })
   
}

// .the and .catch
promiseinClass().then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})


//async/await , .try .catch
// async/await using selfcalling function
;(async () => {
  try {
     await promiseinClass();
    console.log('asyncAwait : '+callPromise);
  } catch (error) {
    console.log('asyncAwait : '+ error);
  }
}
)();
