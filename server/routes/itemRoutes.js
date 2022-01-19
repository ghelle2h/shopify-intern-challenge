const express = require('express');
const app = require('../../app');
const router = express.Router();
const db = require('../db/dbConn')


router.get("/", (req,res) => {
  const querySelector = `
  SELECT * FROM warehouse;
  `
  db.query(querySelector)
    .then(data => {
      const templateVars = {
        warehouses: data.rows,
        item: {}
      }
      res.render("itemForm", templateVars)
    })
})
router.post("/create", (req,res) => {
  const {item_name, description, quantity, warehouse} = req.body

  const queryInsert = `
  INSERT INTO 
    inventory(item, description, quantity, warehouse_id) 
  VALUES
    ($1, $2, $3, $4)
  RETURNING *;
  `
  db.query(queryInsert, [item_name, description, quantity, warehouse])
    .then(() => {
      res.redirect("/");
    })
})

router.get("/:id/edit", (req, res) => {
  const _id = req.params.id;

  const querySelector = `
  SELECT inventory.id AS _id, item AS item_name, description, quantity, warehouse_id FROM inventory
  JOIN warehouse ON inventory.warehouse_id = warehouse.id
  WHERE inventory.id = $1
  ;
  `

  db.query(querySelector, [_id])
    .then(data => {
      const templateVars = {
        item: data.rows[0]
      }
      res.render("editForm", templateVars)
    })
})

router.post("/edit/:id", (req,res) => {
  const {item, description, quantity} = req.body
  const id = req.params.id
  const querySelector = `
  UPDATE inventory
  SET item = $1, description = $2, quantity = $3
  WHERE id = $4;
  `
  
  db.query(querySelector, [item, description, quantity, id])
    .then(data => {
      console.log(data.rows)
      res.redirect("/")
    })
    .catch(err => console.log(err))
})

router.post("/:id/delete", (req, res) => {
  const id = req.params.id
  const querySelector = `
  DELETE FROM inventory
  WHERE inventory.id = $1
  RETURNING *
  `
  db.query(querySelector, [id])
    .then(() => res.redirect("/"))
})

module.exports = router