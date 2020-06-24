import { Router } from 'express'

const router = Router()

router.get('/register', (req, res) => {
  res.send('Hell world')
})

export default router
