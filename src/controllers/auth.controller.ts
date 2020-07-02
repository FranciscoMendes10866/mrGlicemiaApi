import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

// Register controller
const register = async (req, res) => {
  const { email, password } = req.body

  const emailExist = await prisma.user.findOne({
    where: {
      email: email
    }
  })

  if (emailExist) {
    return res.status(400).json({
      msg: 'Email already taken'
    })
  } else {
    const Salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, Salt)

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword
      }
    })

    return res.send(newUser)
  }
}

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body

  const validEmail = await prisma.user.findOne({
    where: {
      email: email
    }
  })

  if (!validEmail) {
    return res.status(400).json({
      msg: 'Email doesn\'t exists'
    })
  }

  const validPassword = await bcrypt.compare(password, validEmail.password)

  if (!validPassword) {
    return res.status(400).json({
      msg: 'Password doesn\' match'
    })
  } else {
    jwt.sign({ user: validEmail }, process.env.JWT_PRIVATE_KEY, { expiresIn: '7d' }, (err, token) => {
      if (err) {
        return res.status(400).json({
          msg: 'Error generating token'
        })
      } else {
        return res.json({
          token: token
        })
      }
    })
  }
}

export {
  register,
  login
}
