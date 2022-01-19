const express = require('express');
const db = require('../db/dbConn');
const router = express.Router();

router.get("/add_warehouse", (req, res) => {
  res.render("warehouseForm")
});

router.post("/add_warehouse", (req, res) => {
  const {warehouse_name, city, street_address} = req.body;
  const queryInsert = `
  INSERT INTO 
    warehouse(name, city, street_address)
  VALUES
    ($1, $2, $3)
  RETURNING *;
  `
  db.query(queryInsert, [warehouse_name, city, street_address])
    .then(() => {
      res.redirect("/")
    });
});

module.exports = router