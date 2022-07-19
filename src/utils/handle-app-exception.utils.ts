import IAppException from "../interfaces/app-exception.interface";
import AppException from "../enums/exception.enum";
import { Response } from "express";
import { ResponseHelper } from './response-helper.util';
import StatusCode from "../enums/status-code.enum";

const handleAppExceptions = (error: IAppException, res:Response) => {
  switch (error.name) {
    case AppException.NotFoundException:
      return ResponseHelper.error(res, error.message, StatusCode.NOT_FOUND);

    case AppException.ConflictException:
      return ResponseHelper.error(res, error.message, StatusCode.CONFLICT);

    case AppException.BadDataException:
      return ResponseHelper.error(res, error.message, StatusCode.BAD_DATA);

    case AppException.UnauthorizedException:
      return ResponseHelper.error(res, error.message, StatusCode.UNAUTHORIZED);

    case AppException.ForbiddenException:
      return ResponseHelper.error(res, error.message, StatusCode.FORBIDDEN);

    case AppException.ServerErrorException:
      return ResponseHelper.error(res, error.message, StatusCode.SERVER_ERROR);

    case AppException.UnprocessedEntityException:
      return ResponseHelper.error(res, error.message, StatusCode.UNPROCESSED);

    default:
      return ResponseHelper.error(res, error.name || 'Something went wrong', StatusCode.SERVER_ERROR);
  }
};

export default handleAppExceptions;