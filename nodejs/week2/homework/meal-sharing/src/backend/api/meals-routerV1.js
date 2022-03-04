const express = require('express');
const { send } = require('express/lib/response');
const res = require('express/lib/response');
const router = express.Router();
const meals = require('./../data/meals');

//Get all meals or get meals based on query
router.get('/', async(request, response) => {
    try {
        if ('maxPrice' in request.query) {
            if (!parseInt(request.query.maxPrice)) {
                return response.status(400).send('invalid max price');
            }
            const cheapMeal = meals.filter(
                (meal) => meal.price < parseInt(request.query.maxPrice),
            );
            return response.send(cheapMeal);
        }
        if ('title' in request.query) {
            const mealtitle = meals.filter((meal) =>
                meal.title.toLowerCase().includes(request.query.title.toLowerCase()),
            );
            return response.send(mealtitle);
        }
        if ('createdAfter' in request.query) {
            if (!Date.parse(request.query.createdAfter)) {
                return response.status(400).send('invalide date');
            }
            response.send(
                meals.filter(
                    (meal) =>
                    Date.parse(meal.createdAt) > Date.parse(request.query.createdAfter),
                ),
            );
        }
        if ('limit' in request.query) {
            limit = parseInt(request.query.limit);
            if (!limit) {
                return response
                    .status(400)
                    .send(
                        `Invalid ID, ${request.query.limit} is not a number, provide a number please`,
                    );
            } else if (limit > meals.length || limit <= 0) {
                return response.status(400).send(`only ${meals.length} meal available`);
            }
            return response.status(200);
            // .send(meals.filter((meal) => meal.id <= limit));
            return response.status(200).send(meals.find({ limit: 5 }));
            // await meals.find({limit: 5});
        }
        response.json(meals);
    } catch (error) {
        // response.send(error);
    }
});

//Respond with the json for the meal with the corresponding id
router.get('/:id', async(request, response) => {
    try {
        id = Number(request.params.id);
        if (!id) {
            return response.status(400).send(`${request.params.id} is an invalid id`);
        } else if (id > meals.length || id <= 0) {
            return response.send(` only ${meals.length} meals available`);
        }
        const meal = meals.find((meal) => id === meal.id);
        response.send(meal);
    } catch (error) {
        // throw `${}`;
        // response.send(error);
    }
});

module.exports = router;