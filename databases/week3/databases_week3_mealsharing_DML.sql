-- Quaries to write on meal table
-- Get all meals
SELECT
  meal.title
from
  meal;
-- Add a new meal
INSERT INTO
  meal(
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES(
    'dish of the day',
    'the dish of the day is a choise of the main chef and is different efery day. Please ask for details',
    'china town lyngby',
    '2022-02-16 09:09:09',
    200,
    90,
    '2022-02-15'
  );
-- Get a meal with any id, fx 1
SELECT
  -- meal.title
  *
FROM
  meal
WHERE
  id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  meal
SET
  meal.description = 'traditional Nepali spicy pizza'
WHERE
  meal.id = 2;
-- Delete a meal with any id, fx 1
DELETE FROM
  meal
WHERE
  id = 1;
-- Quries to write on Reservation table
  -- Get all reservations
select
  reservation.number_of_guests as 'Total Guests',
  meal.when as 'Date of Event'
from
  reservation
  JOIN meal on reservation.meal_id = meal.id;
-- Add a new reservation
INSERT INTO
  reservation(
    `number_of_guests`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`,
    `meal_id`
  )
VALUES(
    85,
    '2022-02-16',
    '75757575',
    'marta',
    'marta@gmail.com',
    4
  );
-- Get a reservation with any id, fx 1
select
  *
from
  reservation
where
  id = 2;
SELECT
  -- DISTINCT(meal.title)
  *
FROM
  meal
  JOIN reservation on meal.id = reservation.meal_id
WHERE
  meal_id = 2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  reservation
SET
  contact_phonenumber = '27859433'
WHERE
  meal_id = 1;
-- Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  meal_id = 1;
-- Quries to write on Review table
SELECT
  title
from
  review;
-- Add a new review
INSERT INTO
  review(
    `title`,
    `description`,
    `stars`,
    `created_date`,
    `meal_id`
  )
VALUES(
    'best food',
    'i ate best food ever i found in my life. thanks to the main chef there. salute',
    5,
    '2022-02-26',
    3
  );
-- Get a review with any id, fx 1
SELECT
  *
from
  review
where
  id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  review
SET
  stars = 15
WHERE
  review.id = 2;
-- Delete a review with any id, fx 1
DELETE FROM
  review
WHERE
  id = 1;
-- Additional queries on functionnality
  -- Get meals that has a price smaller than a specific price fx 90
SELECT
  meal.title,
  meal.price
from
  meal
WHERE
  price < 90;
-- Get meals that still has available reservations
  ---------------------
SELECT
  meal.title AS Meal,
  meal.max_reservations AS Capacity,
  SUM(reservation.number_of_guests) AS 'Total Order',
  meal.max_reservations - sum(reservation.number_of_guests) as Avaliable,
  reservation.created_date AS 'Reserved Date'
FROM
  meal
  JOIN reservation ON reservation.meal_id = meal.id
GROUP BY
  reservation.meal_id,
  reservation.created_date
HAVING
  (
    meal.max_reservations - sum(reservation.number_of_guests)
  ) > -1 -- how it should not take reservation more than max_reservations? is it JS logic ?
ORDER BY
  reservation.created_date DESC;
--------------
INSERT INTO
  meal(
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES(
    'Rød grød med fløde',
    'danish special',
    'china town lyngby',
    '2022-02-16 09:09:09',
    100,
    50,
    '2022-02-15'
  );
SELECT
  meal.title
from
  meal
WHERE
  title LIKE 'Rød grød med%';
-- Get meals that has been created between two dates
SELECT
  meal.title,
  meal.created_date
FROM
  meal
WHERE
  -- created_date > '2022-02-14' AND created_date < '2022-02-16';
  created_date BETWEEN '2022-02-14'
  AND '2022-02-16';
-- Get only specific number of meals fx return only 5 meals
SELECT
  meal.title
from
  meal
LIMIT
  5;
-- Get the meals that have good reviews
SELECT
  meal.title
from
  meal
  JOIN review on meal.id = review.meal_id
WHERE
  stars > 4;
-- Get reservations for a specific meal sorted by created_date
SELECT
  meal.title,
  reservation.meal_id,
  reservation.number_of_guests,
  reservation.created_date
FROM
  meal
  JOIN reservation on meal.id = reservation.meal_id
where
  reservation.meal_id = 5
ORDER BY
  reservation.created_date ASC;
-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  round(AVG(review.stars), 1)
from
  meal
  join review on meal.id = review.meal_id
group BY
  meal.title;