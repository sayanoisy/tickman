"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userController = _interopRequireDefault(require("../../controllers/user.controller.js"));
var _ValidateSchema = _interopRequireDefault(require("../../utils/ValidateSchema.js"));
var _userValidator = require("../../validators/user.validator.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = (0, _express.Router)();
userRouter.get("/get", _userController["default"].getAllUsers);
userRouter.get("/get/:id", _userController["default"].getUserById);
userRouter.post("/get", _userController["default"].getUserByEmail);
userRouter.post("/save", [(0, _ValidateSchema["default"])(_userValidator.UserValidatorSchema)], _userController["default"].saveUser);
userRouter.put("/update/:id", _userController["default"].updateUser);
userRouter["delete"]("/delete/:id", _userController["default"].deleteUser);
var _default = exports["default"] = userRouter;