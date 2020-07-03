import { Router } from 'express'

import authGuard from '../guard/token.guard'

import { register, login, updatePassword } from '../controllers/auth.controller'

import { authValidation, updatePasswordVal } from '../middleware/auth.policy'

const router = Router()

router.post('/register', authValidation, register)

router.post('/login', authValidation, login)

router.put('/', authGuard, updatePasswordVal, updatePassword)

export default router
