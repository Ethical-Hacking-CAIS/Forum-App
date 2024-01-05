require('dotenv').config()
import path from 'path'
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors'
import logger from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser';
import { createConnection, con } from './db-connection'
 
import viewRouter from './routes/viewRoutes'
import postRouter from './routes/postRoutes'
import userRouter from './routes/userRoutes'

createConnection()
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// views
app.use('/', viewRouter);

// api endpoints
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
