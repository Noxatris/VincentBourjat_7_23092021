const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./config');


const Users = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
  }
},{timestamps:false});

module.exports = Users;
