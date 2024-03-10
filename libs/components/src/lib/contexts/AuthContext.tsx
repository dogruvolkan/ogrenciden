import { Auth ,Callback,Users} from "@ogrenciden/types";
import { createContext, useEffect, useState } from "react";
import { AuthService } from "@ogrenciden/services";


export const AuthContext = createContext<Auth.AuthContextProps>({
    user:undefined,
    isAuthenticated:false,
    setUser:Callback.emptyCallback,
    setAuthenticated:Callback.emptyCallback,
    loading:false,
})

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider(props:AuthProviderProps) {
    const {children} = props;
    const [user , setUser] = useState<Users.User>();
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        AuthService.checkLogin(setAuthenticated, setUser, setLoading);
    },[])

    return (
        <AuthContext.Provider 
        value={{
            user,
            isAuthenticated,
            setUser,
            setAuthenticated,
            loading
        
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}