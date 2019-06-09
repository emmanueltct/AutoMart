"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_order = void 0;

var _order = _interopRequireDefault(require("../models/order.model"));

var _car = _interopRequireDefault(require("../models/car.model"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _order2 = require("../validation/order.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var update_order = function update_order(req, res) {
  var order_id = parseInt(req.params.id);

  var order_update = _order["default"].find(function (orders) {
    return orders.id === order_id;
  });

  if (!order_update) return res.status(400).json({
    status: 400,
    error: 'Id of car not found'
  });
  if (order_update.status != 'Pending') return res.status(400).json({
    status: 400,
    error: 'you can not modify the order as long as decision is taken'
  });

  var _orderUpdatevalidatio = (0, _order2.orderUpdatevalidation)(req.body),
      error = _orderUpdatevalidatio.error;

  if (error) return res.status(400).json({
    status: 400,
    error: error.details[0].message
  });
  _order["default"].amount = req.body.amount;
  var new_order = [{
    id: order_update.id,
    buyer: order_update.buyer,
    car_id: order_update.car_id,
    status: order_update.status,
    old_price_offered: order_update.amount,
    new_price_offered: req.body.amount
  }];
  return res.status(200).json({
    status: 200,
    data: new_order
  });
};

exports.update_order = update_order;