"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _compression = _interopRequireDefault(require("compression"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _records = _interopRequireDefault(require("./routes/records.routes"));

var _profile = _interopRequireDefault(require("./routes/profile.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: false
}));
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use((0, _morgan.default)('dev'));
app.use((0, _compression.default)());
app.use('/api/v1/auth', _auth.default);
app.use('/api/v1/records', _records.default);
app.use('/api/v1/profile', _profile.default);
var _default = app;
exports.default = _default;