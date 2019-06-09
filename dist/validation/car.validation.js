"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.status_Updatevalidation = status_Updatevalidation;
exports.price_Updatevalidation = price_Updatevalidation;
exports.createvalidation = createvalidation;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createvalidation(data) {
  var carschema = {
    owner: _joi["default"].number().integer().required(),
    state: _joi["default"].string().min(2).required(),
    status: _joi["default"].string().required()["default"]('available'),
    price: _joi["default"].number().required(),
    manufacturer: _joi["default"].string().min(2).required(),
    model: _joi["default"].string().min(2).required(),
    body_type: _joi["default"].string().min(2).required()
  };
  return _joi["default"].validate(data, carschema);
}

function status_Updatevalidation(data2) {
  var statusSchema = {
    status: _joi["default"].string().required()
  };
  return _joi["default"].validate(data2, statusSchema);
}

function price_Updatevalidation(data3) {
  var sellerPriceSchema = {
    price: _joi["default"].number().required()
  };
  return _joi["default"].validate(data3, sellerPriceSchema);
}