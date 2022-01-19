const express = require('express');
const router = express.Router();
const db = require('../db/dbConn')


router.get("/", (req,res) => {
  const querySelector = `
  SELECT inventory.id AS _id, item AS item_name, description, quantity, warehouse.name AS name FROM inventory
  JOIN warehouse ON warehouse_id = warehouse.id
  ORDER BY _id ASC;
  `
  db.query(querySelector)
    .then(data => {

      const templateVars = {
        inventory: data.rows
      }
      console.log(templateVars.inventory)
    res.render("index", templateVars)  
    })
    .catch(err => console.log(err))
  
})

module.exports = router;