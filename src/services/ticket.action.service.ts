import Ticket from "../models/Ticket";
import Event from "../models/Event";
import ticketService from "./ticket.service";
const randomstring = require("randomstring");

const bookTicket = async (eventId: string, userId: string) => {
  try {
    const event = await Event.findById(eventId);
    var randomString = randomstring.generate(7);
    const existingTicketNumber = await Ticket.findOne({
      ticketNumber: randomString,
    });
    if (existingTicketNumber) {
      randomString = randomstring.generate(7);
    }
    const ticket = new Ticket({
      ticketNumber: event?.eventCapacity + randomString,
      ticketPrice: event?.eventTicketPrice,
      userId: userId,
      eventId: eventId,
    });
    const savedTicket = await ticketService.saveTicket(ticket);
    return savedTicket;
  } catch (error) {
    throw error;
  }
};

const ticketActionService = {
  bookTicket,
};
export default ticketActionService;
