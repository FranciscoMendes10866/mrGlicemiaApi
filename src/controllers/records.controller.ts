
import jwt from 'jsonwebtoken'

const createRecord = async (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, (err) => {
    if (err) {
      return res.status(400).json({
        msg: 'You don\'t have permissions.'
      })
    } else {
      return res.json({
        msg: 'create record route && controller'
      })
    }
  })
}

export {
  createRecord
}
