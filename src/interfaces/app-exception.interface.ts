export default interface IAppException {
    message: string;
    name: string;
    statusCode: number;
    code? : string;
}