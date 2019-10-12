/* Able to mix values and returns from Queries*/

INSERT INTO Fridge(name) VALUES('Kates Fridge');

SELECT lastval() INTO last_id;

INSERT INTO Food_Items VALUES('apple', 1, 'units', '2019-10-11', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('banana', 2, 'peels', '2019-10-12', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('cantelope', 3, 'melons', '2019-10-13', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('durian', 4, 'fruits', '2019-10-14', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('enchilada', 5, 'wraps', '2019-10-15', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('fruit', 6, 'platters', '2019-10-16', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('grape', 7, 'bunches', '2019-10-17', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('honeysuckle', 8, 'petals', '2019-10-18', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('ice cream', 9, 'cones', '2019-10-19', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('jackfruit', 10, 'stems', '2019-10-20', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('kiwi', 11, 'birds', '2019-10-21', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('lime', 12, 'juices', '2019-10-22', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('mango', 13, 'db', '2019-10-23', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('nectarine', 14, 'cores', '2019-10-24', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('orange', 15, 'seeds', '2019-10-25', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('potato', 16, 'roots', '2019-10-26', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('quiche', 17, 'pies', '2019-10-27', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('randy', 18, 'RANDY', '2019-10-28', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('strawberry', 19, 'shortcakes', '2019-10-29', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('tuna', 20, 'salads', '2019-10-30', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('umbrella', 21, 'spines', '2019-10-31', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('venus fly trap', 22, 'flies', '2019-11-01', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('wild berries', 23, 'berries', '2019-11-02', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('xylophone', 24, 'planks', '2019-11-03', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('yam', 25, 'lbs', '2019-11-04', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('zucchini', 26, 'stalks', '2019-11-05', (SELECT * from last_id));
INSERT INTO Food_Items VALUES('rasputinberry', 26, 'bluerries', '2019-11-05', (SELECT * from last_id));

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
