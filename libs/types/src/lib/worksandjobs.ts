
import { Companies, Sectors } from "..";
import { request } from "./fetch";

export interface WorksAndJobs {
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
}

export const workType =[
    {ID:1 , Name :"Staj"},
    {ID:2 , Name : "İş"}
]

export const workLocation =[
    {ID:1 , Name :"Uzaktan"},
    {ID:2 , Name : "Ofisten"},
    {ID:3 , Name : "Hibrit"}
]


export async function create(value: WorksAndJobs) {
    return await request<never>(`companies/jobandinternship`, {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

