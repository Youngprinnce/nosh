import authRoute from '../config/router.config';
import { validateSignupMiddleware, validateSigninMiddleware } from '../middlewares/auth.middleware';
import * as authController from '../controllers/auth.controller';
import { redisMiddleware } from '../middlewares/redis.middleware';

authRoute
    .route('/auth/signup')
    .post([validateSignupMiddleware], authController.signup);

authRoute
    .route('/auth/signin')
    .post([validateSigninMiddleware], authController.signin);

authRoute
    .route('/auth/refresh-token')
    .post([redisMiddleware], authController.refreshToken);


export default authRoute;
