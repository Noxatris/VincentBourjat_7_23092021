const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./config');
const Message = require("./message");
const User = require('./user');

const Commentaire = sequelize.define("Messages", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    contenu: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.INTEGER,
      references: {
          model: User,
          key: 'id'
      }
    },
    message_principale: {
        type: DataTypes.INTEGER,
        references: {
            model: Message,
            key: 'id'
        }
    }
  });
  
  module.exports = Commentaire;