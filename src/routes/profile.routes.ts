import { Router } from 'express'

import authGuard from '../guard/token.guard'
import multer from '../middleware/multer.middleware'

import { createProfiles, getProfiles, updateProfiles, updateProfilePicture } from '../controllers/profile.controller'
import { newProfileVal, updateProfileVal } from '../middleware/profile.policy'

const router = Router()

router.post('/', authGuard, multer.single('picture'), newProfileVal, createProfiles)

router.get('/', authGuard, getProfiles)

router.patch('/:id', authGuard, updateProfileVal, updateProfiles)

router.put('/:id', authGuard, multer.single('picture'), updateProfilePicture)

export default router
