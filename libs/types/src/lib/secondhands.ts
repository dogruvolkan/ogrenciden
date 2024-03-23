import { Students } from "..";
import { Category } from "./categories";
import { City } from "./cities";
import { request } from "./fetch";


export interface SecondHand {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    NoticeType: string;
    Title: string;
    Category: Category;
    CategoryID: number;
    Price: number;
    PriceType: string;
    City: City;
    CityID: number;
    Description: string;
    Student : Students.Student;
    StudentID: number;
    UniversityID:number;
    // ImagePath: string;
}


export async function create(value: SecondHand) {
    return await request<never>(`students/secondhand`, {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

