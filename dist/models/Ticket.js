"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TicketSchema = new _mongoose["default"].Schema({
  ticketNumber: {
    type: String,
    required: true,
    index: true
  },
  ticketPrice: {
    type: Number,
    required: true,
    index: true
  },
  userId: {
    type: String,
    required: true,
    index: true
  },
  eventId: {
    type: String,
    required: true,
    index: true
  }
});
var Ticket = _mongoose["default"].model("Ticket", TicketSchema);
var _default = exports["default"] = Ticket;