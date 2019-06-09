"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupvalidation = signupvalidation;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function signupvalidation(data) {
  var schema = {
    email: _joi["default"].string().min(4).required().email(),
    first_name: _joi["default"].string().min(4).required(),
    last_name: _joi["default"].string().min(4).required(),
    password: _joi["default"].string().min(4).required(),
    address: _joi["default"].string().min(2).required(),
    is_admin: _joi["default"]["boolean"]()
  };
  return _joi["default"].validate(data, schema);
}