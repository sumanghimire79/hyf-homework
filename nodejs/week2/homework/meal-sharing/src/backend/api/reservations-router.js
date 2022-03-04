const express = require('express');
const router = express.Router();
const reservations = require('./../data/reservations');

// Respond with the json for all reservations *
router.get('/', async(request, response) => {
    try {
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});

//Respond with the json for the reservation with the corresponding id *
router.get('/:id', async(request, response) => {
    try {
        const fiidReservationByID = reservations.find(
            (reservation) => reservation.id === Number(request.params.id),
        );
        response.json(fiidReservationByID);
    } catch (error) {
        throw error;
    }
});

module.exports = router;