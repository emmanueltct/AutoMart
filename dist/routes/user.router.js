"use strict";

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controller/user.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user_router = _express["default"].Router();

user_router.post('/signup', _userController.createUser);
user_router.get('/signup', _userController.getUser);
module.exports = user_router;