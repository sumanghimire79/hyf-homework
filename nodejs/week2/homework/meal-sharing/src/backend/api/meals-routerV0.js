const express = require('express');
const router = express.Router();
const meals = require('./../data/meals');

//Respond with the json for all the meals
router.get('/', async(request, response) => {
    try {
        response.json(meals); //all meal
    } catch (error) {
        console.log(error);
        throw error;
    }
});
//Get meals that has a price smaller than maxPrice
router.get('/maxPrice', async(request, response) => {
    try {
        const cheapMeal = meals.filter(
            (meal) => Number(meal.price) < Number(request.query.maxPrice),
        );
        response.json(cheapMeal); //maxPrice
    } catch (error) {
        // throw `${}`;
        response.end(error);
    }
});
//Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
// ??
router.get('/title', async(request, response) => {
    try {
        const mealtitle = meals.filter((meal) =>
            meal.title.toLowerCase().includes(request.query.title.toLowerCase()),
        );
        response.json(mealtitle); //title
    } catch (error) {
        // throw `${}`;
        response.end(error);
    }
});
// Get meals that has been created after the date
router.get('/date', async(request, response) => {
    try {
        const latestMeal = meals.filter((meal) => {
            return new Date(meal.createdAt) > new Date(request.query.date);
        });
        response.json(latestMeal); //createdAfter
    } catch (error) {
        // throw `${}`;
        response.end(error);
    }
});
//Only specific number of meals limit = 4
router.get('/limit', async(request, response) => {
    try {
        const limitNo = Number(request.query.limit);
        const newMeal = meals.map((meal) => meal);
        if (limitNo <= newMeal.length && limitNo > 0) {
            const limitMeal = newMeal.slice(0, limitNo);
            response.json(limitMeal);
        } else if (limitNo > newMeal.length || limitNo <= 0) {
            response.json(
                'not valid number. only ' + newMeal.length + ' items present',
            );
        } else {
            response.json('not a number');
        }
        // const mealLimit = (meal) => meals.length > limitNo;
        //limit=4
    } catch (error) {
        // throw `${}`;
        console.log(error);
        response.end(error + 'hello error');
    }
});
//Respond with the json for the meal with the corresponding id
router.get('/:id', async(request, response) => {
    try {
        const findmealByID = meals.find(
            (meal) => meal.id === Number(request.params.id),
        );
        response.json(findmealByID); //:id
    } catch (error) {
        // throw `${}`;
        response.end(error);
    }
});
module.exports = router;