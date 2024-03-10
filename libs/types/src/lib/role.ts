import { request } from "./fetch";
import { QApis } from "..";


export interface Role {
    ID: number;
    Name : string;
}


export async function publicList(qapi?: QApis.QApi) {
    return await request<Role[]>(`public/roles${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}