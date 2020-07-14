"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRecordVal = exports.newRecordVal = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const newRecordVal = async (req, res, next) => {
  const schema = _joi.default.object({
    insulin: _joi.default.number().required(),
    glucose: _joi.default.string().required(),
    dateTime: _joi.default.string().required(),
    medication: _joi.default.boolean().required()
  });

  const {
    insulin,
    glucose,
    dateTime,
    medication
  } = req.body;
  const formData = {
    insulin: insulin,
    glucose: glucose,
    dateTime: dateTime,
    medication: medication
  };
  const {
    error
  } = schema.validate(formData);

  if (error) {
    switch (error.details[0].context.key) {
      case 'insulin':
        res.sendStatus(400);
        break;

      case 'glucose':
        res.sendStatus(400);
        break;

      case 'dateTime':
        res.sendStatus(400);
        break;

      case 'medication':
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

exports.newRecordVal = newRecordVal;

const updateRecordVal = async (req, res, next) => {
  const schema = _joi.default.object({
    insulin: _joi.default.number(),
    glucose: _joi.default.string(),
    dateTime: _joi.default.string(),
    medication: _joi.default.boolean()
  });

  const {
    insulin,
    glucose,
    dateTime,
    medication
  } = req.body;
  const formData = {
    insulin: insulin,
    glucose: glucose,
    dateTime: dateTime,
    medication: medication
  };
  const {
    error
  } = schema.validate(formData);

  if (error) {
    switch (error.details[0].context.key) {
      case 'insulin':
        res.sendStatus(400);
        break;

      case 'glucose':
        res.sendStatus(400);
        break;

      case 'dateTime':
        res.sendStatus(400);
        break;

      case 'medication':
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

exports.updateRecordVal = updateRecordVal;