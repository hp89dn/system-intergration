const mssql = require("mssql");

const MYSQL_ENV_SERVER = "DESKTOP-1Q2M2MJ";
const MYSQL_ENV_USER = "";
const MYSQL_ENV_PASSWORD = "";
const MYSQL_ENV_DATABASE = "HR";

const pool = new mssql.ConnectionPool({
    server: MYSQL_ENV_SERVER,
    database: MYSQL_ENV_DATABASE,
    user: MYSQL_ENV_USER,
    password: MYSQL_ENV_PASSWORD,
    port: 1433
});

module.exports = pool.connect();