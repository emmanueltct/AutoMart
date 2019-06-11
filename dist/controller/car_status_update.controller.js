"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_status = void 0;

var _car = _interopRequireDefault(require("../models/car.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _car2 = require("../validation/car.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var update_status = function update_status(req, res) {
  var car_id = parseInt(req.params.id);

  var car_update = _car["default"].find(function (cars) {
    return cars.id === car_id;
  });

  if (!car_update) return res.status(400).json({
    status: 400,
    error: 'Id of car not found'
  });

  var _status_Updatevalidat = (0, _car2.status_Updatevalidation)(req.body),
      error = _status_Updatevalidat.error;

  if (error) return res.status(400).json({
    status: 400,
    error: error.details[0].message
  });
  if (!car_update.status != 'available') return res.status(400).json({
    status: 400,
    error: 'this car is arleady marked'
  });
  car_update.status = req.body.status;
  return res.status(200).json({
    status: 200,
    data: car_update
  });
};

exports.update_status = update_status;