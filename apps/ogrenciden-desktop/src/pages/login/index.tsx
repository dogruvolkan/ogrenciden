import { css } from "@emotion/react";
import { Button, Input } from "@ogrenciden/components";


export const Login = () => {

    return (
        <div css={loginContainerCss}>
            <div css={imgContainerCss}> 
                <img src={"login.svg"} alt="" />
            </div>
            <div css={formContainerCss}>
                <h1>Giriş Yap</h1>
               <Input type={"text"} label={"Kullanıcı Adı"} placeholder={"Kullanıcı Adı"} value={undefined} onChange={undefined}/>
               <Input type={"password"} label={"Şifre"} placeholder={"Şifre"} value={undefined} onChange={undefined}/>
               <span><a href={"/register"}>Hesabın yok mu? Kayıt Ol.</a></span>
               <Button size={"md"} variant={"primary"}>Giriş Yap</Button>
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