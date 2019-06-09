"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.createUser = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _express = _interopRequireDefault(require("express"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user2 = require("../validation/user.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createUser = function createUser(req, res) {
  //input validation;
  var _signupvalidation = (0, _user2.signupvalidation)(req.body),
      error = _signupvalidation.error;

  if (error) return res.status(400).send(error.details[0].message); //checking existing user

  var user_token = {
    id: _user["default"].length + 1,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    is_admin: req.body.is_admin
  };
  var new_email = req.body.email;

  var exist_email = _user["default"].find(function (exist) {
    return exist.email === new_email;
  });

  if (exist_email) return res.status(400).json({
    status: 400,
    error: 'this email is already exist'
  });

  var token = _jsonwebtoken["default"].sign({
    user_token: user_token
  }, 'scretkey');

  res.header('x-auth-token', token);
  var new_user = {
    id: _user["default"].length + 1,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    address: req.body.password,
    is_admin: req.body.is_admin
  };

  _user["default"].push(new_user);

  return res.status(200).json({
    status: 200,
    token: token,
    data: new_user
  });
};

exports.createUser = createUser;

var getUser = function getUser(req, res) {
  res.send(_user["default"]);
};

exports.getUser = getUser;