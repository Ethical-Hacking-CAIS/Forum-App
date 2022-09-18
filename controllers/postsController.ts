import { NextFunction, Request, Response } from 'express'
import { FieldInfo, MysqlError } from 'mysql'
import { con } from '../db-connection'

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const { title, summary, date } = req.body
  var sql = 'INSERT INTO post (title, summary, date) VALUES (?, ?, ?)';
  const post = [title, summary, date];
  let postId
  con.query(sql, post, (err: any, result: any, fields: FieldInfo[] | undefined) => {
    if (err) throw err;
    postId = result.insertId 
    console.log('Post created with id: ' + postId);
  })

  res.status(200).json({
    status: 'success',
    data: {
      postId: postId
    }
  })
}

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  con.query('SELECT * FROM post', (err: MysqlError, result: any, fields: FieldInfo[] | undefined) => {
    if (err) throw err;
    res.status(200).json({
      status: 'success',
      data: {
        currentPosts: result
      }
    })
  })
}