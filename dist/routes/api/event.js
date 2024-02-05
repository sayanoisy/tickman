"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _eventController = _interopRequireDefault(require("../../controllers/event.controller.js"));
var _ValidateSchema = _interopRequireDefault(require("../../utils/ValidateSchema.js"));
var _eventValidator = require("../../validators/event.validator.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var eventRouter = (0, _express.Router)();
eventRouter.get("/get", _eventController["default"].getAllEvents);
eventRouter.get("/get/:id", _eventController["default"].getEventById);
eventRouter.post("/save", [(0, _ValidateSchema["default"])(_eventValidator.EventValidatorSchema)], _eventController["default"].saveEvent);
eventRouter.put("/update/:id", _eventController["default"].updateEvent);
eventRouter["delete"]("/delete/:id", _eventController["default"].deleteEvent);
var _default = exports["default"] = eventRouter;