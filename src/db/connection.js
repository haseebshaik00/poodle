const Sequelize = require('sequelize');

const db = new Sequelize('poodleDB', 'poodleUser', 'poodle123', {
    host: 'localhost',
    dialect: 'mysql'
  });

db.authenticate()
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

module.exports = {
  db, Sequelize
}