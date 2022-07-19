enum StatusCode {
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
    CONFLICT = 409,
    BAD_DATA = 400,
    CREATED = 201,
    OK = 200,
    NO_CONTENT = 204,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    UNPROCESSED = 422,
}

export default StatusCode;
