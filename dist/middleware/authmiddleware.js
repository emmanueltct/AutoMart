"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = auth;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function auth(req, res, next) {
  var token = req.header('x-auth-token');
  if (!token) return res.status(400).send('access denied no token found');

  try {
    var user_verfication = _jsonwebtoken["default"].verify(token, 'scretkey');

    req.user_token = user_verfication;
    next();
  } catch (error) {
    res.status(400).send('invalid token');
  }
}