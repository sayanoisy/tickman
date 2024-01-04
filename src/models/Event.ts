import mongoose, { Document, Model } from "mongoose";

export interface IEvent extends Document {
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventVenue: string;
  eventCapacity: number;
  eventTicketPrice: number;
}

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventVenue: {
    type: String,
    required: true,
    index: true,
  },
  eventCapacity: {
    type: Number,
    required: true,
  },
  eventTicketPrice: {
    type: Number,
    required: true,
  },
});

const Event: Model<IEvent> = mongoose.model<IEvent>("Event", EventSchema);
export default Event;
