import mysql from 'mysql'

export let con: mysql.Connection

export const createConnection = () => {
  con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
}