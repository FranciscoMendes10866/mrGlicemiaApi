"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfilePicture = exports.updateProfiles = exports.getProfiles = exports.createProfiles = void 0;

var _client = require("@prisma/client");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prisma = new _client.PrismaClient(); // Creates a profile

const createProfiles = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const {
        firstName,
        lastName,
        city,
        country,
        age
      } = req.body;
      await prisma.profile.create({
        data: {
          age: Number(age),
          city: city,
          country: country,
          firstName: firstName,
          lastName: lastName,
          picture: req.file.path,
          User: {
            connect: {
              id: cred.user.id
            }
          }
        }
      });
      return res.sendStatus(201);
    }
  });
}; // Gets the profile of a certain user


exports.createProfiles = createProfiles;

const getProfiles = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const getProfile = await prisma.profile.findOne({
        where: {
          userId: cred.user.id
        }
      });
      return res.json(getProfile);
    }
  });
}; // updates a given profile


exports.getProfiles = getProfiles;

const updateProfiles = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async err => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const {
        id
      } = req.params;
      const updateProfile = await prisma.profile.update({
        where: {
          id: Number(id)
        },
        data: { ...req.body
        }
      });
      return res.json(updateProfile);
    }
  });
}; // updates a given profile picture


exports.updateProfiles = updateProfiles;

const updateProfilePicture = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async err => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const {
        id
      } = req.params;
      const updatePicture = await prisma.profile.update({
        where: {
          id: Number(id)
        },
        data: {
          picture: req.file.path
        }
      });
      return res.json(updatePicture);
    }
  });
};

exports.updateProfilePicture = updateProfilePicture;