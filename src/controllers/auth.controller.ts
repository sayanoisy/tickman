import { NextFunction, Request, Response } from "express";
import ResponseHandler from "../utils/ResponseHandler";
import { StatusCodes } from "http-status-codes";
import Messages from "../utils/Messages";
import authService from "../services/auth.service";
//header setting problem
const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const data = await authService.signUp(name, email, password);
    res.setHeader("token", data);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.headers["token"]);

    const { email, password } = req.body;
    const data = await authService.login(email, password);
    res.setHeader("token", data);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.setHeader("token", "null");
    const response = ResponseHandler(
      StatusCodes.OK,
      Messages.SUCCESS,
      "Logged out successfully"
    );
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const authController = {
  signUp,
  login,
  logout,
};
export default authController;
