const express = require('express');
const router = express.Router();
const knex = require('../database');

// GET: localhost:3000/api/concerts
router.get('/', async(request, response) => {
    try {
        const concerts = await knex('concerts');
        if ('maxPrice' in request.query) {
            const cheapTicket = await concerts.filter(
                (concert) => concert.price < Number(request.query.maxPrice),
            );
            response.json(cheapTicket);
        }

        if ('title' in request.query) {
            const titleMatched = await concerts.filter((concert) =>
                concert.title.toLowerCase().includes(request.query.title.toLowerCase()),
            );
            response.json(titleMatched);
        }

        if ('createdAfter' in request.query) {
            const dateMatched = await concerts.filter((concert) => {
                const consertDate = new Date(concert.created_date).getTime();
                const searchDate = new Date(request.query.createdAfter).getTime();
                return consertDate > searchDate;
            });

            response.json(dateMatched);
        }

        if ('band' in request.query) {
            const bandMatched = await concerts.filter(
                (concert) =>
                concert.band.toLowerCase() === request.query.band.toLowerCase(),
            );

            response.json(bandMatched);
        } else {
            response.json(concerts);
        }
    } catch (error) {
        throw error;
    }
});

//query
// GET: localhost:3000/api/concerts?maxPrice=700
// router.get('/', async(request, response) => {
//     try {
//         const concerts = await knex('concerts'); //.select('*');
//         const cheapTicket = await concerts.filter(
//             (concert) => concert.price < Number(request.query.maxPrice),
//         );

//         response.json(cheapTicket);
//     } catch (error) {
//         throw error;
//     }
// });
//query
// GET: localhost:3000/api/concerts?title=...
// router.get('/', async(request, response) => {
//     try {
//         const concerts = await knex('concerts'); //.select('*');
//         const titleMatched = await concerts.filter((concert) =>
//             concert.title.toLowerCase().includes(request.query.title.toLowerCase()),
//         );

//         response.json(titleMatched);
//     } catch (error) {
//         throw error;
//     }
// });
// createdAfter
//query
// GET: localhost: 3000 / api / concerts ? createdAfter = ...
// router.get('/', async(request, response) => {
//     try {
//         const concerts = await knex('concerts'); //.select('*');
//         const dateMatched = await concerts.filter((concert) => {
//             const consertDate = new Date(concert.created_date).getTime();
//             const searchDate = new Date(request.query.createdAfter).getTime();
//             return consertDate > searchDate;
//         });

//         response.json(dateMatched);
//         // not working
//     } catch (error) {
//         throw error;
//     }
// });

// band query
// router.get('/', async(request, response) => {
//     try {
//         const concerts = await knex('concerts'); //.select('*');
//         const bandMatched = await concerts.filter(
//             (concert) =>
//             concert.band.toLowerCase() === request.query.band.toLowerCase(),
//         );

//         response.json(bandMatched);
//         // not working
//     } catch (error) {
//         throw error;
//     }
// });

// GET: localhost:3000/api/concerts/1
router.get('/:id', async(request, response) => {
    try {
        const concerts = await knex('concerts')
            // .select('*')
            .where('id', request.params.id);
        response.json(concerts);
    } catch (error) {
        throw error;
    }
});

// POST: localhost:3000/api/concerts
// //post/enter/record static data by calling from post man or browser

// router.post('/', async(request, response) => {
//   try {
//       // knex syntax for selecting things. Look up the documentation for knex for further info
//       const concerts = await knex('concerts'); //.select('id', 2);
//       response.json(concerts);
//       await knex('concerts').insert({
//           title: 'roskilde festival',
//           band: 'cob web',
//           venue: 'vaise party resort',
//           created_date: new Date(),
//           performance_date: new Date(),
//           price: 500,
//       });
//   } catch (error) {
//       throw error;
//   }
// });

//post/enter/record indicated row/entry/data from postman
// POST: localhost:3000/api/concerts/
router.post('/', async(request, response) => {
    try {
        const concerts = await knex('concerts').insert({
            title: request.body.title,
            band: request.body.band,
            venue: request.body.venue,
            created_date: new Date(),
            performance_date: request.body.performance_date,
            price: request.body.price,
        });
        response.json(concerts);
    } catch (error) {
        throw error;
    }
});
// put(edit) indicated row/entry/data by provided id from postman
// PUT: localhost:3000/api/concerts/1
router.put('/:id', async(request, response) => {
    try {
        const concerts = await knex('concerts')
            .where({ id: request.params.id })
            .update(request.body);
        response.json(concerts);
    } catch (error) {
        throw error;
    }
});

// delete indicated row/entry/data by providing id from postman
// DELETE: localhost:3000/api/concerts/1
router.delete('/:id', async(request, response) => {
    console.log('sunda morning delete');
    try {
        const concerts = await knex('concerts')
            .where({ id: request.params.id })
            .delete(request.body);
        //  dont need to provide body while deleting.
        response.json(concerts);
    } catch (error) {
        throw error;
    }
});
module.exports = router;