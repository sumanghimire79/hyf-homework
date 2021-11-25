// 1  Find the shortest word// 
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



