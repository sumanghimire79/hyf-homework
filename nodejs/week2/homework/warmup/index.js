const express = require('express');
const app = express();

function numbers(req, res) {
    const firstNumber = Number(req.query.a);
    const secondNumber = Number(req.query.b);
    return firstNumber, secondNumber;
}

function add(req, res) {
    numbers(req, res);
    const answer = firstNumber + secondNumber;
    if (firstNumber && secondNumber) {
        res.send('add result: ' + answer);
    }
    if (firstNumber) {
        res.send('you typed first number only: ' + firstNumber);
    }
    if (secondNumber) {
        res.send('you typed second number only: ' + secondNumber);
    }
}
console.log(add(5, 5));

function multiply(req, res) {
    const firstNumber = Number(req.query.a);
    const secondNumber = Number(req.query.b);
    const answer = firstNumber * secondNumber;
    if (firstNumber && secondNumber) {
        res.send('add result: ' + answer);
    }
    if (firstNumber) {
        res.send('you typed first number only: ' + firstNumber);
    }
    if (secondNumber) {
        res.send('you typed second number only: ' + secondNumber);
    }
}

app.get('/', (req, res) => res.send('nodejs week2 homework'));

app.get('/add', (req, res) => add(req, res));

app.get('/multiply', (req, res) => multiply(req, res));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));