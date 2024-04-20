import { QApis, Students, Users } from "..";
import { request } from "./fetch";
import { Category } from "./categories";

// talepler için
export interface Request {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Title: string;
    Description: string;
    // ImagePath: string;
    Published: boolean;
    Category: Category;
    CategoryID: number;
    Student : Students.Student;
    StudentID: number;
    RequestStartDate: string;
    RequestEndDate: string;
    User: Users.User;
}

export async function get(id: number | string) {
    return await request<Request>(`public/requests/${id}`, {
        method: 'GET'
    })
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<Request[]>(`public/requests${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}

export async function create(value: Request) {
    return await request<never>(`students/requests`, {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

export async function myRequests(options?: RequestInit, qapi?: QApis.QApi) {
    return await request<Request[]>(`students/requests/mine${QApis.toQueryParam(qapi)}`, {
        method: 'GET',
        ...options
    })
}

export async function getrequestCount(){
    return await request<number>('public/requests/count',{
        method:'GET'
    })
}