//require('dotenv').config();
const express = require('express');
const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL//POSTGRES_CONNECTION_STRING//'postgres://postgres:postgres@localhost:5432/TheFridge';
const client = new Client({
    connectionString: connectionString
});

client.connect();
var app = express();
app.set('port', process.env.PORT || 4000);

// Parse URL-encoded bodies (as sent by HTML forms)
//app.use(express.urlencoded());
app.use(express.urlencoded({extended: true})); 
//app.use(express.json());   
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

/*Select kates fridge, pass back to ReactNative*/
app.get('/', function (req, res, next) {
	console.log("Selected:");
    client.query('SELECT * FROM fridge where name = $1', ['James Fridge'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        var query_result = result.rows[0];
        res.status(200).send(query_result);
        console.log(query_result);
    });
});

/*Insert an entity into the fridge table*/
app.get('/add', function (req, res, next) {
	console.log("Inserted:");
    client.query('insert into fridge(name) values($1)', ['James Fridge'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
/*        var query_result = result.rows[0];
        res.status(200).send(query_result);
        console.log(query_result);*/
    });
});

/*Delete a hard-coded entity from the fridge table*/
app.get('/delete', function (req, res, next) {
	console.log("Deleted:");
    client.query('delete from fridge where name = $1', ['James Fridge'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        var query_result = result.rows[0];
        res.status(200).send(query_result);
        console.log(query_result);
    });
});

/*Selecting a VARIABLE name from the fridge table*/
app.post('/select_var', function (req, res, next) {
	console.log("Selecting:");
	console.log(req.body);
	console.log(req.body.name)
//	console.log(req.body.name);
	client.query('SELECT * FROM fridge where name = $1', [req.body.name], function (err, result) {
    //client.query('select * from fridge where name = $1', [req.body.name], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        var query_result = result.rows[0];
        res.status(200).send(query_result);
        console.log(query_result);
    });
});

/*Deleting a VARIABLE name from the fridge table*/
app.post('/delete_var', function (req, res, next) {
	console.log("Deleting:");
	console.log(req.body.name)
	client.query('delete from Food_Items where name = $1', [req.body.name], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send("Deletion Succeeded");
    });
});

/*Insert an entity into the fridge table, add 1 to the amount if already in the table*/
app.post('/add_var', function (req, res, next) {
	console.log("Inserting:");
	console.log(req.body.name);
	console.log(req.body.exp_date);
	//console.log(req.body.amnt); @TODO: to be implemented when users can enter amount of an individual food
	let amount = 1;	//@TODO: initialized to 1 to increment amount in fridge by 1 when added

	client.query('select * from Food_Items where name = $1 and exp_date = $2', [req.body.name, req.body.exp_date], function (err, result) {
        if (err) {
        	console.log("ERROR 1");
            console.log(err);
            res.status(400).send(err);
            return;
        }
        var query_result = result.rows[0];
        //res.status(200).send(query_result);
        console.log("QUERY RESULT: " + JSON.stringify(query_result));

        if (query_result != undefined) {
        	console.log("QUERY AMOUNT: " + query_result['amnt']);
//        	amount = req.body.amnt + query_result['amnt'];
			client.query('update Food_Items set amnt = $1 where name = $2 and exp_date = $3', [amount + query_result['amnt'], req.body.name, req.body.exp_date], function (err, result) {
		        if (err) {
		            console.log(err);
		            return;
		            //res.status(400).send(err);
		        }
		    });
		}
		else {
			client.query('insert into Food_Items values($1, $2, $3, $4, $5)', [req.body.name, amount, 'interesting', req.body.exp_date, 1], function (err, result) {
		        if (err) {
		            console.log(err);
		            return;
		            //res.status(400).send(err);
		        }
		    });
		}
        console.log("ADDED SUCCESSFULLY");
        res.status(200).send(query_result);
	})

});

/*Selecting all values from the fridge table*/
app.get('/select_all_fridges', function (req, res, next) {
	console.log("Selecting all fridges:");
//	console.log(req.body.name); //NO PARAMETERS PASSED IN
	client.query('SELECT * FROM Fridge', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        var query_json_result = result.rows;

        var query_result = [];
        for (var i in query_json_result) {
        	query_result.push([query_json_result[i]['id'], query_json_result[i]['name']]);
        }

        res.status(200).send(query_result);
        console.log(query_result[3][0]);
    });
});


/*Selecting Food_names and expiration_dates from the fridge table*/
app.get('/select_food_name_expdate', function (req, res, next) {
//	console.log("Selecting all fridges:");
//	console.log(req.body.name); //NO PARAMETERS PASSED IN (until sorting, default is by name)
	client.query('SELECT * FROM Food_Items order by name', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        var query_json_result = result.rows;

        var query_result = [];
        for (var i in query_json_result){
        	query_result.push([query_json_result[i]['name'], query_json_result[i]['exp_date']]);
        }

        res.status(200).send(query_result);
//        console.log(query_result);
    });
});



app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
    console.log(process.env.DATABASE_URL);
});



