import { NextFunction, Request, Response } from 'express';
import { AuthSignupSchema, AuthSigninSchema } from '../validations/auth.validation';
import { ResponseHelper } from '../utils/response-helper.util';
import { JWT_ACCESS_SECRET } from '../config/index.config';
import jwtService from '../services/jwt.service';
import StatusCode from '../enums/status-code.enum';

// Validate signup data
export const validateSignupMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const {error} =  AuthSignupSchema.validate(req.body);
    if (error) {
        ResponseHelper.error(res, error.details[0].message, StatusCode.UNPROCESSED);
        return;
    }
    next();
}

// Auhthenticate user
export const authenticateMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const requestHeaderAuthorization = req.headers.authorization;
    if(!requestHeaderAuthorization) {
        return ResponseHelper.error(res, 'Authorization header is required', 401);
    }
    const [bearerToken, token] = requestHeaderAuthorization.split(' ');

    if(bearerToken !== 'Bearer') {
        return ResponseHelper.error(res, 'Authorization header must start with Bearer', 401);
    }
    const decoded = await jwtService.verify(token, `${JWT_ACCESS_SECRET}`);
    if (typeof decoded === 'object') {
        req.user = decoded;
    }
    next();
}

// Validate signin data
export const validateSigninMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const {error} =  AuthSigninSchema.validate(req.body);
    if (error) {
        ResponseHelper.error(res, error.details[0].message, StatusCode.UNPROCESSED);
        return;
    }
    next();
}