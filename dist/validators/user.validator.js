"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserValidatorSchema = void 0;
var _zod = require("zod");
var UserValidatorSchema = exports.UserValidatorSchema = _zod.z.object({
  name: _zod.z.string().min(1).max(50),
  email: _zod.z.string().email(),
  password: _zod.z.string().min(8)
}).strict();