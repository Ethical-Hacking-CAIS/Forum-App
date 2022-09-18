import { Request, Response, NextFunction } from 'express'
import formatDate from '../utils/formatDate'
import { con } from '../db-connection'
import { FieldInfo, MysqlError } from 'mysql'

export const getIndexPage = async (req: Request, res: Response, next: NextFunction) => {
  con.query('SELECT * FROM post', (err: MysqlError, result: any, fields: FieldInfo[] | undefined) => {
    if (err) throw err;

    let pageInfo: any = {}
    pageInfo.formatDate = formatDate
    pageInfo.currentPosts = result
    res
      .status(200)
      .render('posts', pageInfo)
  })
}

export const getSingupPage = async (req: Request, res: Response, next: NextFunction) => {
  res.render('signup')
}

export const getLoginPage = async (req: Request, res: Response, next: NextFunction) => {
  res.render('login')
}