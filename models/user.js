const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('users', {
name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bang_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
    timestamps: true, // Add this property to enable timestamps
    createdAt: 'created_at', // Specify the column name for createdAt
    updatedAt: 'updated_at', // Specify the column name for updatedAt
}

);

module.exports = User