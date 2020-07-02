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
        res.status(400).send({
          error: 'Email not valid.'
        })
        break
      case 'password':
        res.status(400).send({
          error: 'Password not valid.'
        })
        break
      default:
        res.status(400).send({
          error: 'Form not valid.'
        })
        break
    }
  } else {
    next()
  }
}

export default authValidation
