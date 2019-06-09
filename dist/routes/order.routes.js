"use strict";

var _express = _interopRequireDefault(require("express"));

var _authmiddleware = require("../middleware/authmiddleware");

var _new_orderController = require("../controller/new_order.controller.js");

var _update_orderController = require("../controller/update_order.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var order_router = _express["default"].Router();

order_router.post('/', _authmiddleware.auth, _new_orderController.createOrder);
order_router.patch('/:id/price', _authmiddleware.auth, _update_orderController.update_order);
module.exports = order_router;