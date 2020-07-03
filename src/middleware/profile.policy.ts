import Joi from '@hapi/joi'

const newProfileVal = async (req, res, next) => {
  const schema = Joi.object({
    age: Joi.number()
      .required(),
    city: Joi.string()
      .required(),
    country: Joi.string()
      .required(),
    firstName: Joi.string()
      .required(),
    lastName: Joi.string()
      .required()
  })

  const { firstName, lastName, city, country, age } = req.body
  const formData = { firstName: firstName, lastName: lastName, city: city, country: country, age: age }
  const { error } = schema.validate(formData)

  if (error) {
    switch (error.details[0].context.key) {
      case 'firstName':
        res.sendStatus(400)
        break
      case 'lastName':
        res.sendStatus(400)
        break
      case 'city':
        res.sendStatus(400)
        break
      case 'country':
        res.sendStatus(400)
        break
      case 'age':
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

const updateProfileVal = async (req, res, next) => {
  const schema = Joi.object({
    age: Joi.number(),
    city: Joi.string(),
    country: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string()
  })

  const { firstName, lastName, city, country, age } = req.body
  const formData = { firstName: firstName, lastName: lastName, city: city, country: country, age: age }
  const { error } = schema.validate(formData)

  if (error) {
    switch (error.details[0].context.key) {
      case 'firstName':
        res.sendStatus(400)
        break
      case 'lastName':
        res.sendStatus(400)
        break
      case 'city':
        res.sendStatus(400)
        break
      case 'country':
        res.sendStatus(400)
        break
      case 'age':
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
  newProfileVal,
  updateProfileVal
}
