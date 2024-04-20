import { QApis, Students } from "..";
import { Category } from "./categories";
import { City } from "./cities";
import { request } from "./fetch";
import { University } from "./universities";
import { User } from "./users";


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
    University: University
    UniversityID:number;
    User:User;
    // ImagePath: string;
}


export const noticeType =[
    {ID:0 , Name :"İkinci el"},
    {ID:1 , Name : "Sıfır"}
]

export const currencies = [
    {ID:1 , Name :"USD"},
    {ID:2 , Name : "EUR"},
    {ID:3 , Name :"TRY"},
    {ID:4 , Name : "GBP"}
]


export async function get(id: number | string) {
    return await request<SecondHand>(`public/secondhand/${id}`, {
        method: 'GET'
    })
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<SecondHand[]>(`public/secondhand${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}


export async function create(value: SecondHand) {
    return await request<never>(`students/secondhand`, {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

export async function mySecondHandNotices(options?: RequestInit, qapi?: QApis.QApi) {
    return await request<SecondHand[]>(`students/secondhand/mine${QApis.toQueryParam(qapi)}`, {
        method: 'GET',
        ...options
    })
}

export async function getSecondHandCount(){
    return await request<number>('public/secondhand/count',{
        method:'GET'
    })
}