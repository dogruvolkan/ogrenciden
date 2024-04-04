/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '../button/Button';
import { AiOutlineUser } from "react-icons/ai";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Auth } from '@ogrenciden/types';
import router from 'next/router';

const Header = () => {

    const [userPopever, setUserPopover] = useState(false);

    const toggleUserPopover = () => {
        setUserPopover(!userPopever);
    }

    const authContext = useContext(AuthContext)

    const onLogout = () => {
        Auth.logout().then(() => {
            router.reload();
        }
        ).catch((err) => {
            alert(err)
        }
        )
    }

    const handleCreateRequest = () => {
        if (!authContext.isAuthenticated) {
            router.push('/login')
        }else{
            router.push('/requests/create')
        }
    }

    const handleCreateNotice = () => {
        if (!authContext.isAuthenticated) {
            router.push('/login')
        }else{
            router.push('/notices/create')
        }
    }

    return (
        <header>
            <div css={headerContainer}>
                <a href='/'><img src="/logo.png" alt="logo" /></a>
                <nav >
                    <ul css={navbarUlCss}>
                        <li><a href="/">KİTAP & NOT</a></li>
                        <li><a href="/">2.EL EŞYA</a></li>
                        <li><a href="/">STAJ & İŞ</a></li>
                        <li><a href="/">EV & EV ARKADAŞI</a></li>
                        <Button size={"md"} variant={"primary"} onClick={handleCreateRequest}> TALEP OLUŞTUR</Button>
                        <Button size={"md"} variant={"secondary"} onClick={handleCreateNotice}>İLAN VER</Button>
                        <button css={userBtnCss} onClick={toggleUserPopover}>
                            <AiOutlineUser size={25}> </AiOutlineUser>
                            <span css={userCss}>{authContext.isAuthenticated && `${(authContext.user?.FirstName)?.toUpperCase()}`}</span>
                            {userPopever && <div css={userPopeverCss}>
                                <ul>
                                    {!authContext.isAuthenticated ?
                                        <>
                                            <li><a href="/login">Giriş Yap</a></li>
                                            <li><a href="/register">Kayıt Ol</a></li>
                                        </> :
                                        <>                                      
                                            <li><a href="/dsds">Profilim</a></li>
                                            <li><a href="/notices/mine">İlanlarım</a></li>
                                            <li><a href="/requests/mine">Taleplerim</a></li>
                                            <li><a href="/dsds">Favorilerim</a></li>
                                            <li ><button css={logoutBtnCss}  onClick={onLogout}>Çıkış Yap</button></li>
                                        </>
                                    }
                                </ul>
                            </div>
                            }
                        </button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


const headerContainer = css`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 40px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
    border-radius: 20px;
    width: 100%;
    max-width: 90%;
    height:90px;
    border:1px solid lightgray;
    border-radius: 50px;
    img{
        width: 100px;
    }
`


const navbarUlCss = css`
        display:flex;
        align-items:center;
        list-style:none;
        gap:40px;
        li{
            a{
                text-decoration:none; 
                color:black;
                font-weight:600;
            }
            a:hover{
                opacity:0.8;
            }
        }

    
`

const userBtnCss = css`
    cursor:pointer;
    position:relative;
    background:none;
    border:1px solid lightgray;
    width: 40px;
    height: 40px;
    border-radius: 60%;
`

const userPopeverCss = css`
    width: 120px;
    position: absolute;
    top: 55px;
    left:-45px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 45%;
        transform: translateX(-50%);
        width: 20px;
        height: 20px;
        background-color: white;
        border-top: 1px solid lightgray;
        border-left: 1px solid lightgray;
        transform: rotate(45deg);
    }
    
    ul{
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        justify-content:center;
        gap: 15px;
        padding: 10px;
        list-style:none;
        li{
            a{
                text-decoration:none;
                color:black;
            }
        }
    }
`

const userCss = css`
    position:absolute;
   left:50px;
   bottom:9px;
   width: 50px;
   white-space: wrap;
   vertical-space: 10px;
  
`

const logoutBtnCss = css`
    background-color:transparent;
    text-decoration:none; 
    color:black;
    font-weight:600;
    margin-left: -5px;
    cursor:pointer;

    &:hover{
        opacity:0.8;
    }
` 

export default Header;

