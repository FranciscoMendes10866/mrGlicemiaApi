import { Router } from 'express'

import authGuard from '../guard/token.guard'

import { createRecord } from '../controllers/records.controller'

const router = Router()

router.post('/', authGuard, createRecord)

export default router
