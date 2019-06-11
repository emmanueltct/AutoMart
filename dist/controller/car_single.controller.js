"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleCar = void 0;

var _car = _interopRequireDefault(require("../models/car.model"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var singleCar = function singleCar(req, res) {
  var car_id = parseInt(req.params.id);

  var singlecar = _car["default"].find(function (cars) {
    return cars.id === car_id;
  });

  if (!singlecar) return res.status(400).json({
    status: 400,
    error: 'Id of car not found'
  });
  return res.status(200).json({
    status: 200,
    data: singlecar
  });
};

exports.singleCar = singleCar;