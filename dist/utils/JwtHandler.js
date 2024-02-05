"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateToken = void 0;
var _httpStatusCodes = require("http-status-codes");
var _index = require("../config/index");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _Messages = _interopRequireDefault(require("./Messages"));
var _CustomError = _interopRequireDefault(require("./CustomError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var generateToken = exports.generateToken = function generateToken(payload) {
  var ttl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1h";
  try {
    return _jsonwebtoken["default"].sign(payload, _index.JWT_SECRET_KEY, {
      expiresIn: ttl
    });
  } catch (err) {
    throw err;
  }
};
var verifyToken = exports.verifyToken = function verifyToken(token) {
  try {
    return _jsonwebtoken["default"].verify(token, _index.JWT_SECRET_KEY);
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      var _error = new _CustomError["default"](_Messages["default"].TOKEN_EXPIRED, _httpStatusCodes.StatusCodes.UNAUTHORIZED);
      throw _error;
    }
    if (err.name === "JsonWebTokenError") {
      var _error2 = new _CustomError["default"](_Messages["default"].INVALID_TOKEN, _httpStatusCodes.StatusCodes.UNAUTHORIZED);
      throw _error2;
    }
    var error = new _CustomError["default"](_Messages["default"].INVALID_TOKEN, _httpStatusCodes.StatusCodes.UNAUTHORIZED);
    throw error;
  }
};