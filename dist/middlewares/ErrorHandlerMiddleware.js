"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _winston = require("winston");
var ErrorHandlerMiddleware = function ErrorHandlerMiddleware(err, req, res, next) {
  var errStatus = err.statusCode || 500;
  var errMsg = err.message || "Something went wrong";
  var errData = err.data || null;
  var logger = (0, _winston.createLogger)({
    format: _winston.format.json(),
    transports: [new _winston.transports.File({
      filename: "error.log",
      level: "error"
    })]
  });
  var response = {
    success: false,
    status: errStatus,
    message: errMsg
  };
  if (errData) {
    response.data = errData;
  }
  if (errStatus > 499) {
    response.stack = process.env.NODE_ENV === "development" ? err.stack : {};
    logger.error({
      status: errStatus,
      message: errMsg,
      stack: process.env.NODE_ENV === "development" ? err.stack : {}
    });
  }
  return res.status(errStatus).json(response);
};
var _default = exports["default"] = ErrorHandlerMiddleware;