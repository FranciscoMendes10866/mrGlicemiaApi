"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePassword = exports.login = exports.register = void 0;

var _client = require("@prisma/client");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prisma = new _client.PrismaClient(); // Register controller

const register = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  const emailExist = await prisma.user.findOne({
    where: {
      email: email
    }
  });

  if (emailExist) {
    return res.sendStatus(400);
  } else {
    const Salt = await _bcrypt.default.genSalt(10);
    const hashedPassword = await _bcrypt.default.hash(password, Salt);
    await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword
      }
    });
    return res.sendStatus(201);
  }
}; // Login controller


exports.register = register;

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  const validEmail = await prisma.user.findOne({
    where: {
      email: email
    }
  });

  if (!validEmail) {
    return res.sendStatus(404);
  }

  const validPassword = await _bcrypt.default.compare(password, validEmail.password);

  if (!validPassword) {
    return res.sendStatus(400);
  } else {
    _jsonwebtoken.default.sign({
      user: validEmail
    }, process.env.JWT_PRIVATE_KEY, (err, token) => {
      if (err) {
        return res.sendStatus(400);
      } else {
        return res.json({
          token: token
        });
      }
    });
  }
}; // updates the user password


exports.login = login;

const updatePassword = (req, res) => {
  _jsonwebtoken.default.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const {
        password
      } = req.body;
      const Salt = await _bcrypt.default.genSalt(10);
      const hashedPassword = await _bcrypt.default.hash(password, Salt);
      const updatePicture = await prisma.user.update({
        where: {
          id: cred.user.id
        },
        data: {
          password: hashedPassword
        }
      });
      return res.json(updatePicture);
    }
  });
};

exports.updatePassword = updatePassword;