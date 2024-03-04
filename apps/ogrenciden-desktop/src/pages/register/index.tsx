import { css } from "@emotion/react"
import { Button, Input } from "@ogrenciden/components";



export const Register = () => {

    return (
        <div css={registerContainerCss}>
            <div css={imgContainerCss}> 
                <img src={"register.svg"} alt="" />
            </div>
            <div css={formContainerCss}>
                <h1>Kayıt Ol</h1>
               <Input type={"text"} label={"Kullanıcı Adı"} placeholder={"Kullanıcı Adı"} value={undefined} onChange={undefined}/>
               <Input type={"password"} label={"Şifre"} placeholder={"Şifre"} value={undefined} onChange={undefined}/>
               <Input type={"password"} label={"Şifre Tekrar"} placeholder={"Şifre Tekrar"} value={undefined} onChange={undefined}/>
               <Button size={"md"} variant={"danger"}>Kayıt Ol</Button>
            </div>
        </div>
    )
}


const registerContainerCss = css`
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
`

export default Register;