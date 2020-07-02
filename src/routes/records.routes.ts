import { Router } from 'express'

import authGuard from '../guard/token.guard'
import recordsValidation from '../middleware/records.policy'

import { createRecord, getRecords } from '../controllers/records.controller'

const router = Router()

router.post('/', authGuard, recordsValidation, createRecord)

router.get('/', authGuard, getRecords)

export default router
