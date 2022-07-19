import AppException from '../enums/exception.enum';
import StatusCode from '../enums/status-code.enum';

export class NotFoundException extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = AppException.NotFoundException;
    this.statusCode = StatusCode.NOT_FOUND;
  }
}
