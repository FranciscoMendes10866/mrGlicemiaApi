"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePasswordVal = exports.authValidation = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authValidation = async (req, res, next) => {
  const schema = _joi.default.object({
    email: _joi.default.string().required().email({
      minDomainSegments: 2,
      tlds: {
        allow: ['com', 'pt', 'com.pt']
      }
    }),
    password: _joi.default.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  });

  const {
    email,
    password
  } = req.body;
  const formData = {
    email: email,
    password: password
  };
  const {
    error
  } = schema.validate(formData);

  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        res.sendStatus(400);
        break;

      case 'password':
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

exports.authValidation = authValidation;

const updatePasswordVal = async (req, res, next) => {
  const schema = _joi.default.object({
    password: _joi.default.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  });

  const {
    password
  } = req.body;
  const {
    error
  } = schema.validate({
    password: password
  });

  if (error) {
    switch (error.details[0].context.key) {
      case 'password':
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

exports.updatePasswordVal = updatePasswordVal;