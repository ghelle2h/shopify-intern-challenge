const express = require('express');
const path = require('path');
const logger = require('morgan');

const warehouseRoutes = require("./server/routes/warehouseRoutes");
const itemRoutes = require("./server/routes/itemRoutes");
const indexRoute = require("./server/routes/index");
const db = require('./server/db/dbConn')

const app = express();
db.connect()

app.set("view engine", "ejs");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/item', itemRoutes);
app.use('/warehouse', warehouseRoutes);



module.exports = app;
