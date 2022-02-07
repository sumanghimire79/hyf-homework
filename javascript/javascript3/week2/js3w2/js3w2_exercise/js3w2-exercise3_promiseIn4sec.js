
  //exercise 3
        //1.Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.
        //2.Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.
  
  const promise1 = new Promise((resolve, reject)=>{
  setTimeout(() => {
    // resolve('yes hello');
    reject("no hello");

  }, 4000);
  })
  
  promise1
  .then((data)=>{
  console.log('exercise 3 == ',data);
  })
  .catch((err)=>{
    console.log('exercise 3 == ',err);
  })
  
  
  //solved in class

const iamatHome = false;
const promisefor4Sec = new Promise((resolve, reject) =>{
  setTimeout(()=> {
  if(iamatHome){
      resolve('resolve message');
   } else {
     reject('reject message');
   }
  },5000)
})
  
promisefor4Sec
.then((resolveData) => {
  console.log('resolved: '+ resolveData)
})
.catch((errData)=>{
  console.log('error: '+errData)
})
