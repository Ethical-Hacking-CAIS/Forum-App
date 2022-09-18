import express from 'express'
const router = express.Router()
import { getIndexPage, getSingupPage, getLoginPage } from '../controllers/viewsController'

router.get('/', getIndexPage)
router.get('/login', getLoginPage)
router.get('/signup', getSingupPage)

export default router

