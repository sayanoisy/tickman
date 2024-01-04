import { NextFunction, Request, Response } from "express";
import ticketService from "../services/ticket.service";
import ResponseHandler from "../utils/ResponseHandler";
import { StatusCodes } from "http-status-codes";
import Messages from "../utils/Messages";
import objectIdCheck from "../validators/objectId.validator";

const getAllTickets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await ticketService.getAllTickets();
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getTicketById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await ticketService.getTicketById(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getTicketsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await ticketService.getTicketsByUserId(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getTicketsByEventId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await ticketService.getTicketsByEventId(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const saveTicket = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await objectIdCheck(req.body.userId);
    await objectIdCheck(req.body.eventId);
    const data = await ticketService.saveTicket(req.body);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const updateTicket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await ticketService.updateTicket(id, req.body);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const deleteTicket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await ticketService.deleteTicket(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getNumberOfTicketsIssuedForEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await ticketService.getNumberOfTicketsIssuedForEvent(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getNumberOfTicketsAvailableForEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await ticketService.getNumberOfTicketsAvailableForEvent(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const ticketController = {
  getAllTickets,
  getTicketById,
  getTicketsByUserId,
  getTicketsByEventId,
  saveTicket,
  updateTicket,
  deleteTicket,
  getNumberOfTicketsIssuedForEvent,
  getNumberOfTicketsAvailableForEvent,
};
export default ticketController;
