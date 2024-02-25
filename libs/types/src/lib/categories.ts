import { QApis } from "..";
import { request } from "./fetch";


export interface Category {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Name: string;
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<Request[]>(`public/categories${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}