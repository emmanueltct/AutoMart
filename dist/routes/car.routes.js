"use strict";

var _express = _interopRequireDefault(require("express"));

var _authmiddleware = require("../middleware/authmiddleware");

var _carController = require("../controller/car.controller.js");

var _car_status_updateController = require("../controller/car_status_update.controller.js");

var _car_price_update = require("../controller/car_price_update.controllerr");

var _car_singleController = require("../controller/car_single.controller.js");

var _admin_delete = _interopRequireDefault(require("../controller/admin_delete.controller"));

var _admin_view = require("../controller/admin_view.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var car_router = _express["default"].Router();

car_router.post('/', _authmiddleware.auth, _carController.createCar);
car_router.get('/', _authmiddleware.auth, _admin_view.getCar);
car_router.get('/:id/', _authmiddleware.auth, _car_singleController.singleCar);
car_router.patch('/:id/status', _authmiddleware.auth, _car_status_updateController.update_status);
car_router.patch('/:id/price', _authmiddleware.auth, _car_price_update.update_price);
car_router["delete"]('/:id', _authmiddleware.auth, _admin_delete["default"]);
module.exports = car_router;