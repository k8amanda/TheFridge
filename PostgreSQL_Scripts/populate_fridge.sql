/* Able to mix values and returns from Queries*/

INSERT INTO Fridge(name) VALUES('Kates Fridge');

SELECT lastval() INTO last_id;

INSERT INTO Food_Items VALUES('apple', 1, 'milliseconds', '2019-10-11', (SELECT * from last_id));


/* How to set local variables? \echo :last_id just returns "SELECTlastval()". Alternatively just make a table that holds a value like above^*/
/*
\set last_id SELECT lastval()
*/

/* Functions:*/
/*
CREATE FUNCTION add_food(name varchar (50), amnt int, quant_units varchar (50), exp_date date, fridge_id int)
	declare 
BEGIN
	INSERT INTO Food_Items VALUES(name, amnt, quant_units, exp_date, fridge_id)
	WHERE NOT EXISTS (SELECT * from Food_Items where nam = name AND exp_date = exp_date AND fridge_id = fridge_id);
*/
