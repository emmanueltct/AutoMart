"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginvalidation = loginvalidation;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loginvalidation(data) {
  var schema = {
    email: _joi["default"].string().min(4).required().email(),
    password: _joi["default"].string().min(4).required()
  };
  return _joi["default"].validate(data, schema);
}