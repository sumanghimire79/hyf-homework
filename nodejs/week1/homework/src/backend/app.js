const express = require('express');
const app = express();
// import data here
const meals = require('./data/meals');
const reviews = require('./data/reviews');
const reservations = require('./data/reservations');
const colours = require('colors/safe');
// this is where you will be adding your routes
app.get('/', async(request, response) => {
    // response.send("asd");
    console.log(colours.rainbow('hello this is my first node message'));
    response.send(colours.green('hello this is my first node message'));
});

// Respond with the json for all the meals.
// For each meal, if there are reviews matching it's meal ID,
// add these reviews to each meal in the form of an array.
// For meals that do not have any reviews, the "reviews" property will be an empty array.

app.get('/meals', async(request, response) => {
    const mealsWithReviews = meals.map((meal) => {
        const reviewsForMeal = reviews.filter(
            (review) => review.mealId === meal.id,
        );
        return {
            ...meal,
            reviews: reviewsForMeal,
        };
    });
    response.send(mealsWithReviews);

    // response.json(mealsWithReviews);
});

// Respond with the json for all the meals (including it's reviews) that are cheap
app.get('/cheap-meals', async(request, response) => {
    const allCheapMealWithReviews = meals
        .filter((cheapmeal) => cheapmeal.price < 70)
        .map((meal) => {
            const reviewsForMeal = reviews.filter(
                (review) => meal.id === review.mealId,
            );
            return {
                ...meal,
                review: reviewsForMeal,
            };
        });
    // response.send(allCheapMealWithReviews);
    response.json(allCheapMealWithReviews);
});
// Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get('/large-meals', async(request, response) => {
    const allLargeMealWithReviews = meals
        .filter((cheapmeal) => cheapmeal.maxNumberOfGuests > 5)
        .map((meal) => {
            const reviewsForMeal = reviews.filter(
                (review) => meal.id === review.mealId,
            );
            return {
                ...meal,
                review: reviewsForMeal,
            };
        });
    // response.send(allLargeMealWithReviews);
    response.json(allLargeMealWithReviews);
});

// Respond with the json for a random meal (including it's reviews)
app.get('/meal', async(request, response) => {
    const allMeals = meals.map((meal) => meal);
    const randomNumber = (n) => Math.floor(Math.random() * n);
    const randomNumberCall = randomNumber(allMeals.length);
    const randomFoods = allMeals[randomNumberCall];
    const reviewsForMeal = reviews.filter(
        (review) => randomFoods.id === review.mealId,
    );
    const allRandomMealsWithReviewsOBJ = {
        ...randomFoods,
        reviews: reviewsForMeal,
    };
    // response.send(allRandomMealsWithReviewsOBJ);
    response.json(allRandomMealsWithReviewsOBJ);
});

// Respond with the json for all reservations
app.get('/reservations', async(request, response) => {
    const allReservation = reservations.map((eachReservation) => eachReservation);
    // response.send(allReservation);
    response.json(allReservation);
});

// Respond with the json for a random reservation
app.get('/reservation', async(request, response) => {
    const allReservation = reservations.map((eachReservation) => eachReservation);
    const randN = (n) => Math.round(Math.random() * n);
    const randomQuoteIndex = randN(allReservation.length);
    const randomQuote = allReservation[randomQuoteIndex];
    // response.send(randomQuote);
    response.json(randomQuote);
});

module.exports = app;