import { QApis } from "..";
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
    RequestStartDate: string;
    RequestEndDate: string;
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
    return await request<Request>(`public/requests`, {
        method: 'POST',
        body: JSON.stringify(value)
    })
}