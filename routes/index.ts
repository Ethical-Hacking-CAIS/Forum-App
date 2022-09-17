import express from 'express'
import formatDate from '../utils/formatDate'
const router = express.Router()

router.get('/', (req, res, next) => {
  let pageInfo: any = {}
  pageInfo.title =  'Blog app',
  pageInfo.formatDate = formatDate
  res.render('posts', pageInfo)
})

export default router

