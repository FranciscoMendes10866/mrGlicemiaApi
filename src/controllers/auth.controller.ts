// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

const register = (req, res) => {
  res.json({
    msg: 'This is the register controller - auth'
  })
}

const login = (req, res) => {
  res.json({
    msg: 'This is the login controller - auth'
  })
}

export {
  register,
  login
}
