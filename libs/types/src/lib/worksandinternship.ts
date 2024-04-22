
import {Companies, Sectors } from "..";
import { request } from "./fetch";
import { QApis } from "..";
import { City } from "./cities";

export interface WorksAndInternship {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    Title: string;
    Content: string;
    Published : boolean;
    Status: string;
    StartTime: string;
    EndTime: string;
    WorkType:string;
    WorkLocationType:string;
    Location:string;
    Sector:Sectors.Sector;
    SectorID:string;
    Company: Companies.Company;
    CompanyID: number;
    CityID: number;
    City: City;
}

export const workType =[
    {ID:1 , Name :"Staj"},
    {ID:2 , Name : "İş"}
]

export const workLocation = [
    {ID:1 , Name :"Uzaktan"},
    {ID:2 , Name : "Ofisten"},
    {ID:3 , Name : "Hibrit"}
]


export async function get(id: number | string) {
    return await request<WorksAndInternship>(`public/jobandinternship/${id}`, {
        method: 'GET'
    })
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<WorksAndInternship[]>(`public/jobandinternship${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}

export async function create(value: WorksAndInternship) {
    return await request<never>(`companies/jobandinternship`, {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

