import { StatusCodes } from "http-status-codes";
import User, { IUser } from "../models/User";
import Messages from "../utils/Messages";
import CustomError from "../utils/CustomError";

const getAllUsers = async () => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      const error: CustomError = new CustomError(
        Messages.NO_USERS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id: string) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      const error: CustomError = new CustomError(
        Messages.USER_DOES_NOT_EXIST,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error: CustomError = new CustomError(
        Messages.USER_DOES_NOT_EXIST,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const saveUser = async (user: IUser) => {
  try {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      const error: CustomError = new CustomError(
        Messages.USER_EXISTS,
        StatusCodes.CONFLICT
      );
      throw error;
    }
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id: string, updatedFields: Partial<IUser>) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      const error: CustomError = new CustomError(
        Messages.NO_USERS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }

    Object.assign(user, updatedFields);
    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      const error: CustomError = new CustomError(
        Messages.NO_USERS_FOUND,
        StatusCodes.NOT_FOUND
      );
      throw error;
    }

    return "User deletion completed";
  } catch (error) {
    throw error;
  }
};

const userService = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  saveUser,
  updateUser,
  deleteUser,
};
export default userService;
