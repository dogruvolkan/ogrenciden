import { request } from "./fetch";

export interface User{
    ID : number;
    CreatedAt: string;
    UpdatedAt: string;
    FirstName: string;
    LastName: string;
    UserName: string;
    Description: string;
    Address: string;
    Gender: string;
    University: string;
    Department: string;
    PhoneNumber: string;
    Email: string;
    whatsappAccount: string;
    RoleID: number;
}


export enum Role{
    ADMIN =1,
    STUDENT,
    COMPANY,
}


export async function me(options?: RequestInit){
    return await request<User>('users/me',{
        method:'GET',
        ...options
    })
}


export async function getUsersCount(){
    return await request<number>('public/users/count',{
        method:'GET'
    })
}