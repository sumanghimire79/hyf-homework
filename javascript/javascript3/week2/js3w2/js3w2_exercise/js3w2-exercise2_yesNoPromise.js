
  //exercise 2
     //2.1 Using promises: fetch yes or no from this api: https://yesno.wtf/api. log out the answer

  fetch("https://yesno.wtf/api")
  .then((res)=>res.json())
  .then((yesData)=>{
    console.log('exercise 2.1 ==', yesData.answer);
  })
  .catch((noData)=>{console.log('exercise 2.1 == ',noData.answer);})
  

// alrernate way : use fetch .then by creating promise
// we do not need to create promise because fetch return promise. we are only dealing with promises here in this case



//alrernate way async/await

;(async ()=>{
  try {
    const response =  await fetch("https://yesno.wtf/api");
    const newPromise = await response.json();
    console.log(newPromise.answer);
  } catch (error) {
    console.log('this is error my one ');
  }
})();




  /* 
    //2.2  Using promises: Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message
  fetch("https://knajskdskj.jasdk")
  .then((res)=>res.json())
  .then((yesData)=>{
    console.log('exercise 2.2 == ',yesData);
  })
  .catch((noDataa)=>{console.log('exercise 2.2 == ',noDataa);}) */