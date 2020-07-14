"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRecords = exports.deleteRecords = exports.getRecords = exports.createRecord = void 0;

var _client = require("@prisma/client");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prisma = new _client.PrismaClient(); // Creates a new record

const createRecord = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const {
        insulin,
        glucose,
        dateTime,
        medication
      } = req.body;
      const createRecord = await prisma.records.create({
        data: {
          insulin: insulin,
          glucose: glucose,
          dateTime: dateTime,
          medication: medication,
          User: {
            connect: {
              id: cred.user.id
            }
          }
        }
      });
      return res.json(createRecord);
    }
  });
}; // Gets all records that belongs to a certain user


exports.createRecord = createRecord;

const getRecords = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const getRecords = await prisma.records.findMany({
        where: {
          userId: cred.user.id
        }
      });
      return res.json(getRecords);
    }
  });
}; // Deletes a given record


exports.getRecords = getRecords;

const deleteRecords = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async err => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const {
        id
      } = req.params;
      await prisma.records.delete({
        where: {
          id: Number(id)
        }
      });
      return res.sendStatus(200);
    }
  });
}; // updates a given record


exports.deleteRecords = deleteRecords;

const updateRecords = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async err => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const {
        id
      } = req.params;
      const updateRecord = await prisma.records.update({
        where: {
          id: Number(id)
        },
        data: { ...req.body
        }
      });
      return res.json(updateRecord);
    }
  });
};

exports.updateRecords = updateRecords;