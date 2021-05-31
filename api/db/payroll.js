const mysql = require("mysql2");

const MYSQL_ENV_HOST = "127.0.0.1";
const MYSQL_ENV_USER = "root";
const MYSQL_ENV_PASSWORD = "vietnam2000";
const MYSQL_ENV_DATABASE = "payroll";
const MYSQL_ENV_NAME = ""; // can be empty

const pool = mysql.createPool({
    namedPlaceholders: MYSQL_ENV_NAME,
    host: MYSQL_ENV_HOST,
    database: MYSQL_ENV_DATABASE,
    user: MYSQL_ENV_USER,
    password: MYSQL_ENV_PASSWORD,
});

module.exports = pool.promise();