import { Router } from 'express'

import authGuard from '../guard/token.guard'
import { newRecordVal, updateRecordVal } from '../middleware/records.policy'

import { createRecord, getRecords, deleteRecords, updateRecords } from '../controllers/records.controller'

const router = Router()

router.post('/', authGuard, newRecordVal, createRecord)

router.get('/', authGuard, getRecords)

router.delete('/:id', authGuard, deleteRecords)

router.patch('/:id', authGuard, updateRecordVal, updateRecords)

export default router
