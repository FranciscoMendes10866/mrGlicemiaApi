import Joi from '@hapi/joi'

const newRecordVal = async (req, res, next) => {
  const schema = Joi.object({
    insulin: Joi.number()
      .required(),
    glucose: Joi.string()
      .required(),
    dateTime: Joi.string()
      .required(),
    medication: Joi.boolean()
      .required()
  })

  const { insulin, glucose, dateTime, medication } = req.body
  const formData = { insulin: insulin, glucose: glucose, dateTime: dateTime, medication: medication }
  const { error } = schema.validate(formData)

  if (error) {
    switch (error.details[0].context.key) {
      case 'insulin':
        res.sendStatus(400)
        break
      case 'glucose':
        res.sendStatus(400)
        break
      case 'dateTime':
        res.sendStatus(400)
        break
      case 'medication':
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

const updateRecordVal = async (req, res, next) => {
  const schema = Joi.object({
    insulin: Joi.number(),
    glucose: Joi.string(),
    dateTime: Joi.string(),
    medication: Joi.boolean()
  })

  const { insulin, glucose, dateTime, medication } = req.body
  const formData = { insulin: insulin, glucose: glucose, dateTime: dateTime, medication: medication }
  const { error } = schema.validate(formData)

  if (error) {
    switch (error.details[0].context.key) {
      case 'insulin':
        res.sendStatus(400)
        break
      case 'glucose':
        res.sendStatus(400)
        break
      case 'dateTime':
        res.sendStatus(400)
        break
      case 'medication':
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
  newRecordVal,
  updateRecordVal
}
