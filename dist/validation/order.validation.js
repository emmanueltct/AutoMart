"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordervalidation = ordervalidation;
exports.orderUpdatevalidation = orderUpdatevalidation;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ordervalidation(data) {
  var orderschema = {
    buyer: _joi["default"].number().integer().required(),
    car_id: _joi["default"].number().integer().required(),
    amount: _joi["default"].number().required(),
    status: _joi["default"].string().min(4).required()
  };
  return _joi["default"].validate(data, orderschema);
}

function orderUpdatevalidation(data2) {
  var updateschema = {
    amount: _joi["default"].number().required()
  };
  return _joi["default"].validate(data2, updateschema);
}