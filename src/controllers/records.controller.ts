import { PrismaClient } from '@prisma/client'

import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

// Creates a new record
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
          User: { connect: { id: cred.user.id } }
        }
      })
      return res.json(newRecord)
    }
  })
}

// Gets all records that belongs to a certain user
const getRecords = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.status(400).json({
        msg: 'You don\'t have permissions.'
      })
    } else {
      const getRecords = await prisma.records.findMany({
        where: {
          userId: cred.user.id
        }
      })
      return res.json(getRecords)
    }
  })
}

export {
  createRecord,
  getRecords
}
