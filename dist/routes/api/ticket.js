"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ticketController = _interopRequireDefault(require("../../controllers/ticket.controller.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ticketRouter = (0, _express.Router)();
ticketRouter.get("/get", _ticketController["default"].getAllTickets);
ticketRouter.get("/get/:id", _ticketController["default"].getTicketById);
ticketRouter.get("/get/user/:id", _ticketController["default"].getTicketsByUserId);
ticketRouter.get("/get/event/:id", _ticketController["default"].getTicketsByEventId);
ticketRouter.get("/get/issued/:id", _ticketController["default"].getNumberOfTicketsIssuedForEvent);
ticketRouter.get("/get/available/:id", _ticketController["default"].getNumberOfTicketsAvailableForEvent);
ticketRouter.post("/save", _ticketController["default"].saveTicket);
ticketRouter.put("/update/:id", _ticketController["default"].updateTicket);
ticketRouter["delete"]("/delete/:id", _ticketController["default"].deleteTicket);
ticketRouter.get("/book/:id", _ticketController["default"].bookTicket);
var _default = exports["default"] = ticketRouter;