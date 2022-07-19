import {Document} from 'mongoose';

export interface decryptedData {
    id: number;
    email: string;
}

export interface UserDocType extends Document {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    password: string;
    gender: string;
    country: string;
    _id: string;
}

export interface SetRedis {
    key: string;
    value: string;
}