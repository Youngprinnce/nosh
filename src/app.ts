import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { errorRoute } from './routes/error.route';
import morgan from 'morgan';
import InitiateMongoServer from './database/mongoose.db';
import authRoute from './routes/auth.route';
import userRoute from './routes/user.route';

const app = express();

// Initiate MongoDB
InitiateMongoServer();

// Middleware
app.use(express.json());
app.use(cors());
app.options('*', cors);
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/v1', authRoute);
app.use('/api/v1', userRoute);

//Handle Error Route
errorRoute(app);

export = app;
