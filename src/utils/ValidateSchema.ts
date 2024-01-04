import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { StatusCodes } from "http-status-codes";
import ErrorHandler from "./ErrorHandler";

const ValidateSchema = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      schema.parse(body);
      next();
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        ErrorHandler(StatusCodes.BAD_REQUEST, "Validation Error", err.errors);
        return next(err);
      } else {
        return next(err);
      }
    }
  };
};

export default ValidateSchema;
