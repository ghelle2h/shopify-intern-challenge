# Shopify Intern challenge - Summer 2022
Additional feature chosen: Ability to create warehouses/locations and assign inventory to specific locations

Initial Setup
You will need node's package manager(NPM). To install node.js and npm please refer to the npm docs here

Clone this repository.

Install dependencies with `npm install`.

## Database Setup


You will need to create a postgres user. You can refer to the postgres docs here on creating a user. When a user has been created, or if you already have a postgres user, add the username to your config.env file PG_HOST=username.

Use the psql -U username, where username is your username, command to login to the PostgreSQL server.

Create a database with CREATE DATABASE shopify;.

Create a file called .env in the server directoy.  Fill in the necessary PostgreSQL configuration. The node-postgres library uses these environment variables by default.

Below is an example of what the .env file should look like:

```
PGHOST=localhost
PGUSER=YOURUSERNAME
PGPASSWORD=YOURPASSWORD (PB_PASS can be removed if you did not setup a password for your postgres user)
PGPORT=5432
```
## SEEDING

Enter in this command in your terminal to log into psql with your username using your database shopify `psql -U username -d shopify`.
Run this command into Postgres to migrate the tables into your database`\i server/db/migrations/01_schema.sql`.
Run these two commands  in order to seed the database, 
1. `\i server/db/seeds/01_warehouse.sql`
2. `\i server/db/seeds/01_inventory.sql `

## START THE APP

To start the app run `npm start`
