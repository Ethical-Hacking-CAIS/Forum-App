import { NextFunction, Request, Response } from 'express'
import { FieldInfo, MysqlError } from 'mysql'
import { con } from '../db-connection'

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const isLoggedIn = req.cookies.isLoggedIn
  var sql = 'SELECT user_id FROM user where email = ?';
  const email = [isLoggedIn];

  con.query(sql, email, (err: any, result: any, fields: FieldInfo[] | undefined) => {
    if (err) throw err;

    const { title, summary, date } = req.body
    sql = 'INSERT INTO post (title, summary, date, user_id) VALUES (?, ?, ?, ?)';
    const post = [title, summary, date, result[0].user_id];
    let postId
    con.query(sql, post, (err: any, result: any, fields: FieldInfo[] | undefined) => {
      if (err) throw err;
      postId = result.insertId 
      console.log('Post created with id: ' + postId);

      return res.status(200).json({
        status: 'success',
        data: {
          postId: postId
        }
      })
    })
  })
}

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  con.query('SELECT title, summary, date, email FROM post p inner join user u on p.user_id = u.user_id', (err: MysqlError, result: any, fields: FieldInfo[] | undefined) => {
    if (err) throw err;
    return res.status(200).json({
      status: 'success',
      data: {
        currentPosts: result
      }
    })
  })
}