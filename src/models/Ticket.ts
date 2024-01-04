import mongoose, { Document, Model } from "mongoose";

export interface ITicket extends Document {
  ticketNumber: string;
  ticketPrice: number;
  userId: string;
  eventId: string;
}

const TicketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: true,
    index: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
    index: true,
  },
  userId: {
    type: String,
    required: true,
    index: true,
  },
  eventId: {
    type: String,
    required: true,
    index: true,
  },
});

const Ticket: Model<ITicket> = mongoose.model<ITicket>("Ticket", TicketSchema);

export default Ticket;
