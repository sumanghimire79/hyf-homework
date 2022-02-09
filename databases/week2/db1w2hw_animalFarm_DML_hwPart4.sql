-- db1w2_animalFarmDB_dml sumanghimire
-- get all the animal bought my customer name chunmai from owner suman
SELECT
  animal.name,
  customer.firstName AS customer,
  owner.firstName AS owner
FROM
  customer
  JOIN sales ON customer.id = sales.customer_id
  JOIN animal ON sales.animal_id = animal.id
  JOIN farm ON animal.farm_id = farm.id
  JOIN owner_farm ON farm.id = owner_farm.farm_id
  JOIN owner ON owner_farm.owner_id = owner.id
WHERE
  owner.firstName = 'suman'
  AND customer.firstName = 'Chunmei';
-- how many animals woner amrit has
SELECT
  owner.firstName AS AnimalOwner,
  SUM(animal.quantity)
FROM
  owner
  JOIN owner_farm ON owner.id = owner_farm.owner_id
  JOIN farm ON farm_id = farm.id
  JOIN animal ON farm.id = animal.farm_id
WHERE
  owner.firstName = 'Amrit'
GROUP BY
  owner.firstName;