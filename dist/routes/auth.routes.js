"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _token = _interopRequireDefault(require("../guard/token.guard"));

var _auth = require("../controllers/auth.controller");

var _auth2 = require("../middleware/auth.policy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/register', _auth2.authValidation, _auth.register);
router.post('/login', _auth2.authValidation, _auth.login);
router.put('/', _token.default, _auth2.updatePasswordVal, _auth.updatePassword);
var _default = router;
exports.default = _default;