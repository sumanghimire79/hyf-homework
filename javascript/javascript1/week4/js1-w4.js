// Suman Ghimire js1 w4

let toDoList = [];

function getReply(command) {

    let splitText = command.split(` `);
    const findName = 'name';
    let numberIndex = splitText.findIndex((word) => word == findName);

    if (command.length === 0) {
        console.log('provie your name first');

    }else if (command.includes('my name') && !command.includes('my name?') && !command.includes('what my name?')) {
        (splitText[numberIndex + 1] === 'is') ? theName = splitText[numberIndex + 2] : theName = splitText[numberIndex + 1];
        console.log('nice to meet you ' + theName);

    }else if (command.includes('what is my name?')) {
       
        console.log('Your name is ' + theName);

    }else if (command.includes('add') || command.includes('remove')){
           const activity = splitText[1];
            if(splitText[0]===('add')){
                if(toDoList.includes(activity)) {
                          console.log(activity + ' activity is already present in your todo');
                        } else {
                toDoList.push(splitText[1]);
                console.log("* '" + activity +"'" + ' added to the list');
                }
              }else if(splitText[0]===('remove')){
                toDoList.splice(toDoList.indexOf(splitText[1]),1);
                console.log( 'removed ' + '"' + splitText[1] + '"' + ' from your todo list. So List has only ' + toDoList.length + ' activity. That means ' + '"' + toDoList + '"' + ' activity. !');
                console.log(toDoList);
              }

    } else if (command.includes('todo list')) {
       
        console.log('your todo list has now only ' + toDoList.length + ' activity: ' + '"' + toDoList + '"' + ' activity. !');

    } else if (command.includes('today') || command.includes('date')) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date();
        console.log('Todays date is : ' + date.getDate() + ' of ' + monthNames[date.getMonth()] + ', ' + date.getFullYear());

    } else if (command.includes('+') || command.includes('*') || command.includes('-') || command.includes('/') || command.includes('%')) {

        const number1 = parseFloat(splitText[2]);
        const number2 = parseFloat(splitText[4]);
        const answer = 'The Answer is :';

        switch (splitText[3]) {
            case '+': console.log(answer + (number1 + number2));
                break;
            case '-': console.log(answer + (number1 - number2));
                break;
            case '*': console.log(answer + (number1 * number2));
                break;
            case '/': console.log(answer + (number1 / number2));
                break;
            case '%': console.log(answer + (number1 % number2).toFixed(3));
                break;
            default:
                console.log('not a valid operator');
        }

    } else if (command.includes('set timer')) {
        console.log('Timer is set for 5 seconds ! \n !! Do not blink the eyes !!');
        function setTimer() {
            console.log('5 second is up !');
        }
        setTimeout(setTimer, 5000,);

    } else {console.log('command not match');
}

}
getReply("");
getReply('my name is benjamin');
getReply('what is my name?');
getReply('add fishing activity to my todo list');
getReply('add fishing activity to my todo list');
getReply('add fishing activity to my todo list');
getReply('add dancing activity to my todo list');
getReply('add singing activity shower to my todo list');
getReply('todo list');
getReply('remove fishing from my todo list');
getReply('remove dancing from my todo list');
getReply(' todays date is ');
getReply('what is 10 + 5');
getReply('what is 10.188 + 1.555');
getReply('what is 10.5 * 5');
getReply('what is 10.2 % 5');
getReply('set timer');
 getReply('can you give me my up-to-date todo list my baby system '); // the call stack does not wait for the timer so this activity is executed even it is called after set timer.