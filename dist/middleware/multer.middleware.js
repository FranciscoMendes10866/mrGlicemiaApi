"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerStorageCloudinary = require("multer-storage-cloudinary");

var _cloudinary = _interopRequireDefault(require("../config/cloudinary.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = new _multerStorageCloudinary.CloudinaryStorage({
  cloudinary: _cloudinary.default,
  params: {
    folder: process.env.CLOUD_FOLDER
  }
});
const parser = (0, _multer.default)({
  storage: storage
});
var _default = parser;
exports.default = _default;