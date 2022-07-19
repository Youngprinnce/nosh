import userRoute from '../config/router.config';
import {Request, Response} from 'express'
import { authenticateMiddleware } from '../middlewares/auth.middleware';
import * as userController from '../controllers/user.controller';
import { validateUpdateUserMiddleware } from '../middlewares/user.middleware';

userRoute
    .route('/users/dashboard')
    .get([authenticateMiddleware], (_:Request, res: Response) => {
        res.send('dashboard');
    });

userRoute
    .route('/users/update')
    .put([validateUpdateUserMiddleware, authenticateMiddleware], userController.updateUser);


export default userRoute;
