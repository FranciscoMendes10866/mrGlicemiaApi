import Joi from '@hapi/joi'

const authValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'pt', 'com.pt'] } }),
    password: Joi.string()
      .required()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })

  const { email, password } = req.body
  const formData = { email: email, password: password }
  const { error } = schema.validate(formData)

  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        res.sendStatus(400)
        break
      case 'password':
        res.sendStatus(400)
        break
      default:
        res.sendStatus(400)
        break
    }
  } else {
    next()
  }
}

const updatePasswordVal = async (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string()
      .required()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })

  const { password } = req.body
  const { error } = schema.validate({ password: password })

  if (error) {
    switch (error.details[0].context.key) {
      case 'password':
        res.sendStatus(400)
        break
      default:
        res.sendStatus(400)
        break
    }
  } else {
    next()
  }
}

export {
  authValidation,
  updatePasswordVal
}
