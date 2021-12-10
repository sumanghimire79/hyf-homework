
// this fucntion, myfunciton5(), can't be called because it is stored in variable .
// variable is only insilized but not decalered in memory location before execution.
//so can not be called. not hoisted !!

// myfunciton5(); 
myfunciton8(); // value available in memory location before code execution so can be called because of hoisting 


// function inside array 
const functionArray = [myfunciton1,myfunciton2,myfunciton3];

function myfunciton1(){
    console.log('function 1');
}

function myfunciton2(){
    console.log('function 2');
}

function myfunciton3(){
    console.log('function 3');
}
 
// calling function in an array
for (let i = 0; i < functionArray.length; i++) {
    functionArray[i]()
}


// function inside array 
const functionArray1 = 
[ function myfunciton5() {
    console.log('function 5');
},
function myfunciton6() {
    console.log('function 6');
},
function myfunciton7() {
    console.log('function 7');
}];

//calling function inside an array
for (let i = 0; i<functionArray1.length; i++){

    functionArray1[i]()
}



function myfunciton8() {
    console.log('function 8');
}



// calling function inside object
const myObj = {
    myKey: function myFunctionX() {
        console.log('my function inside object');
    }
};

myObj.myKey();


