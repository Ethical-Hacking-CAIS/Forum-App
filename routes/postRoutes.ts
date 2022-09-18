import express from 'express'
const router = express.Router()
import { createPost, getPosts } from '../controllers/postsController'

router.post('/', createPost)
router.get('/', getPosts)

export default router