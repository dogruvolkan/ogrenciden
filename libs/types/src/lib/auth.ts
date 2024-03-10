import { Users } from "..";
import { request } from "./fetch";
import { User } from "./users";


export interface Login{
    UserName : string;
    Password :string;
    token?: string;
}


export interface Register{
    UserName:string;
    FirstName:string;
    LastName:string;
    Role:Users.Role;
    Password:string;
}


export interface AuthContextProps {
    user: User | undefined;
    isAuthenticated: boolean;
  
    setUser: (user: User | undefined) => void;
    setAuthenticated: (auth: boolean) => void;
    loading?: boolean;
  }

export async function auth(body:Login){
    const headers = {
        Accept:'application/json',
        'Content-Type':'application/json',
        'X-Username':body.UserName,

    }
    return await request<User>('public/auth',{
        method:'POST',
        body:JSON.stringify(body),
        headers
    })
}


export async function logout(){
    return await request('public/auth/logout',{
        method:'GET'
    })
}

export async function register(body:Register){
    return await request<Register>('public/auth/register',{
        method:'POST',
        body:JSON.stringify(body),
    })
}