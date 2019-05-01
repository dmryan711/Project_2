require("dotenv").config();


module.exports = {
    "development": {
        "username": process.env.MYSQL_USERNAME,
        "password": process.env.MYSQL_PASSWORD,
        "host": process.env.MYSQL_HOSTNAME,
        "port": process.env.MYSQL_PORT,
        "database": process.env.MYSQL_DATABASE,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.PRODUCTION_HOSTNAME,
        "password": process.env.PRODUCTION_PASSWORD,
        "database": process.env.PRODUCTION_DATABASE,
        "host": process.env.PRODUCTION_HOSTNAME,
        "dialect": "mysql"
    }
}
