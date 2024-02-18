import { QApis } from "..";
import { request } from "./fetch";


export interface Request {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Title: string;
    Description: string;
    Published: boolean;
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