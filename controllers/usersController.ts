import { NextFunction, Request, Response } from 'express'
import { FieldInfo, MysqlError } from 'mysql'
import { con } from '../db-connection'

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  var sql = 'INSERT INTO user (email, password) VALUES (?, ?)';
  const user = [email, password];
  let userId
  con.query(sql, user, (err: any, result: any, fields: FieldInfo[] | undefined) => {
    if (err) throw err;
    userId = result.insertId 
    console.log('User created with id: ' + userId);
    res.cookie("isLoggedIn", true)
  })

  res.status(200).json({
    status: 'success',
    data: {
      userId: userId
    }
  })
}

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    var sql = 'SELECT * FROM user WHERE email = ? and password=?';
    let isLoggedIn = true
    con.query(sql,[email,password], (err: any, result: any, fields: FieldInfo[] | undefined) => {
      if (err) throw err;
      if (result && result.length==0) isLoggedIn = false;
      if (isLoggedIn==true){
        res.cookie("isLoggedIn", true)
        res.status(200).json({
            status: 'success',
            message: 'success'
          })
       }
       else {
        res.status(404).json({
            status: 'failed',
            message: 'failed'
          })
       }
    })
   
    
  }
