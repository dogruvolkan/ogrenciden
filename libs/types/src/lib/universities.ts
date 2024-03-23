import { QApis } from "..";
import { request } from "./fetch";

export interface University{
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Name: string;
    CityID:number;
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<University[]>(`public/universities${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}