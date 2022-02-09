-- DDL homework creating table,inserting data,deleting,updating
CREATE DATABASE school DEFAULT CHARACTER SET = 'utf8mb4';
USE school;
-- creatin Class table: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `Class` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `begin_date` DATETIME NOT NULL,
  `end_date` DATETIME NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- creating Student table : with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `Student` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NULL,
  `class_id` INT(10) UNSIGNED,
  FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- Add a new column to the Class table named status which can only have the following VALUES: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE
  Class
ADD
  status VARCHAR(255);
ALTER TABLE
  Class
ADD
  ClassRemarks VARCHAR(255);
-- delete column from the table
ALTER table
  Class DROP COLUMN ClassRemarks;
SELECT
  *
FROM
  Class;
-- insert data in Class table
INSERT INTO
  Class (name, begin_date, end_date, status)
VALUES
  (
    'Chunmai',
    '2022-01-22',
    '2022-08-08',
    'not-started'
  );
INSERT INTO
  Class (name, begin_date, end_date, status)
VALUES
  (
    'Suman',
    '2022-01-22',
    '2022-08-08',
    'finished'
  );
INSERT INTO
  Class (name, begin_date, end_date, status)
VALUES
  (
    'Asma',
    '2022-01-22',
    '2022-08-08',
    'on-going'
  );
UPDATE
  Class
SET
  name = 'Class4'
WHERE
  id = 4;
SELECT
  *
FROM
  Class;
describe Class;
-- insert into data in Student table
INSERT INTO
  Student (name, email, phone, class_id)
VALUES
  (
    'Chunmei',
    'chunmei@gmail.com',
    '787878',
    1
  ),
  (
    'Amrit',
    'amrit@gmail.com',
    '5555555',
    2
  ),
  (
    'Hafiz',
    'hafiz@gmail.com',
    '234567',
    2
  ),
  (
    'negar',
    'negar@gmail.com',
    '555555',
    3
  ),
  (
    'Vahab',
    'vahab@gmail.com',
    '456789',
    3
  ),
  (
    'maryam',
    'maryam@gmail.com',
    '987654',
    4
  ),
  (
    'sweta',
    'sweta@gmail.com',
    '876543',
    4
  ),
  (
    'Anas',
    'anas@gmail.com',
    '567890',
    4
  );