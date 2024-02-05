"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventValidatorSchema = void 0;
var _zod = require("zod");
var EventValidatorSchema = exports.EventValidatorSchema = _zod.z.object({
  eventName: _zod.z.string().min(1).max(50),
  eventDescription: _zod.z.string().min(0),
  eventDate: _zod.z.string().min(6),
  eventVenue: _zod.z.string().min(1),
  eventCapacity: _zod.z.number().min(1),
  eventTicketPrice: _zod.z.number().min(1)
}).strict();