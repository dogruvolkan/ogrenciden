
export interface HouseBody {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    HouseLocation: string;
    MoveDate: string;
    MonthlyRent: string;
    PriceType: string;
    Gender: string;
    Age: string;
    About: string;
    NoticeType: string;
    Published : boolean;
    Status: string;
    StartTime: string;
    EndTime: string;
}

export const noticeType =[
    {ID:0 , Name :"Ev İlanı"},
    {ID:1 , Name : "Ev Arkadaşı İlanı"}
]

export const AgeArray = [
    {ID:0 , Name :"18-25 yaş"},
    {ID:1 , Name : "25-30 yaş"},
    {ID:2 , Name : "30-40 yaş"},
    {ID:3 , Name : "40-50 yaş"},
    {ID:4 , Name : "50-60 yaş"},
    {ID:5 , Name : "60+ yaş"},
    {ID:6 , Name : "Farketmez"}
]

export const GenderArray = [
    {ID:0 , Name :"Erkek"},
    {ID:1 , Name : "Kadın"},
    {ID:2 , Name : "Diğer"},
    {ID:3 , Name : "Farketmez"}
]