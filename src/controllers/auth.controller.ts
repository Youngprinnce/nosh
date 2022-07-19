import { Request, Response } from 'express';
import handleAppExceptions from '../utils/handle-app-exception.utils';
import { AuthData, IUser } from '../interfaces/reponses/auth-reponse.interface';
import userService from '../services/user.service';
import { AuthSignupRequest, AuthSiginRequest } from '../interfaces/requests/auth-request.interface';
import { ConflictException } from '../exceptions/conflict.exception';
import HashManager from '../utils/bcrypt.util';
import { ResponseHelper } from '../utils/response-helper.util';
import StatusCode from '../enums/status-code.enum';
import { NotFoundException } from '../exceptions/not-found.exception';
import { ForbiddenException } from '../exceptions/forbidden.exception';
import jwtService from '../services/jwt.service';
import { customResponse } from '../utils/helper.util';

export async function signup(req: Request, res: Response) {
    try {
        const { email, password } = req.body as AuthSignupRequest
        const user = await userService.findByEmail(email)
        if (user) throw new ConflictException('Error, a user with this email already exists, please login');

        const hashPassword = await HashManager.hash(password);

        const payload:AuthSignupRequest = {...req.body};
        payload.password = hashPassword;

        await userService.create(payload);

        return ResponseHelper.success<{}>(res, {}, {statusCode: StatusCode.CREATED, message: 'User created successfully'});
    } catch (error: any) {
        handleAppExceptions(error, res);
    }
}

export async function signin(req: Request, res: Response) {
    try {
        const { email, password } = req.body as AuthSiginRequest;

        const user = await userService.findByEmail(email);

        if (!user) throw new NotFoundException('Email is not linked to an account, please input the right email address');

        const isPasswordValid = await HashManager.compare(password, user.password!);

        if (!isPasswordValid) throw new ForbiddenException('Password incorrect, please try again');

        const {access, refresh} = await jwtService.generate({id: user._id, email: user.email});

        // format the response
        const authData: AuthData = {
            user: customResponse(user),
            access_token: access,
            refresh_token: refresh
        }

        return ResponseHelper.success<AuthData>(res, authData, {statusCode: StatusCode.OK});
    } catch (error: any) {
        handleAppExceptions(error, res);
    }
}

export async function refreshToken(req: Request, res: Response) {
    try {
        const { id, email } = req.user;

        const {access, refresh} = await jwtService.generate({id, email});

        return ResponseHelper.success<{access_token: string, refresh_token: string}>(res, {access_token:access, refresh_token:refresh}, {statusCode: StatusCode.OK});
    } catch (error: any) {
        handleAppExceptions(error, res);
    }
}