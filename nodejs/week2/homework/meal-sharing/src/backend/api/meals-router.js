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
            return response.send(
                meals.filter((meal) => meal.price < parseInt(request.query.maxPrice)),
            );
        }
        if ('title' in request.query) {
            return response.send(
                meals.filter((meal) =>
                    meal.title.toLowerCase().includes(request.query.title.toLowerCase()),
                ),
            );
        }
        if ('createdAfter' in request.query) {
            if (!Date.parse(request.query.createdAfter)) {
                return response.status(400).send('invalide date');
            }
            return response.send(
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
                return response.status(404).send(`${meals.length} meals available`);
            }

            return response
                .status(200)
                .send(meals.filter((meal) => meal.id <= limit));
            // return response.send(meals.filter((meal) => meal.id <= limit));
            // return response.status(200).send(meals.slice(0, limit));
        }
        response.status(200).json(meals);
    } catch (error) {
        throw error;
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
        response.json(meals.find((meal) => id === meal.id));
    } catch (error) {
        throw `${error}`;
    }
});

module.exports = router;