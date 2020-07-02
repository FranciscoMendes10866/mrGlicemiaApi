import { Router } from 'express'

import { register, login } from '../controllers/auth.controller'

import { authValidation } from '../middleware/auth.policy'

const router = Router()

router.post('/register', authValidation, register)

router.post('/login', authValidation, login)

export default router
