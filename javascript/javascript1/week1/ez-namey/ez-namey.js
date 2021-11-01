/* suman ghimire javascript w1 homework Ez Namey (Startup name generator) Optional */
const firstWords = ["Easy", "Awesome", "Corporate", "Royal", "Welcome-Home" ];
const secondWords = ["Start-up","Your Company", " New Market", "Dream-Team", "Best In Town"];
const randomFirstWords = firstWords[Math.floor(Math.random() * firstWords.length)];
const randomSecondwords = secondWords[Math.floor(Math.random() * secondWords.length)];
const startupName = randomFirstWords + " " + randomSecondwords ;
const wordLength = startupName.length;
console.log( " You can choose this new start-up company name " + '"'  + startupName + '"'  +". which has " + wordLength + " character !!");