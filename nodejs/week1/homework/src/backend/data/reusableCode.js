const meals = require('./meals');
const reviews = require('./reviews');
const reservations = require('./reservations');
const randomNumber = (n) => Math.round(Math.random() * n);

const mealsWithReviews = meals.map((meal) => {
    const reviewsForMeal = reviews.filter((review) => review.mealId === meal.id);
    return {
        ...meal,
        reviews: reviewsForMeal,
    };
});

// module.exports = randomNumber;
// module.exports = mealsWithReviews;
// // module.exports = 'reusableCode';

module.exports = { randomNumber, mealsWithReviews, reservations };