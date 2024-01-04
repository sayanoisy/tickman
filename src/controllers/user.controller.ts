import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
import ResponseHandler from "../utils/ResponseHandler";
import { StatusCodes } from "http-status-codes";
import Messages from "../utils/Messages";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userService.getAllUsers();
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await userService.getUserById(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const data = await userService.getUserByEmail(email);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const saveUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userService.saveUser(req.body);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await userService.updateUser(id, req.body);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await userService.deleteUser(id);
    const response = ResponseHandler(StatusCodes.OK, Messages.SUCCESS, data);
    return res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

const userController = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  saveUser,
  updateUser,
  deleteUser,
};
export default userController;
