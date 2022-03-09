

console.log('js3w2-prepvideo-2');

const mypromice = new Promise((resolve,reject)=>{
const msg = 'we waied for 5 sec'
    // console.log(typeof resolve);
    console.log('before time out');

    setTimeout(() => {
        reject(msg);
    }, 5000);
   
});

console.log(mypromice);
mypromice
.then((data)=>{
    console.log('done; '+data);
})
.catch((errData)=>{
    console.log('error '+ errData);
});


 
// video number 3
console.log('js3w2-prepvideo-3');

const fetchPromice = fetch("https://yesno.wtf/api")
console.log(typeof fetchPromice);
console.log(fetchPromice);

fetchPromice
.then((res)=>res.json())
.then((yesData)=>{
    console.log('js3w2-prepvideo-3 yesData==', yesData);
    })
.catch((noData)=>{
    console.log('js3w2-prepvideo-3 Nodata== ',noData);
    });

// video number 3 -- another way, passing function in anothr way
    // it looks so cool passing funchtion like this :D ??const fetchPromice2 = fetch("https://yesno.wtf/api")

const fetchPromice2 = fetch("https://yesno.wtf/api")

const forJson = (res)=>res.json();
const forThenYesdata = (yesData)=>{
    console.log('js3w2-prepvideo-3 yesData==', yesData);
    }
const forCatchNoData = (noData)=>{
    console.log('js3w2-prepvideo-3 Nodata== ',noData);
    }

fetchPromice2.then(forJson).then(forThenYesdata).catch(forCatchNoData);
  
 



// video number 4

// promise creation phase
const mypromise2 = new Promise((resolve, reject) => {
    const resolveMsg = ' fullfilled: we waied for 5 sec';
    const rejectMsg = ' Rejected message after 5 sec ';

    setTimeout(() => {
      
        // resolve(resolveMsg);// order of these two function matter?? seems yes !
        reject(rejectMsg);
    }, 5000);

    setTimeout(() => {
        // reject(rejectMsg);
    }, 5000);

});


// promise consuming phase : method 1: .then and .catch
console.log(mypromise2);
mypromise2
    .then((data) => {
        // console.log('done in promice.then; '+data);
        // console.log(mypromise2);
    })
    .catch((errData) => {
        // console.log('error from promice.catch '+ errData);
        // console.log(mypromise2);
    });

// promise consuming phase : method 2: async and await

async function asyncAwaitExample() {
    try {
        console.log('before asyncAwait');
        const data = await mypromise2;
        console.log('done from asyncAwait : ' + data);
        console.log('after asyncAwait');
        console.log(mypromise2);
    } catch (errData) {
        console.log('error from asynAwait: ' + errData);
        console.log(mypromise2);

    }
}
asyncAwaitExample()
