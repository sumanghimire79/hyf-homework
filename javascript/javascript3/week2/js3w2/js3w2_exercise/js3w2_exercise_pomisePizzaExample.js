
// promise example pizza

// resolve and reject are just good name but it can be anything we can call
const orderPizzaPromise = new Promise((amrit, suman)=>{
  const pizzaMakingSuccess=true;
  setTimeout(() => {
    if (pizzaMakingSuccess) {
      amrit("I will bring pizza");
    }else{
      suman("Pizza was a mess");
    }
  }, 5000);
});

orderPizzaPromise
.then((pizza)=>{console.log('Pizza exercise == true :',pizza);})
.catch((error)=>{console.log('Pizza exercise == false :',error);}) 

  
  