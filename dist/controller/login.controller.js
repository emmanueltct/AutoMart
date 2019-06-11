"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _express = _interopRequireDefault(require("express"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _login = require("../validation/login.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// user login part
var userLogin = function userLogin(req, res) {
  //input validation;
  var _loginvalidation = (0, _login.loginvalidation)(req.body),
      error = _loginvalidation.error;

  if (error) return res.status(400).send(error.details[0].message); //checking existing user

  var new_email = req.body.email;

  var exist_email = _user["default"].find(function (exist) {
    return exist.email === new_email;
  });

  if (!exist_email) return res.status(400).send('user email not found you should create new account'); //checking user password

  if (exist_email.password !== req.body.password) return res.status(400).send('Password not match with email');
  var response = {
    'id': exist_email.id,
    'first_name': exist_email.first_name,
    'last_name': exist_email.last_name,
    'email': exist_email.email
  };
  var user_token = {
    'id': exist_email.id,
    'first_name': exist_email.first_name,
    'last_name': exist_email.last_name,
    'email': exist_email.email,
    "is_admin": exist_email.is_admin
  };

  var token = _jsonwebtoken["default"].sign({
    user_token: user_token
  }, 'scretkey');

  res.header('x-auth-token', token);
  res.status(400).json({
    status: 200,
    token: token,
    data: response
  });
};

exports.userLogin = userLogin;