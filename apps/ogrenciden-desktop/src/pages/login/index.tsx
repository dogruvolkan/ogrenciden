import { css } from "@emotion/react";
import { Button, Input } from "@ogrenciden/components";
import { AuthService } from "@ogrenciden/services";
import { Auth } from "@ogrenciden/types";
import { AuthContext } from "libs/components/src/lib/contexts/AuthContext";
import { useCallback, useContext, useState } from "react";


export const Login = () => {

    const [login , setLogin] = useState<Auth.Login>({
        UserName: "",
        Password: ""
    })

    const authContext = useContext(AuthContext)

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({...login, UserName: e.target.value})
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({...login, Password: e.target.value})
    }


    const onLogin = useCallback(() => {
        AuthService.login(login , authContext).then(() => {
            console.log("login success")
        }
        ).catch((err) => {
            console.log(err.message)
        })

    },[login, authContext])

    return (
        <div css={loginContainerCss}>
            <div css={imgContainerCss}> 
                <img src={"login.svg"} alt="" />
            </div>
            <div css={formContainerCss}>
                <h1>Giriş Yap</h1>
               <Input type={"text"} label={"Kullanıcı Adı"} placeholder={"Kullanıcı Adı"} value={login.UserName} onChange={handleUserName}/>
               <Input type={"password"} label={"Şifre"} placeholder={"Şifre"} value={login.Password} onChange={handlePassword}/>
               <span><a href={"/register"}>Hesabın yok mu? Kayıt Ol.</a></span>
               <Button size={"md"} variant={"primary"} onClick={onLogin}>Giriş Yap</Button>
            </div>
        </div>
    )
}


const loginContainerCss = css`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 20px auto;
    max-width: 90%;
`

const imgContainerCss = css `
    width: 50%;
   
`

const formContainerCss = css `
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 20px;

    h1{
        font-size: 2em;
        font-weight: bold;
    }

    span{
        font-size: 0.8em;
        font-weight: normal;
        cursor: pointer;
        a{
            color: #007bff;
            text-decoration: none;
        }
    }
`

export default Login;