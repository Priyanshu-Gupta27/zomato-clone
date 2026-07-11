const Sequelize = require('sequelize');

const db = new Sequelize('food_db', 'root', 'priyan969666', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

 

module.exports = db;