"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _token = _interopRequireDefault(require("../guard/token.guard"));

var _records = require("../middleware/records.policy");

var _records2 = require("../controllers/records.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/', _token.default, _records.newRecordVal, _records2.createRecord);
router.get('/', _token.default, _records2.getRecords);
router.delete('/:id', _token.default, _records2.deleteRecords);
router.patch('/:id', _token.default, _records.updateRecordVal, _records2.updateRecords);
var _default = router;
exports.default = _default;