"use strict";

var _express = _interopRequireDefault(require("express"));

var _loginController = require("../controller/login.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login_router = _express["default"].Router();

login_router.post('/', _loginController.userLogin);
module.exports = login_router;