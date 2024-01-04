import { StatusCodes } from "http-status-codes";
import Messages from "../utils/Messages";
import CustomError from "../utils/CustomError";
import Event, { IEvent } from "../models/Event";
import objectIdCheck from "../validators/objectId.validator";

const getAllEvents = async () => {
  try {
    const events = await Event.find();
    if (events.length === 0) {
      const error: CustomError = new CustomError(
        Messages.NO_EVENTS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return events;
  } catch (error) {
    throw error;
  }
};

const getEventById = async (id: string) => {
  try {
    await objectIdCheck(id);
    const event = await Event.findById(id);
    if (!event) {
      const error: CustomError = new CustomError(
        Messages.EVENT_DOES_NOT_EXIST,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return event;
  } catch (error) {
    throw error;
  }
};

const saveEvent = async (event: IEvent) => {
  try {
    const newEvent = new Event({
      eventName: event.eventName,
      eventDescription: event.eventDescription,
      eventDate: event.eventDate,
      eventVenue: event.eventVenue,
      eventCapacity: event.eventCapacity,
      eventTicketPrice: event.eventTicketPrice,
    });
    await newEvent.save();

    return newEvent;
  } catch (error) {
    throw error;
  }
};

const updateEvent = async (id: string, updatedFields: Partial<IEvent>) => {
  try {
    await objectIdCheck(id);
    const event = await Event.findById(id);
    if (!event) {
      const error: CustomError = new CustomError(
        Messages.NO_EVENTS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }

    Object.assign(event, updatedFields);
    await event.save();

    return event;
  } catch (error) {
    throw error;
  }
};

const deleteEvent = async (id: string) => {
  try {
    await objectIdCheck(id);
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      const error: CustomError = new CustomError(
        Messages.NO_EVENTS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }

    return "Event deletion completed";
  } catch (error) {
    throw error;
  }
};

const eventService = {
  getAllEvents,
  getEventById,
  saveEvent,
  updateEvent,
  deleteEvent,
};
export default eventService;
