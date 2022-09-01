/* Write your T-SQL query statement below */

select FirstName, LastName, City, State 
from Address Right JOIN Person
ON Person.PersonId = Address.PersonId

