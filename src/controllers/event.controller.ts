import { NextFunction, Request, Response } from "express";
import eventService from "../services/event.service";
import ResponseHandler from "../utils/ResponseHandler";
import { StatusCodes } from "http-status-codes";
import Messages from "../utils/Messages";

const getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await eventService.getAllEvents();
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getEventById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await eventService.getEventById(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const saveEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await eventService.saveEvent(req.body);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await eventService.updateEvent(id, req.body);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await eventService.deleteEvent(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const eventController = {
  getAllEvents,
  getEventById,
  saveEvent,
  updateEvent,
  deleteEvent,
};
export default eventController;
