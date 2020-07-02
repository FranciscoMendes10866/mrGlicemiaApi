import Joi from '@hapi/joi'

const recordsValidation = async (req, res, next) => {
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
        res.status(400).send({
          error: 'Insulin not valid.'
        })
        break
      case 'glucose':
        res.status(400).send({
          error: 'Glucose not valid.'
        })
        break
      case 'dateTime':
        res.status(400).send({
          error: 'Date not valid.'
        })
        break
      case 'medication':
        res.status(400).send({
          error: 'Medication not valid.'
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

export default recordsValidation
