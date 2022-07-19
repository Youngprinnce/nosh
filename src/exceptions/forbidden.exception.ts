import AppException from '../enums/exception.enum';
import StatusCode from '../enums/status-code.enum';

export class ForbiddenException extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = AppException.ForbiddenException;
    this.statusCode = StatusCode.FORBIDDEN;
  }
}
