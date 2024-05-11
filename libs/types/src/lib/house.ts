

export interface HouseBody {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    HouseLocation: string;
    Deposit: string;
    StayTime: string;
    MonthlyRent: string;
    PriceType: string;
    StayPersonCount: string;
    CustomRoom: string;
    Gender: string;
    Age: string;
    Pet: string;
    Cigarette: string;
    Heat: string;
    RoomType: string;
    HouseInclude: string;
    About: string;
    Published : boolean;
    Status: string;
    StartTime: string;
    EndTime: string;
}

export const DepositArray =[
    {ID:0 , Name :"Depozito var, 1 kira"},
    {ID:1 , Name : "Depozito var, 2 kira"},
    {ID:2 , Name : "Depozito var, 2 kiradan fazla"},
    {ID:3 , Name : "Depozito yok"},
]

export const StayTimeArray =[
    {ID:0 , Name :"1 ay"},
    {ID:1 , Name : "2 ay"},
    {ID:2 , Name : "3 ay"},
    {ID:3 , Name : "4 ay"},
    {ID:4 , Name : "5 ay"},
    {ID:5 , Name : "6 ay"},
    {ID:6 , Name : "7 ay"},
    {ID:7 , Name : "8 ay"},
    {ID:8 , Name : "9 ay"},
    {ID:9 , Name : "10 ay"},
    {ID:10 , Name : "11 ay"},
    {ID:11 , Name : "12 ay"},
    {ID:12 , Name : "12 aydan fazla"},
]

export const StayPersonCountArray =[
    {ID:0 , Name :"1 kişi"},
    {ID:1 , Name : "2 kişi"},
    {ID:2 , Name : "3 kişi"},
    {ID:3 , Name : "4 kişi"},
    {ID:4 , Name : "5 kişi"},
]

export const CustomRoomArray =[
    {ID:0 , Name :"Evet var"},
    {ID:1 , Name : "Hayır yok"},
]


export const PetArray =[
    {ID:0 , Name :"Evet , getirebilir"},
    {ID:1 , Name : "Hayır , getiremez"},
]

export const CigaretteArray =[
    {ID:0 , Name :"Evet , içebilir"},
    {ID:1 , Name : "Hayır , içemez"},
]

export const HeatArray =[
    {ID:0 , Name :"Gaz"},
    {ID:1 , Name : "Doğalgaz kombi"},
    {ID:2 , Name : "Merkezi sistem"},
    {ID:3 , Name : "Soba"},
    {ID:4 , Name : "Klima"},
    {ID:5 , Name : "Yerden ısıtma"},
    {ID:6 , Name : "Isıtma yok"},
]

export const RoomTypeArray =[
    {ID:0 , Name :"1 + 0"},
    {ID:1 , Name :"1 + 1"},
    {ID:2 , Name : "2 + 1"},
    {ID:3 , Name : "3 + 1"},
    {ID:4 , Name : "Diğer"},
]


export const HouseIncludeArray =[
    {ID:0 , Name :"Beyaz eşya"},
    {ID:1 , Name :"Mobilya"},
    {ID:2 , Name :"Wifi"},
    {ID:3 , Name :"Klima"},
    {ID:4 , Name :"Çamaşır makinesi"},
    {ID:5 , Name :"Bulaşık makinesi"},
    {ID:6 , Name :"Televizyon"},
    {ID:7 , Name :"Otopark"},
    {ID:8 , Name :"BalKon"},
]

