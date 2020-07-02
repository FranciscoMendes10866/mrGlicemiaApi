import { PrismaClient } from '@prisma/client'

import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const createRecord = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.status(400).json({
        msg: 'You don\'t have permissions.'
      })
    } else {
      const { insulin, glucose, dateTime, medication } = req.body
      const newRecord = await prisma.records.create({
        data: {
          insulin: insulin,
          glucose: glucose,
          dateTime: dateTime,
          medication: medication,
          user: { connect: { id: cred.user.id } }
        }
      })
      return res.json(newRecord)
    }
  })
}

export {
  createRecord
}
