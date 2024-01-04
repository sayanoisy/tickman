import { StatusCodes } from "http-status-codes";
import CustomError from "../utils/CustomError";

//Mongo object id check
const objectIdCheck = async (id: string) => {
  const objectIdRegex = /^[0-9a-fA-F]{24}$/;
  const isValidObjectId = (id: string) => objectIdRegex.test(id);
  if (!isValidObjectId(id)) {
    const err: CustomError = new CustomError(
      "invalid object id",
      StatusCodes.EXPECTATION_FAILED
    );
    throw err;
  }
};

export default objectIdCheck;
