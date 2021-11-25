// 4 Event types - Optional and a little tricky // 
console.log('*HW4 4: Event types - Optional and a little tricky*');

let spiritAnimalNames = ['The crying butterfly', ' The old wolf', ' The diminishing tiger', 'The gigantic giraff', 'The old elefant',];

let myButton = document.querySelector('#myButton');
let inputField = document.querySelector('#textinput');

// to trigger the function if the radio input is selected and then to add input eventlistener to the button 

// the following code is refactored by the help of zendex study room . millions thanks to Ante for the coding journey !!
function inputFunction() {
    inputField.addEventListener('input', function () {
        if (document.querySelector('#radioInputID').checked) {
            let username = document.querySelector('#textinput').value;
            if (username === "") {
                alert('nanme can not be empty input text');
            } else {
                let randomSpirit = Math.floor((Math.random() * spiritAnimalNames.length));
                let sentence = username + '-' + spiritAnimalNames[randomSpirit];
                document.querySelector('.displayRadioinput1').innerHTML = ' ' + sentence;
            }
        }
    });
}
// to trigger the function if the radio click is selected and then to add click eventlistener to the button 
function clickFuction() {
    myButton.addEventListener('click', function () {
        if (document.querySelector('#radioClickID').checked) {
            let username = document.querySelector('#textinput').value;
            if (username === "") {
                alert('name can not be empty click');
            } else {
                let randomSpirit = Math.floor((Math.random() * spiritAnimalNames.length));
                const sentence = username + '-' + spiritAnimalNames[randomSpirit];
                document.querySelector('.displayClick1').innerHTML = ' ' + sentence;
            }
        }
    });
}
// to trigger the function if the radio input is selected and then to add mouse over eventlistener to the button 
function MouseoverFunction() {
    myButton.addEventListener('mouseover', function () {
        if (document.querySelector('#radioMouseoverID').checked) {
            let username = document.querySelector('#textinput').value;
            if (username === "") {
                alert('name can not be empty mouseover');
            } else {
                let randomSpirit = Math.floor((Math.random() * spiritAnimalNames.length));
                const sentence = username + '-' + spiritAnimalNames[randomSpirit];
                document.querySelector('.displayMouseover1').innerHTML = ' ' + sentence;
            }
        }

    });
}

clickFuction()
MouseoverFunction()
inputFunction()





