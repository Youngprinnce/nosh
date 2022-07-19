import 'dotenv/config';

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const MONGODB_URI = String(process.env.MONGODB_URI);
export const MONGODB_TEST_URI = String(process.env.MONGODB_TEST_URI);
export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS;
export const JWT_ACCESS_TIME = process.env.JWT_ACCESS_TIME;
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH;
export const JWT_REFRESH_TIME = process.env.JWT_REFRESH_TIME;

