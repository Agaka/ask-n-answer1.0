const Sequelize = require("sequelize")

const connection = new Sequelize('node', "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection