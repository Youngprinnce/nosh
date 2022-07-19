import { decryptedData } from "../../src/interfaces/requests/auth-request.interface";

declare global {
    namespace Express {
        interface Request {
            user: any;
        }
    }
}