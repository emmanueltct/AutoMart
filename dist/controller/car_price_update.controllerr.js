"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_price = void 0;

var _car = _interopRequireDefault(require("../models/car.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _car2 = require("../validation/car.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var update_price = function update_price(req, res) {
  var car_id = parseInt(req.params.id);

  var car_update = _car["default"].find(function (cars) {
    return cars.id === car_id;
  });

  if (!car_update) return res.status(400).json({
    status: 400,
    error: 'Id of car not found'
  });

  var _price_Updatevalidati = (0, _car2.price_Updatevalidation)(req.body),
      error = _price_Updatevalidati.error;

  if (error) return res.status(400).json({
    status: 400,
    error: error.details[0].message
  });
  car_update.price = req.body.price;
  return res.status(200).json({
    status: 200,
    data: car_update
  });
};

exports.update_price = update_price;