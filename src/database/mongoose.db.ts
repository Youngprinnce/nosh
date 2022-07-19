import mongoose from 'mongoose';
import logger from '../utils/logger.util';
import { MONGODB_URI, MONGODB_TEST_URI } from '../config/index.config';

const URI =
	process.env.NODE_ENV === "test" ? MONGODB_TEST_URI : MONGODB_URI;
const InitiateMongoServer = async () => {
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to DB');
  } catch (ex: any) {
    logger.log({
      level: 'error',
      message: ex.message,
    });
    process.exit(1);
  }
};

export default InitiateMongoServer;