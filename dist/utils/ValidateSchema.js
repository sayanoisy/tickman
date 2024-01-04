"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _zod = require("zod");
var _httpStatusCodes = require("http-status-codes");
var _ErrorHandler = _interopRequireDefault(require("./ErrorHandler"));
var _user = require("../validators/user.validator");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ValidateSchema = function ValidateSchema(schema) {
  return function (req, res, next) {
    try {
      var body = req.body;
      schema.parse(body);
      next();
    } catch (err) {
      if (err instanceof _zod.ZodError) {
        (0, _ErrorHandler["default"])(_httpStatusCodes.StatusCodes.BAD_REQUEST, "Validation Error", err.errors);
        return next(err);
      } else {
        return next(err);
      }
    }
  };
};
var validateUser = ValidateSchema(_user.UserValidatorSchema);
var _default = exports["default"] = validateUser;