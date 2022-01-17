const db = require('./db/dbConn')

db.connect(console.log("connected"))

db.query(`SELECT * FROM information_schema.columns;`).then(data => {
  console.log(data.rows)
})