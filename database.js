require('dotenv').config();

module.exports = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "main",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
}