"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfileVal = exports.newProfileVal = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const newProfileVal = async (req, res, next) => {
  const schema = _joi.default.object({
    age: _joi.default.number().required(),
    city: _joi.default.string().required(),
    country: _joi.default.string().required(),
    firstName: _joi.default.string().required(),
    lastName: _joi.default.string().required()
  });

  const {
    firstName,
    lastName,
    city,
    country,
    age
  } = req.body;
  const formData = {
    firstName: firstName,
    lastName: lastName,
    city: city,
    country: country,
    age: age
  };
  const {
    error
  } = schema.validate(formData);

  if (error) {
    switch (error.details[0].context.key) {
      case 'firstName':
        res.sendStatus(400);
        break;

      case 'lastName':
        res.sendStatus(400);
        break;

      case 'city':
        res.sendStatus(400);
        break;

      case 'country':
        res.sendStatus(400);
        break;

      case 'age':
        res.sendStatus(400);
        break;

      default:
        res.sendStatus(400);
        break;
    }
  } else {
    next();
  }
};

exports.newProfileVal = newProfileVal;

const updateProfileVal = async (req, res, next) => {
  const schema = _joi.default.object({
    age: _joi.default.number(),
    city: _joi.default.string(),
    country: _joi.default.string(),
    firstName: _joi.default.string(),
    lastName: _joi.default.string()
  });

  const {
    firstName,
    lastName,
    city,
    country,
    age
  } = req.body;
  const formData = {
    firstName: firstName,
    lastName: lastName,
    city: city,
    country: country,
    age: age
  };
  const {
    error
  } = schema.validate(formData);

  if (error) {
    switch (error.details[0].context.key) {
      case 'firstName':
        res.sendStatus(400);
        break;

      case 'lastName':
        res.sendStatus(400);
        break;

      case 'city':
        res.sendStatus(400);
        break;

      case 'country':
        res.sendStatus(400);
        break;

      case 'age':
        res.sendStatus(400);
        break;

      default:
        res.sendStatus(400);
        break;
    }
  } else {
    next();
  }
};

exports.updateProfileVal = updateProfileVal;