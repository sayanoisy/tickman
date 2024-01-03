import dotenv from "dotenv";
dotenv.config();

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "";
const LOCALHOST_PORT = process.env.LOCALHOST_PORT || 8080;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";
const COOKIE_SECRET_KEY = process.env.COOKIE_SECRET_KEY || "";

export {
  MONGO_CONNECTION_STRING,
  LOCALHOST_PORT,
  JWT_SECRET_KEY,
  COOKIE_SECRET_KEY,
};
