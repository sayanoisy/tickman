import { z, ZodType } from "zod";

const EventValidatorSchema = z
  .object({
    eventName: z.string().min(1).max(50),
    eventDescription: z.string().min(0),
    eventDate: z.string().min(6),
    eventVenue: z.string().min(1),
    eventCapacity: z.number().min(1),
    eventTicketPrice: z.number().min(1),
  })
  .strict();

type EventRequestBody = ZodType<typeof EventValidatorSchema>;

export { EventRequestBody, EventValidatorSchema };
