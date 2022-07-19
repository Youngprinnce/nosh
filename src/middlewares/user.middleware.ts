import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/status-code.enum';
import { ResponseHelper } from '../utils/response-helper.util';
import { UserUpdateSchema } from '../validations/user.validations';

export const validateUpdateUserMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const {error} =  UserUpdateSchema.validate(req.body);
    if (error) {
        ResponseHelper.error(res, error.details[0].message, StatusCode.UNPROCESSED);
        return;
    }
    next();
}

