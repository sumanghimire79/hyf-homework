const express = require('express');
const router = express.Router();
const reviews = require('./../data/reviews');

//Respond with the json for all the reviews
router.get('/', async(request, response) => {
    try {
        response.json(reviews);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

//Respond with the json for the meal with the corresponding id
router.get('/:id', async(request, response) => {
    try {
        const findReviewsByID = reviews.find(
            (review) => review.id === Number(request.params.id),
        );
        response.json(findReviewsByID);
    } catch (error) {
        throw `${error}`;
        // response.end(error);
    }
});

module.exports = router;