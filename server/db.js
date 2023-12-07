const {Sequelize} = require('sequelize');


module.exports = new Sequelize(
    process.env.DB_NAME, // database name
    process.env.DB_USER, // database name
    process.env.DB_PASSWORD, // password
    {
        dialect: 'postgres',
        host: process.env.DB_HOST, // database host
        port: process.env.DB_PORT, // database port
    }
)