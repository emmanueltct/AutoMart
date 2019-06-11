"use strict";

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function reportflag(data) {
  var flagschema = {
    car_id: _joi["default"].number().integer().required(),
    created_on: joi.date().timestamp().required(),
    reason: _joi["default"].string().min(2).required(),
    description: _joi["default"].string().min(2).required()
  };
  return _joi["default"].validate(data, flagschema);
}