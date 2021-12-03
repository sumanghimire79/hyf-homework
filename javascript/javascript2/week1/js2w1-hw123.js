// 1  Find the shortest word// 

/* 
console.log('*HW1: Find the shortest word*');

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestWord() {

    let shortName = danishWords[0];
    for (const word of danishWords) {
        if (word.length < shortName.length) {
            shortName = word;
            document.querySelector('#ex1').innerHTML = 'The shortest danish word available is : ' + shortName;
            console.log('The shortest danish word available is : ' + shortName);
        }
    }
}

shortestWord(danishWords);  // returns 'ø'

// 2    Find and count the Danish letters // my part need to fix
console.log('*HW2: Find and count the Danish letters*');

const danishLetters = ['æ', 'ø', 'å'];
function findDanishLetters(danishString) {
    let splitText = danishString.split('');
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let total;
    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] === "ø") {
            sum1 += 1;
        } else if (splitText[i] === "å") {
            sum2 += 1;

        } else if (splitText[i] === "æ") {
            sum3 += 1;
        }
    } total = sum1 + sum2 + sum3;
    document.querySelector('#ex2').innerHTML = 'Total danish letters are: ' + total + '\n' + " where number of letter ø : " + sum1 + '\n' + " Number of letter å : " + sum2 + '\n' + " Number of letter æ : " + sum3;
    // console.log('Total danish letters: '+total +'\n'+" Number of letter ø : " + sum1 + '\n'+ " Number of letter å : " + sum2 + '\n'+ " Number of letter æ : " + sum3);
}
const danishString = "Jegåå hær en blå bil øl æblæer";
findDanishLetters(danishString); // returns {total: 1, å: 1}

// 3  -sprit animal name generator //
console.log('*HW3: Sprit animal name generator*');

// const username = prompt('enter your name');
 spiritAnimalNames = ['The crying butterfly', ' The old wolf', ' The diminishing tiger', 'The gigantic giraff', 'The old elefant',];
 myButton = document.querySelector('#myButton');

myButton.addEventListener('click', function () {
    const username = document.querySelector('#textinput').value;
    if (username === "") {
        alert('name can not be empty');
    } else {
        let randomSpirit = Math.floor((Math.random() * spiritAnimalNames.length));
        const sentence = username + '-' + spiritAnimalNames[randomSpirit];
        document.querySelector('.display').innerHTML = 'Result for Exercise 3 =>  ' + sentence;
    }
});

 */

// vahab's code 

// danish special letterrs are 'æ', 'å' and  'ø'

const danishString = "Blå grød med røde bær";
function findDanishLetter(danishString2) {
let letters = danishString2.split('');
const å = letters.filter(letter => letter === 'å');
const æ = letters.filter(letter => letter === 'æ');
const ø = letters.filter(letter => letter === 'ø');
const result = ' Total danish letter found : ' + (å.length + ø.length + æ.length) + ' where, \n å: ' +å.length +' \n æ: '+ æ.length + '  \n ø: '+ ø.length;
console.log(result);

if (å.length === 0 && ø.length === 0 && æ.length === 0){
    console.log('it does not include danish letter');
}

}
findDanishLetter(danishString)

               
const danishString2 = "Blå grød med røde bær";
var danishLetter = ['æ', 'å', 'ø']
function findDanishLetter(danishString2) {
    let letters = danishString2.split('');
    console.log(letters);
    let foundLetter = [];
    console.log(foundLetter);
    let ø = 0;
    let å = 0;
    let æ = 0;
    for (i = 0; i < letters.length; i++) {
        let singleLetter = danishString2[i];
        if (singleLetter === 'å') {
            foundLetter.push(singleLetter);
            å += 1;
        } else if (singleLetter === 'æ') {
            foundLetter.push(singleLetter);
            æ += 1;
        } else if (singleLetter === 'ø'){
            ø += 1;
            foundLetter.push(singleLetter);  }         
    }
    console.log('Found danish letters: ' +foundLetter);

    console.log( 'total danish Letterrs: '+ foundLetter.length + ' where, å:'+ å + ' ø: '+ ø + ' æ:'+ æ );
if (å === 0 && ø === 0 && æ === 0){
    console.log('it does not include danish letter');
}

// how to use reduce here to count the total item in the array??
const total = foundLetter.reduce((total, letter) => total+letter);
console.log(total);


// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = letters.reduce(function (allLetters, letter,index) {
//   if (letter in allLetters) {
//     allLetters[letter]++
//   }
//   else {
//     allLetters[letter] = 1
//   }
//   return allLetters

allLetters[index] = letter
return allLetters



}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

console.log('counted names is : '+ countedNames);




}
findDanishLetter(danishString2) 