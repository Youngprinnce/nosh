import AppException from '../enums/exception.enum';
import StatusCode from '../enums/status-code.enum';

export class BadDataException extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = AppException.BadDataException;
    this.statusCode = StatusCode.BAD_DATA;
  }
}
