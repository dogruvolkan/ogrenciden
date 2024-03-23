import { QApis } from "..";
import { request } from "./fetch";


export interface City {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Code: string;
    Name: string;
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<City[]>(`public/cities${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
} 