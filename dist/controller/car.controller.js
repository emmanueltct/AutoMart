"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCar = void 0;

var _car = _interopRequireDefault(require("../models/car.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _car2 = require("../validation/car.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createCar = function createCar(req, res) {
  var _createvalidation = (0, _car2.createvalidation)(req.body),
      error = _createvalidation.error;

  if (error) return res.status(400).json({
    status: 400,
    error: error.details[0].message
  });

  var owner = _user["default"].find(function (exist) {
    return exist.id === parseInt(req.body.owner);
  });

  if (!owner) return res.status(400).json({
    status: 400,
    error: 'car owner id  not found create new account or try your own id '
  });
  var new_car = {
    id: _car["default"].length + 1,
    email: owner.email,
    created_on: Date.now(),
    state: req.body.state,
    status: req.body.status,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    body_type: req.body.body_type
  };

  _car["default"].push(new_car);

  return res.status(200).json({
    status: 200,
    data: new_car
  });
};

exports.createCar = createCar;