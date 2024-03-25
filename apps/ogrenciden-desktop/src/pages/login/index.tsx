import { css } from "@emotion/react";
import { Button, Input } from "@ogrenciden/components";
import { AuthService } from "@ogrenciden/services";
import { Auth } from "@ogrenciden/types";
import { AuthContext } from "libs/components/src/lib/contexts/AuthContext";
import router from "next/router";
import { useCallback, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {

    console.log("test")

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
            toast.success("Giriş Başarılı", {
                autoClose: 2000,
            });
            //waiting close toast
            setTimeout(() => {
                router.push("/")
            }, 2000);
        }
        ).catch((err) => {
            toast.error(err.message, {
                autoClose: 2000,
            });
        })

    },[login, authContext])

    return (
        <div css={loginContainerCss}>
            <div css={imgContainerCss}> 
                <img src={"login.svg"} alt="login" />
            </div>
            <div css={formContainerCss}>
                <h1>Giriş Yap</h1>
               <Input type={"text"} label={"Kullanıcı Adı"} placeholder={"Kullanıcı Adı"} value={login.UserName} onChange={handleUserName}/>
               <Input type={"password"} label={"Şifre"} placeholder={"Şifre"} value={login.Password} onChange={handlePassword}/>
               <span><a href={"/register"}>Hesabın yok mu? Kayıt Ol.</a></span>
               <Button size={"md"} variant={"primary"} onClick={onLogin}>Giriş Yap</Button>
            </div>
            <ToastContainer />
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