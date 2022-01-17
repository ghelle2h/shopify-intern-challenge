const express = require('express');
const path = require('path');
const logger = require('morgan');

const warehouseRoutes = require("./server/routes/warehouseRoutes");
const itemRoutes = require("./server/routes/itemRoutes");
const db = require('./server/db/dbConn')

const app = express();
db.connect()

db.query(`SELECT * FROM inventory;`).then(data => console.log(data.rows))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', itemRoutes);
app.use('/users', warehouseRoutes);

module.exports = app;
