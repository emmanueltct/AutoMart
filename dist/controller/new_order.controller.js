"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = void 0;

var _order = _interopRequireDefault(require("../models/order.model"));

var _car = _interopRequireDefault(require("../models/car.model"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _order2 = require("../validation/order.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createOrder = function createOrder(req, res) {
  var _ordervalidation = (0, _order2.ordervalidation)(req.body),
      error = _ordervalidation.error;

  if (error) return res.status(400).send(error.details[0].message);
  var car_id = parseInt(req.body.car_id);

  var car_order = _car["default"].find(function (cars) {
    return cars.id === car_id;
  });

  if (!car_order) return res.status(400).json({
    status: 200,
    error: 'the car not found'
  });
  if (car_order.status != 'available') return res.status(400).json({
    status: 200,
    error: 'the car not available is marked as sold'
  });
  var new_order = {
    id: _order["default"].length + 1,
    car_id: car_order.id,
    created_on: Date.now(),
    status: 'Pending',
    price: car_order.price,
    price_offered: req.body.amount
  };

  _order["default"].push(new_order);

  return res.status(200).json({
    status: 200,
    data: new_order
  });
};

exports.createOrder = createOrder;