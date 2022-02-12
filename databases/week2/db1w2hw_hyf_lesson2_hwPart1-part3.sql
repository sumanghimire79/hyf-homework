-- Part 1: Working with tasks // DDL homework
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
  task
VALUES
  (
    37,
    'Designer',
    'Database designer for startup company',
    '2021-10-10 06:54:16',
    '2022-10-10 13:05:09',
    '2024-10-10 13:05:09',
    1
  );
INSERT INTO
  task (
    id,
    title,
    description,
    created,
    updated,
    due_date,
    status_id
  )
VALUES
  (
    38,
    'db designer',
    'db sesigner for the first time.',
    '2017-10-25 06:54:16',
    '2017-10-15 13:05:09',
    null,
    2
  );
-- Change the title of a task
UPDATE
  task
SET
  title = 'sumans first job'
WHERE
  id = 36;
-- Change a task due date
UPDATE
  task
SET
  due_date = '2022-02-08'
WHERE
  id = 36;
-- Change a task status
  use hyf_lesson2;
UPDATE
  task
SET
  -- status_id = 3
  status_id = (
    SELECT
      status.id
    FROM
      status
    WHERE
      status.name LIKE '%Done' -- status.name = 'Done'
  )
WHERE
  id = 35;
SELECT
  *
FROM
  task;
-- Mark a task as complete
DELETE FROM
  task
WHERE
  id = 38;
-- Delete a task
SELECT
  *
FROM
  task;
-- homework part 3 // DML homework
  -- Get all the tasks assigned to users whose email ends in @spotify.com
  USE hyf_lesson2;
SELECT
  task.title,
  user.email
FROM
  task
  join user_task ON task.id = user_task.task_id
  JOIN user ON user_task.user_id = user.id
WHERE
  user.email LIKE "%@spotify.com";
-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
  task.title,
  user.name as user,
  status.name as status
FROM
  task
  join status ON task.status_id = status.id
  JOIN user_task ON user_task.task_id = task.id
  JOIN user on user_task.user_id = user.id
WHERE
  user.name = 'Donald Duck'
  and status.name = 'Not started';
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
  task.title,
  task.created,
  user.name
FROM
  task
  JOIN user_task ON task.id = user_task.task_id
  JOIN user ON user_task.user_id = user.id
WHERE
  user.name = 'Maryrose Meadows'
  AND MONTH(task.created) = 9;
-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
select
  COUNT(task.id),
  MONTH(task.created) AS month
FROM
  task
GROUP BY
  MONTH(task.created);
SELECT
  task.id,
  task.created,
  task.title
FROM
  task;
UPDATE
  task
SET
  created = '2020-11-11'
WHERE
  id = 35