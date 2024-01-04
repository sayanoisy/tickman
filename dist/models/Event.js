"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EventSchema = new _mongoose["default"].Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDescription: {
    type: String
  },
  eventDate: {
    type: String,
    required: true
  },
  eventVenue: {
    type: String,
    required: true,
    index: true
  },
  eventCapacity: {
    type: Number,
    required: true
  },
  eventTicketPrice: {
    type: Number,
    required: true
  }
});
var Event = _mongoose["default"].model("Event", EventSchema);
var _default = exports["default"] = Event;