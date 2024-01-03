"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGO_CONNECTION_STRING = exports.LOCALHOST_PORT = exports.JWT_SECRET_KEY = exports.COOKIE_SECRET_KEY = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var MONGO_CONNECTION_STRING = exports.MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "";
var LOCALHOST_PORT = exports.LOCALHOST_PORT = process.env.LOCALHOST_PORT || 8080;
var JWT_SECRET_KEY = exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";
var COOKIE_SECRET_KEY = exports.COOKIE_SECRET_KEY = process.env.COOKIE_SECRET_KEY || "";