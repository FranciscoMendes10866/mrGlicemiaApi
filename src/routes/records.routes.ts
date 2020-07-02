import { Router } from 'express'

import authGuard from '../guard/token.guard'

import { createRecord, getRecords } from '../controllers/records.controller'

const router = Router()

router.post('/', authGuard, createRecord)

router.get('/', authGuard, getRecords)

export default router
