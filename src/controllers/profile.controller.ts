import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

// Creates a profile
const createProfiles = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      const { firstName, lastName, city, country, age } = req.body
      await prisma.profile.create({
        data: {
          age: Number(age),
          city: city,
          country: country,
          firstName: firstName,
          lastName: lastName,
          picture: req.file.path,
          User: { connect: { id: cred.user.id } }
        }
      })
      return res.sendStatus(201)
    }
  })
}

// Gets the profile of a certain user
const getProfiles = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      const getProfile = await prisma.profile.findOne({
        where: {
          userId: cred.user.id
        }
      })
      return res.json(getProfile)
    }
  })
}

// updates a given profile
const updateProfiles = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      const { id } = req.params
      const updateProfile = await prisma.profile.update({
        where: {
          id: Number(id)
        },
        data: {
          ...req.body
        }
      })
      return res.json(updateProfile)
    }
  })
}

// updates a given profile picture
const updateProfilePicture = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      const { id } = req.params
      const updatePicture = await prisma.profile.update({
        where: {
          id: Number(id)
        },
        data: {
          picture: req.file.path
        }
      })
      return res.json(updatePicture)
    }
  })
}

export {
  createProfiles,
  getProfiles,
  updateProfiles,
  updateProfilePicture
}
