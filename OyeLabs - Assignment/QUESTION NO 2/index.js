/*
Following is the SQL Query for the answer for 
2. Refer to the tables below, Write a sql query for finding the subjects for each
student, the subjects should be order by alphabetically .
*/

/*
SELECT
  CUSTOMERS.name,
  SUBJECTS.subjectName,
  GROUP_CONCAT(SUBJECTS.subjectName) AS subjects
FROM
  CUSTOMERS
  INNER JOIN SUBJECTSTUDENTMAPPING ON CUSTOMERS.customerID = SUBJECTSTUDENTMAPPING.customerID
  INNER JOIN SUBJECTS ON SUBJECTSTUDENTMAPPING.subjectId = SUBJECTS.subjectId
GROUP BY
  CUSTOMERS.customerId,
  CUSTOMERS.name
ORDER BY
  CUSTOMERS.name ASC;
*/
