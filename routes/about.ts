import express from 'express'
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('about', { title: 'Blog app'})
})

export default router

