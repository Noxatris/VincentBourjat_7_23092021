const Sequelize = require('sequelize');
const sequelize = new Sequelize('Groupomania', 'root', 'password', {
    dialect: 'mysql',
    timezone: '+02:00'
})

module.exports = sequelize