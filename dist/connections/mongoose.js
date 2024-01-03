"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = require("../config/index");
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mongooseConnection = function mongooseConnection(app) {
  _mongoose["default"].connect(_index.MONGO_CONNECTION_STRING).then(function () {
    return app.listen(_index.LOCALHOST_PORT);
  }).then(function () {
    return console.log("connected to mongo and listening to port :" + _index.LOCALHOST_PORT);
  })["catch"](function (err) {
    return console.log(err);
  });
};
var _default = exports["default"] = mongooseConnection;