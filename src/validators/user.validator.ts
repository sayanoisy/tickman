import { z, ZodType } from "zod";

const UserValidatorSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  password: z.string().min(8),
}).strict();

type UserBody = ZodType<typeof UserValidatorSchema>;

export { UserBody, UserValidatorSchema };
