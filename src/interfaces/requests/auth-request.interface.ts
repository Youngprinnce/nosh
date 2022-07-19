export interface AuthSignupRequest {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    country: string;
    gender: string;
}

export interface AuthSiginRequest {
    email: string;
    password: string;
}

export interface UserUpdateRequest {
    firstname: string;
    mobile: string;
    lastname: string;
    country: string;
    gender: string;
}