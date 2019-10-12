DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE TABLE Fridge (
    ID serial PRIMARY KEY,
	name varchar(50) NOT NULL
);

CREATE TABLE Food_Items (
	name varchar (50),/*Primary key not null*/
	amnt int NOT NULL CHECK(amnt >= 0),
	quant_units varchar (50) NOT NULL,
	exp_date date,/*Auto set to 0 if not specified by user...?*/
	fridge_id serial NOT NULL,
	FOREIGN KEY (fridge_id) references Fridge(ID),
	PRIMARY KEY (name, exp_date)
);

CREATE TABLE Reminders (
	remind_date date,
	food_name varchar(50),
	food_exp_date date,
	PRIMARY KEY (remind_date, food_name, food_exp_date),
	FOREIGN KEY (food_name, food_exp_date) references Food_Items(name, exp_date)
);
/*
INSERT INTO Fridge(name) VALUES('Kates Fridge');

SELECT lastval() INTO last_id;

INSERT INTO Food_Items VALUES('apple', 1, 'milliseconds', '2019-10-11', (SELECT * from last_id)); 
*/

/*
@TODO: adding serial id's always increments; when deleting, change serial? lastval?
*/