import { Request, Response, NextFunction } from 'express'
import formatDate from '../utils/formatDate'
import { con } from '../db-connection'
import { FieldInfo, MysqlError } from 'mysql'

export const getIndexPage = async (req: Request, res: Response, next: NextFunction) => {
  con.query('SELECT title, summary, date, email FROM post p inner join user u on p.user_id = u.user_id', (err: MysqlError, result: any, fields: FieldInfo[] | undefined) => {
    if (err) throw err;

    let pageInfo: any = {}
    pageInfo.formatDate = formatDate
    pageInfo.currentPosts = result
    pageInfo.isLoggedIn = req.cookies.isLoggedIn; // setup a cookie on login or signup success

    if (pageInfo.isLoggedIn !== undefined) {
      res
      .status(200)
      .render('posts', pageInfo)
    } else {
      res.redirect('/login')
    }

  })
}

export const getSingupPage = async (req: Request, res: Response, next: NextFunction) => {
  res.render('signup')
}

export const getLoginPage = async (req: Request, res: Response, next: NextFunction) => {
  res.render('login')
}