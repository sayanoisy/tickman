import { StatusCodes } from "http-status-codes";
import Messages from "../utils/Messages";
import CustomError from "../utils/CustomError";
import Ticket, { ITicket } from "../models/Ticket";
import objectIdCheck from "../validators/objectId.validator";
import Event from "../models/Event";

const getAllTickets = async () => {
  try {
    const tickets = await Ticket.find();
    if (tickets.length === 0) {
      const error: CustomError = new CustomError(
        Messages.NO_TICKETS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return tickets;
  } catch (error) {
    throw error;
  }
};

const getTicketById = async (id: string) => {
  try {
    await objectIdCheck(id);
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      const error: CustomError = new CustomError(
        Messages.TICKET_DOES_NOT_EXIST,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return ticket;
  } catch (error) {
    throw error;
  }
};

const getTicketsByUserId = async (id: string) => {
  try {
    await objectIdCheck(id);
    const tickets = await Ticket.find({ userId: id });
    if (tickets.length === 0) {
      const error: CustomError = new CustomError(
        Messages.TICKET_DOES_NOT_EXIST,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return tickets;
  } catch (error) {
    throw error;
  }
};

const getTicketsByEventId = async (id: string) => {
  try {
    await objectIdCheck(id);
    const tickets = await Ticket.find({ eventId: id });
    if (tickets.length === 0) {
      const error: CustomError = new CustomError(
        Messages.TICKET_DOES_NOT_EXIST,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return tickets;
  } catch (error) {
    throw error;
  }
};

const saveTicket = async (ticket: ITicket) => {
  try {
    const newTicket = new Ticket({
      ticketNumber: ticket.ticketNumber,
      ticketPrice: ticket.ticketPrice,
      userId: ticket.userId,
      eventId: ticket.eventId,
    });
    await newTicket.save();

    return newTicket;
  } catch (error) {
    throw error;
  }
};

const updateTicket = async (id: string, updatedFields: Partial<ITicket>) => {
  try {
    await objectIdCheck(id);
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      const error: CustomError = new CustomError(
        Messages.NO_TICKETS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }

    Object.assign(ticket, updatedFields);
    await ticket.save();

    return ticket;
  } catch (error) {
    throw error;
  }
};

const deleteTicket = async (id: string) => {
  try {
    await objectIdCheck(id);
    const ticket = await Ticket.findByIdAndDelete(id);
    if (!ticket) {
      const error: CustomError = new CustomError(
        Messages.NO_TICKETS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }

    return "Ticket deletion completed";
  } catch (error) {
    throw error;
  }
};

const getNumberOfTicketsIssuedForEvent = async (eventId: string) => {
  try {
    await objectIdCheck(eventId);
    const tickets = await Ticket.find({ eventId: eventId });
    if (tickets.length <= 0) {
      return 0;
    }
    return tickets.length;
  } catch (error) {
    throw error;
  }
};

const getNumberOfTicketsAvailableForEvent = async (eventId: string) => {
  try {
    await objectIdCheck(eventId);
    const tickets = await Ticket.find({ eventId: eventId });
    const event = await Event.findById(eventId);
    const availableTickets =
      (event?.eventCapacity ?? 0) - (tickets?.length ?? 0);
    return availableTickets;
  } catch (error) {
    throw error;
  }
};

const ticketService = {
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
export default ticketService;
