import { NextFunction, Response } from 'express'

export const protect = async (req: any, res: Response, next: NextFunction) => {
  let isLoggedIn = req.cookies.isLoggedIn
  if (isLoggedIn === undefined) {
    req.url = '/login'
    req.method = 'GET'
    next()
  } else {
    req.user = isLoggedIn
    res.locals.user
    next();
  }
}