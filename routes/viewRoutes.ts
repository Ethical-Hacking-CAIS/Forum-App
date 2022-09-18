import express from 'express'
const router = express.Router()
import { getIndexPage, getSingupPage, getLoginPage } from '../controllers/viewsController'

router.get('/', getIndexPage)
router.get('/signup', getSingupPage)
router.get('/login', getLoginPage)

export default router

