const express = require('express');
const app = express();
const cors = require('cors'); // to get api in localhost
app.use(cors()); // to get api in localhost
// import data here
const meals = require('./data/meals');
const reviews = require('./data/reviews');
const reservations = require('./data/reservations');
const colours = require('colors/safe');
// const reusableCode = require('./data/reusableCode');
// this is where you will be adding your routes
app.get('/', async(request, response) => {
    console.log(colours.rainbow('hello this is my first node message'));
    response.send(`<div>
    <span style="color: red">hello</span>
    <span style="color: #1c37c6">this is</span>
    <span style="color: #e91aaf">my first</span>
    <span style="color: #e437a3">node</span>
    <span style="color: #6e46da">message</span>
  </div>`);
});

// reuseable code start
const randomNumber = (n) => Math.round(Math.random() * n);
const mealsWithReviews = meals.map((meal) => {
    const reviewsForMeal = reviews.filter((review) => review.mealId === meal.id);
    return {
        ...meal,
        reviews: reviewsForMeal,
    };
});
// reuseable code ends

// Respond with the json for all the meals.
// For each meal, if there are reviews matching it's meal ID,
// add these reviews to each meal in the form of an array.
// For meals that do not have any reviews, the "reviews" property will be an empty array.
app.get('/meals', async(request, response) => {
    response.status(200);
    response.json(mealsWithReviews);
});

// Respond with the json for all the meals (including it's reviews) that are cheap
app.get('/cheap-meals', async(request, response) => {
    const cheapMealWithReviews = mealsWithReviews.filter(
        (cheapmeal) => cheapmeal.price < 70,
    );
    response.json(cheapMealWithReviews);
});
// Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get('/large-meals', async(request, response) => {
    const largeMealWithReviews = mealsWithReviews.filter(
        (cheapmeal) => cheapmeal.maxNumberOfGuests > 5,
    );
    response.json(largeMealWithReviews);
});

// Respond with the json for a random meal (including it's reviews)
app.get('/meal', async(request, response) => {
    const randomMealIndex = randomNumber(mealsWithReviews.length);
    const randomMeal = mealsWithReviews[randomMealIndex];
    response.json(randomMeal);
});

// Respond with the json for all reservations
app.get('/reservations', async(request, response) => {
    response.json(reservations);
});

// Respond with the json for a random reservation
app.get('/reservation', async(request, response) => {
    const randomReservationIndex = randomNumber(reservations.length);
    const randomReservation = reservations[randomReservationIndex];
    response.json(randomReservation);
});

module.exports = app;