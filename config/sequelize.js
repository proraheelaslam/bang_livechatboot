const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bangs', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
