import { css } from "@emotion/react"
import { Button, Input, SelectBox } from "@ogrenciden/components";
import { Auth, Role, Users, Utils } from "@ogrenciden/types";
import { sha256 } from "js-sha256";
import { GetServerSideProps } from "next";
import router from "next/router";
import { useCallback, useState } from "react";


interface Props {
    roles: Role.Role[];
}


export const Register = (props:Props) => {

  const {roles} = props;
  console.log("roles", roles)

    const [selectedRole , setSelectedRole] = useState<Users.Role>(Users.Role.STUDENT)
    const [rePassword , setRePassword] = useState<string>("")

    const [register , setRegister] = useState<Auth.Register>({
        UserName:"",
        FirstName:"",
        LastName:"",
        Role:Users.Role.STUDENT,
        Password:"",
    })

    const checkPassword = useCallback(() =>{
        if(rePassword.length > 0){
           return  Utils.checkPassword(register.Password, rePassword)
        }
    },[rePassword, register.Password])


    const onSubmit = useCallback(() => {
        if (checkPassword()) {
          Auth.register({
            ...register,
            Password: register.Password
              ? sha256(register.Password)
              : '',
            Role: selectedRole,
          }).then((res) => {
            if (!res?.error) {
              alert('Kayıt başarılı');
              setRegister({
                FirstName: '',
                LastName: '',
                UserName: '',
                Password: '',
                Role: Users.Role.STUDENT,
              });
              setRePassword('');
              router.push("/login")
            } else {
              alert(res.error.message);
            }
          });
        } else {
          alert('Şifreler uyuşmuyor');
        }
      }, [checkPassword, register, selectedRole]);


      const onFirstNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({...register, FirstName: e.target.value})
      }, [register]);

      const onLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({...register, LastName: e.target.value})
      }, [register]);

      const onUserNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({...register, UserName: e.target.value})
      }, [register]);

      const onPasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({...register, Password: e.target.value})
      }, [register]);


      const handleOptionSelect = (option: number) => {
        console.log("option", option)
        setRegister({
            ...register,
            Role: Number(option)
        });
        setSelectedRole(Number(option))
    };
    


    return (
        <div css={registerContainerCss}>
            <div css={imgContainerCss}> 
                <img src={"register.svg"} alt="register" />
            </div>
            <div css={formContainerCss}>
                <h1>Kayıt Ol</h1>
                <Input type={"text"} label={"Kullanıcı Adı"} placeholder={"Kullanıcı Adı"} value={register.FirstName} onChange={onFirstNameChange}/>
                <Input type={"text"} label={"Kullanıcı Soyadı"} placeholder={"Kullanıcı Soyadı"} value={register.LastName} onChange={onLastNameChange}/>
               <Input type={"email"} label={"Kullanıcı Email"} placeholder={"Kullanıcı Email"} value={register.UserName} onChange={onUserNameChange}/>
              <SelectBox options={roles} onSelectOption={handleOptionSelect} label={"Role"} optionLabel="Name" optionValue="ID" />
               <Input type={"password"} label={"Şifre"} placeholder={"Şifre"} value={register.Password} onChange={onPasswordChange}/>
               <Input type={"password"} label={"Şifre Tekrar"} placeholder={"Şifre Tekrar"} value={rePassword} onChange={(e) => {setRePassword(e.target.value)}}/>
               <Button size={"md"} variant={"danger"} onClick={onSubmit}>Kayıt Ol</Button>
            </div>
        </div>
    )
}


export const getServerSideProps :GetServerSideProps = async () => {

  const roles = await Role.publicList({filter: ['ID>1']});

    return {
        props: {
            roles: roles
        }
    }

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