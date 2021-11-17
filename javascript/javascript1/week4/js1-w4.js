// Suman Ghimire js1 w4

let splitArray = [];
let theNameArray = [];
let toDoList = [];
const calculateArray = [];
function getReply(command) {
    let splitText = command.split(` `);
    if (command.includes('Hello my name is') || command.includes('my name') || command.includes('i am')) {
        splitArray.push(splitText);
        let result = "";
        let theName = "";
        for (let name of splitArray) {
            result = name;
            theName = result[result.length - 1];
            theNameArray.push(theName);
        }
        function userName() {
            let result = "Nice to meet you " + theName;
            console.log(result);
        }
        userName();
    } else if (command.includes("What is your name") && theNameArray.length >= 1) {
        function userName1() {
            let sentence = "Your name is " + theNameArray[0];
            console.log(sentence);
        } userName1();
    } else if (command == "" || theNameArray.length == 0) {
        console.log("Your have mention your good name first");
    }
    else if (command.includes("add fishing")) {
        toDoList.unshift("fishing");
        console.log("fishing added to your todo list");
    } else if (command.includes("add singing shower")) {
        toDoList.push("singing in shower");
        console.log("Singing in the shower added to your todo list ");
    } else if (command.includes("remove fishing")) {
        toDoList.shift()
        console.log('fishing removed from your todo list ');
    } else if (command.includes("todo list")) {
        console.log("your todo list has only " + toDoList.length + " activity. That means " + '"' + toDoList + '"' + " activity. !");
    } else if (command.includes("today") || command.includes("date")) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date();
        console.log("Todays date is : " + date.getDate() + " of " + monthNames[date.getMonth()] + ", " + date.getFullYear());
    } else if (command.includes("+") || command.includes("*") || command.includes("-") || command.includes("/") || command.includes("%")) {
        calculateArray.push(splitText[2]);
        calculateArray.push(splitText[4]);
        console.log(calculateArray);
        if (command.includes("+")) {
            console.log("The Answer is : " + (Number(calculateArray[0]) + Number(calculateArray[1])));
        } else if (command.includes("*")) {
            console.log("The Answer is : " + (Number(calculateArray[0]) * Number(calculateArray[1])));
        } else if (command.includes("-")) {
            console.log("The Answer is : " + (Number(calculateArray[0]) - Number(calculateArray[1])));
        } else if (command.includes("/")) {
            console.log("The Answer is : " + (Number(calculateArray[0]) / Number(calculateArray[1])));
        } else if (command.includes("%")) {
            console.log("The Answer is : " + (Number(calculateArray[0]) % Number(calculateArray[1])));
        }
    } else if (command.includes("set timer")) {
        console.log('Timer is set for 5 seconds ! \n !! Do not blink the eyes !!');
        function setTimer() {
            console.log("5 second is up !");
        }
        setTimeout(setTimer, 5000,);
    }
}
getReply("i am Ghimire, Suman");
console.log(splitArray);
console.log(theNameArray);
getReply("What is your name");
getReply("");
getReply("add fishing");

getReply("add singing shower");
console.log("** you have " + toDoList.length + " activities. " + "your to do list is : " + toDoList);
getReply(" hello you  remove fishing from my todo list");
console.log("** now you have " + toDoList.length + " activities. " + "your to do list is : " + toDoList);
getReply(" todays date is ");
getReply("what is 10 - 2");

getReply("set timer");

getReply("can you give me my up-to-date todo list my baby system "); // the call stack does not wait for the timer so this activity is executed even it is called after set timer.