-- 1. Find out how many tasks are in the task table
SELECT
  -- COUNT(title)
  COUNT(*) -- COUNT(id)
FROM
  task;
-- 2.Find out how many tasks in the task table do not have a valid due date
SELECT
  COUNT(title)
FROM
  task
WHERE
  due_date IS NULL;
-- 3.Find all the tasks that are marked as done
  -- without join
SELECT
  task.title,
  status.name
FROM
  task,
  status
WHERE
  task.status_id = status.id
  AND status.name = "Done";
-- with JOIN
SELECT
  task.title,
  status.name
FROM
  task
  JOIN status ON task.status_id = status.id
WHERE
  task.status_id = status.id
  AND status.name = "Done";
-- 4.Find all the tasks that are not marked as done
SELECT
  task.title,
  status.name
FROM
  task,
  status
WHERE
  task.status_id = status.id
  AND status.name != "Done";
-- 5.Get all the tasks, sorted with the most recently created first
SELECT
  title,
  created
FROM
  task
ORDER BY
  created DESC;
-- 6. Get the single most recently created task
SELECT
  title,
  created
FROM
  task
ORDER BY
  created DESC
LIMIT
  1;
-- 7.Get the title and due date of all tasks where the title or description contains database
SELECT
  title,
  due_date
FROM
  task
WHERE
  title LIKE "%database%"
  OR description LIKE "%database%";
-- 8.Get the title and status (as text) of all tasks
SELECT
  task.title AS task_title,
  status.name as Status
FROM
  task,
  status;
-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT
  status.name,
  COUNT(task.id)
FROM
  task
  LEFT JOIN status ON status.id = task.status_id
GROUP BY
  task.status_id;
-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT
  status.name,
  COUNT(task.id)
FROM
  task
  LEFT JOIN status ON status.id = task.status_id
GROUP BY
  task.status_id
ORDER BY
  COUNT(task.id) DESC;