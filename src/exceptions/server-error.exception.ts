import AppException from '../enums/exception.enum';
import StatusCode from '../enums/status-code.enum';

export class ServerErrorException extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = AppException.ServerErrorException;
    this.statusCode = StatusCode.SERVER_ERROR;
  }
}
