import express from 'express'
const router = express.Router()
import { createUser,loginUser} from '../controllers/usersController'

router.post('/', createUser)
router.post('/login', loginUser) 

export default router