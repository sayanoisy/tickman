"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = _interopRequireDefault(require("../../controllers/auth.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var authRouter = (0, _express.Router)();
authRouter.post("/signup", _auth["default"].signUp);
authRouter.post("/login", _auth["default"].login);
authRouter.get("/logout", _auth["default"].logout);
var _default = exports["default"] = authRouter;