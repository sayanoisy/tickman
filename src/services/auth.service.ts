import User from "../models/User";
import argon2 from "argon2";
import userService from "./user.service";
import { generateToken } from "../utils/JwtHandler";
import CustomError from "../utils/CustomError";
import Messages from "../utils/Messages";
import { StatusCodes } from "http-status-codes";

const signUp = async (name: string, email: string, password: string) => {
  try {
    const hashedPassword = await argon2.hash(password);
    const signUpObject = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await userService.saveUser(signUpObject);
    const generatedToken = generateToken({ name: name, email: email });
    return generatedToken;
  } catch (error) {
    throw error;
  }
};

const login = async (email: string, password: string) => {
  try {
    const user = await userService.getUserByEmail(email);
    const matchCred = await argon2.verify(user.password, password);

    if (!matchCred) {
      const invalidCredsError = new CustomError(
        Messages.INVALID_LOGIN_CREDS,
        StatusCodes.UNAUTHORIZED
      );
      throw invalidCredsError;
    }
    const generatedToken = generateToken({ name: user.name, email: email });
    return generatedToken;
  } catch (error) {
    throw error;
  }
};

const authService = {
  signUp,
  login,
};
export default authService;
