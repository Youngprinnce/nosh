import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { errorRoute } from './routes/error.route';
import InitiateMongoServer from './database/mongoose.db';
import morgan from 'morgan';

const app = express();
InitiateMongoServer();

app.use(express.json());
app.use(cors());
app.options('*', cors);
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

//Handle Error Route
errorRoute(app);

export = app;
