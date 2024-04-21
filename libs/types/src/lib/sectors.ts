import { QApis } from "..";
import { request } from "./fetch";


export interface Sector {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Name: string;
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<Sector[]>(`public/sectors${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}