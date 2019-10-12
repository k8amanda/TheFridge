const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:postgres@localhost:5432/TheFridge';
const client = new Client({
    connectionString: connectionString
});

client.connect();
var app = express();
app.set('port', process.env.PORT || 4000);

app.get('/', function (req, res, next) {
	console.log("Queried:");
    client.query('SELECT * FROM fridge where name = $1', ['Kates Fridge'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        var query_result = result.rows[0];
        res.status(200).send(query_result);
        console.log(query_result);
    });
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});

