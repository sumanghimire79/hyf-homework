-- db2w1hw_animalFarmDB_ddl sumanghimire
-- animalFarm DDL
CREATE DATABASE animalFarm DEFAULT CHARACTER SET = 'utf8mb4';
USE animalFarm;
CREATE TABLE `owner` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `DOB` DATE NULL,
  `contact` VARCHAR(10) NOT NULL,
  `address` VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `farm` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(10) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `owner_farm` (
  `owner_id` INT(10) unsigned NOT NULL,
  `farm_id` INT(10) unsigned NOT NULL,
  PRIMARY KEY(`owner_id`, `farm_id`),
  CONSTRAINT `fk_owner_farm_owner` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_owner_farm_farm` FOREIGN KEY (`farm_id`) REFERENCES `farm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `animal` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `quantity` INT(255) NOT NULL,
  `price` INT(255) NOT NULL,
  `farm_id` INT(10) unsigned NOT NULL,
  CONSTRAINT `fk_animal_farm` FOREIGN KEY (`farm_id`) REFERENCES `farm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `customer` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL,
  `mobile` VARCHAR(10) NOT NULL,
  `address` VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `sales` (
  `quantity` VARCHAR(10) NOT NULL,
  `customer_id` INT(10) unsigned NOT NULL,
  `animal_id` INT(10) unsigned NOT NULL,
  PRIMARY KEY(`customer_id`, `animal_id`),
  CONSTRAINT `fk_sales_animal` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_sales_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
INSERT INTO
  animal (name, quantity, price, farm_id)
VALUES
  ('chicken', 200, 20, 1),('duck', 300, 30, 1),('cow', 50, 60, 2),('sheep', 250, 70, 2),('goat', 400, 80, 2);
INSERT INTO
  farm (name, address, description, phone)
VALUES
  (
    'ishoj animal research center',
    'ishoj-5',
    'best animal research in europa',
    '28822882'
  ),(
    'amrit animal business house',
    'copenhagen',
    'best animal product seller title winner 2021',
    '77777777'
  );
INSERT INTO
  customer (firstName, lastName, email, mobile, address)
VALUES
  (
    'chunmei',
    'sui',
    'chusu@gmail.com',
    '33333333',
    'lyngby-4'
  ),
  (
    'sweta',
    'swmamidii',
    'swmi@gmail.com',
    '444444444',
    'glostrup-4'
  ),
  (
    'asma',
    'asma',
    'assu@gmail.com',
    '88888',
    'farum-14'
  ),
  (
    'vahab',
    'neta',
    'vane@gmail.com',
    '99999',
    'valby-34'
  );
INSERT INTO
  owner (firstName, lastName, DOB, contact, address)
VALUES
  (
    'Suman',
    'ghimire',
    '1979-08-04',
    '4777774',
    'ishoj-58'
  ),
  (
    'Amrit',
    'Pandey',
    '1981-08-04',
    '23456987',
    'copenhagen mainroad - 420'
  );
INSERT INTO
  owner_farm (owner_id, farm_id)
VALUES
  ('1', '1'),
  ('1', '2'),
  ('2', '2');
ALTER TABLE
  sales
MODIFY
  quantity INT(10);
INSERT INTO
  sales (quantity, customer_id, animal_id)
VALUES
  (100, 1, 6),
  (50, 2, 7),
  (30, 3, 8);