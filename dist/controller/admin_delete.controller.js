"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _car = _interopRequireDefault(require("../models/car.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deletePosted = function deletePosted(req, res) {
  var post = _car["default"].find(function (p) {
    return p.id === parseInt(req.params.id, 10);
  });

  if (!post) {
    return res.status(404).json({
      status: 404,
      error: 'Car Ad not found'
    });
  }

  var admin = req.user_token.user_token;
  console.log(admin.is_admin);

  if (admin.is_admin == 'true') {
    var index = _car["default"].indexOf(post);

    _car["default"].splice(index, 1);

    res.status(200).send({
      status: 200,
      data: 'Car Ad successfully deleted'
    });
  } else {
    return res.status(400).json({
      status: 400,
      error: 'you are not admin you can not delete anything'
    });
  }
};

var _default = deletePosted;
exports["default"] = _default;