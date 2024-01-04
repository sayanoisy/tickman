import { StatusCodes } from "http-status-codes";
import { JWT_SECRET_KEY } from "../config/index";
import jwt from "jsonwebtoken";
import Messages from "./Messages";
import CustomError from "./CustomError";

const generateToken = (payload: any, ttl = "1h") => {
  try {
    return jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: ttl,
    });
  } catch (err) {
    throw err;
  }
};

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      const error = new CustomError(
        Messages.TOKEN_EXPIRED,
        StatusCodes.UNAUTHORIZED
      );
      throw error;
    }
    if (err.name === "JsonWebTokenError") {
      const error = new CustomError(
        Messages.INVALID_TOKEN,
        StatusCodes.UNAUTHORIZED
      );
      throw error;
    }
    const error = new CustomError(
      Messages.INVALID_TOKEN,
      StatusCodes.UNAUTHORIZED
    );
    throw error;
  }
};

export { verifyToken, generateToken };
