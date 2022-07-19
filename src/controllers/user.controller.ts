import { Request, Response } from 'express';
import handleAppExceptions from '../utils/handle-app-exception.utils';
import { CustomData } from '../interfaces/reponses/auth-reponse.interface';
import userService from '../services/user.service';
import { UserUpdateRequest } from '../interfaces/requests/auth-request.interface';
import { ResponseHelper } from '../utils/response-helper.util';
import StatusCode from '../enums/status-code.enum';
import { customResponse } from '../utils/helper.util';

export async function updateUser(req: Request, res: Response) {
    try {
        const payload = req.body as UserUpdateRequest
        const { id } = req.user;

        const user = await userService.updateUser(id, payload);
        const userResponse = customResponse(user);

        return ResponseHelper.success<CustomData>(res, userResponse, {statusCode: StatusCode.OK, message: 'User updated successfully'});
    } catch (error: any) {
        handleAppExceptions(error, res);
    }
}