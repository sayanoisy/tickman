type ResponseData<T> = T | {};

const ResponseHandler = <T>(
  status: number = 200,
  message: string = "Ok",
  data?: ResponseData<T>
): { success: boolean; status: number; message: string; data: ResponseData<T> } => {
  const statusCode = status;
  const msg = message;
  const successData = data || {};

  return { success: true, status: statusCode, message: msg, data: successData };
};

export default ResponseHandler;
