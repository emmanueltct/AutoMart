"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCar = void 0;

var _car = _interopRequireDefault(require("../models/car.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import { status_Updatevalidation, price_Updatevalidation,createvalidation } from '../validation/car.validation';
var getCar = function getCar(req, res) {
  if (_car["default"].length > 0) return res.status(200).json({
    status: 200,
    data: _car["default"]
  });
};

exports.getCar = getCar;