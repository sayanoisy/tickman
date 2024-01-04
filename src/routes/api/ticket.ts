import { Router } from "express";
import ticketController from "../../controllers/ticket.controller.js";

const ticketRouter = Router();

ticketRouter.get("/get", ticketController.getAllTickets);
ticketRouter.get("/get/:id", ticketController.getTicketById);
ticketRouter.get("/get/user/:id", ticketController.getTicketsByUserId);
ticketRouter.get("/get/event/:id", ticketController.getTicketsByEventId);
ticketRouter.get(
  "/get/issued/:id",
  ticketController.getNumberOfTicketsIssuedForEvent
);
ticketRouter.get(
  "/get/available/:id",
  ticketController.getNumberOfTicketsAvailableForEvent
);
ticketRouter.post("/save", ticketController.saveTicket);
ticketRouter.put("/update/:id", ticketController.updateTicket);
ticketRouter.delete("/delete/:id", ticketController.deleteTicket);
ticketRouter.get("/book/:id", ticketController.bookTicket);

export default ticketRouter;
