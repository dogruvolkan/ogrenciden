import { request } from "./fetch";
import { User } from "./users";


export interface Login{
    Username : string;
    Password :string;
    token : string;
}


export interface Register{
    Username:string;
    FirstName:string;
    LastName:string;
    Role:string;
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
        'X-Username':body.Username,

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