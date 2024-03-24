import { QApis, Students } from "..";
import { Category } from "./categories";
import { City } from "./cities";
import { request } from "./fetch";
import { University } from "./universities";
import { User } from "./users";


export interface BooksAndNotes {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    NoticeType: string;
    Title: string;
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
    {ID:1 , Name :"İkinci el"},
    {ID:2 , Name : "Sıfır"}
]

export const currencies = [
    {ID:1 , Name :"USD"},
    {ID:2 , Name : "EUR"},
    {ID:1 , Name :"TRY"},
    {ID:2 , Name : "GBP"}
]


export async function get(id: number | string) {
    return await request<BooksAndNotes>(`public/booksandnotes/${id}`, {
        method: 'GET'
    })
}

export async function publicList(qapi?: QApis.QApi) {
    return await request<BooksAndNotes[]>(`public/booksandnotes${QApis.toQueryParam(qapi)}`, {
        method: 'GET'
    })
}


export async function create(value: BooksAndNotes) {
    return await request<never>(`students/booksandnotes`, {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

export async function mySecondHandNotices(options?: RequestInit, qapi?: QApis.QApi) {
    return await request<BooksAndNotes[]>(`students/booksandnotes/mine${QApis.toQueryParam(qapi)}`, {
        method: 'GET',
        ...options
    })
}