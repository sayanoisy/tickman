import { StatusCodes } from "http-status-codes";

class CustomError extends Error {
  statusCode: number;
  data?: any;

  constructor(
    message: string = "Something went wrong",
    status: number = StatusCodes.INTERNAL_SERVER_ERROR,
    data: any = null
  ) {
    super(message);
    this.statusCode = status;
    if (data) {
      this.data = data;
    }
  }
}

const ErrorHandler = (status: number, message: string, data: any = null) => {
  throw new CustomError(message, status, data);
};

export default ErrorHandler;
