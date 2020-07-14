"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _token = _interopRequireDefault(require("../guard/token.guard"));

var _multer = _interopRequireDefault(require("../middleware/multer.middleware"));

var _profile = require("../controllers/profile.controller");

var _profile2 = require("../middleware/profile.policy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/', _token.default, _multer.default.single('picture'), _profile2.newProfileVal, _profile.createProfiles);
router.get('/', _token.default, _profile.getProfiles);
router.patch('/:id', _token.default, _profile2.updateProfileVal, _profile.updateProfiles);
router.put('/:id', _token.default, _multer.default.single('picture'), _profile.updateProfilePicture);
var _default = router;
exports.default = _default;