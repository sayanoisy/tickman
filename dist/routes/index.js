"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = _interopRequireDefault(require("./api/user"));
var _event = _interopRequireDefault(require("./api/event"));
var _ticket = _interopRequireDefault(require("./api/ticket"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.use("/user", _user["default"]);
router.use("/event", _event["default"]);
router.use("/ticket", _ticket["default"]);
var _default = exports["default"] = router;