"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ResponseHandler = function ResponseHandler() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Ok";
  var data = arguments.length > 2 ? arguments[2] : undefined;
  var statusCode = status;
  var msg = message;
  var successData = data || {};
  return {
    success: true,
    status: statusCode,
    message: msg,
    data: successData
  };
};
var _default = exports["default"] = ResponseHandler;