"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _user = _interopRequireDefault(require("./routes/user.router"));

var _login = _interopRequireDefault(require("./routes/login.routes"));

var _car = _interopRequireDefault(require("./routes/car.routes"));

var _order = _interopRequireDefault(require("./routes/order.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use('/api/v1/auth', _user["default"]);
app.use('/api/v1/auth/login', _login["default"]);
app.use('/api/v1/car', _car["default"]);
app.use('/api/v1/order', _order["default"]);
var port = 3300;
app.listen(port, function () {
  return console.log("server started correctly at port ".concat(port));
});