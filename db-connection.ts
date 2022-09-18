import mysql from 'mysql'

export let con: mysql.Connection

export const createConnection = () => {
  con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Sslv1234@",
    database: "la_db"
  });
}