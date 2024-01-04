import { Router } from "express";
import eventController from "../../controllers/event.controller.js";
import ValidateSchema from "../../utils/ValidateSchema.js";
import { EventValidatorSchema } from "../../validators/event.validator.js";

const eventRouter = Router();

eventRouter.get("/get", eventController.getAllEvents);
eventRouter.get("/get/:id", eventController.getEventById);
eventRouter.post(
  "/save",
  [ValidateSchema(EventValidatorSchema)],
  eventController.saveEvent
);
eventRouter.put("/update/:id", eventController.updateEvent);
eventRouter.delete("/delete/:id", eventController.deleteEvent);

export default eventRouter;
