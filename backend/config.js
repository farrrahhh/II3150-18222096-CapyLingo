import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  dialect: "mysql2",
  logging: false,
});

export default db;
