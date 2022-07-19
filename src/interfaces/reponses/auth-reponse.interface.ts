export interface IUser {
    _id: string;
    email: string;
    mobile: string;
    firstname: string;
    lastname: string;
    password?: string;
    country: string;
    gender: string;
    __v?: number;
}

export interface CustomData {
    id: string;
    email: string;
    mobile: string;
    firstname: string;
    lastname: string;
    country: string;
    gender: string;
}

export interface AuthData {
    user: CustomData;
    access_token: string;
    refresh_token: string;
}
