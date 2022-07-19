import { NextFunction, Request, Response } from 'express';
import { JWT_REFRESH_SECRET } from '../config/index.config';
import redisService from '../services/redis.service';
import jwtService from '../services/jwt.service';
import { ResponseHelper } from '../utils/response-helper.util';

// Verify refresh token middleware
export const redisMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const token = req.body.refreshToken;
    if(!token) {
        return ResponseHelper.error(res, 'Refresh token is required', 403);
    }
    const decoded = await jwtService.verify(token, `${JWT_REFRESH_SECRET}`);
    if (typeof decoded === 'object') {
        const value = await redisService.get(decoded.id);
        if(value === null || value !== token) {
            return ResponseHelper.error(res, 'Invalid refresh token', 401);
        }
        req.user = decoded;
    }
    next()
}
