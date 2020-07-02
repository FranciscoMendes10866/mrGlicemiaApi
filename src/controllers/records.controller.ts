import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

// Creates a new record
const createRecord = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      const { insulin, glucose, dateTime, medication } = req.body
      await prisma.records.create({
        data: {
          insulin: insulin,
          glucose: glucose,
          dateTime: dateTime,
          medication: medication,
          User: { connect: { id: cred.user.id } }
        }
      })
      return res.sendStatus(201)
    }
  })
}

// Gets all records that belongs to a certain user
const getRecords = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403)
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

// Deletes a given record
const deleteRecords = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      const { id } = req.params
      await prisma.records.delete({
        where: {
          id: Number(id)
        }
      })
      return res.sendStatus(200)
    }
  })
}

// updates a given record
const updateRecords = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      const { id } = req.params
      const updateRecord = await prisma.records.update({
        where: {
          id: Number(id)
        },
        data: {
          ...req.body
        }
      })
      return res.json(updateRecord)
    }
  })
}

export {
  createRecord,
  getRecords,
  deleteRecords,
  updateRecords
}
