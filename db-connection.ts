import mysql from 'mysql'

export let con: mysql.Connection

export const createConnection = () => {
  con = mysql.createConnection({
    host: "localhost",
    user: "onPremiseUser",
    password: "onPremisePassword",
    database: "blogdb"
  });
}