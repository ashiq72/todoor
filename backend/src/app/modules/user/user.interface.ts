import {Model} from "mongoose";

export enum GenderEnum {
    MALE = 'male',
FEMALE= 'female',
OTHERS ="others"
}


export interface IUser {
    name : string;
    email: string;
    password: string;
    phone: string;
    gender?: GenderEnum
}