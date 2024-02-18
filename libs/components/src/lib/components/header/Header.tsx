import { css } from '@emotion/react';
import Button from '../button/Button';
import { AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';

const Header = () => {

    const [userPopever, setUserPopover] = useState(false);

    const toggleUserPopover = () => {
        setUserPopover(!userPopever);
    }

    const isLogged = false;

    return (
        <header>
            <div css={headerContainer}>
                <a href='/'><img src="./logo.png" alt="logo" /></a>
                <nav >
                    <ul css={navbarUlCss}>
                        <li><a href="/">KİTAP & NOT</a></li>
                        <li><a href="/">2.EL EŞYA</a></li>
                        <li><a href="/">STAJ & İŞ</a></li>
                        <li><a href="/">EV & EV ARKADAŞI</a></li>
                        <Button size={"md"} variant={"primary"} onClick={undefined}>TALEP OLUŞTUR</Button>
                        <Button size={"md"} variant={"secondary"} onClick={undefined}>İLAN VER</Button>
                        <button css={userBtnCss} onClick={toggleUserPopover}>
                            <AiOutlineUser size={25} />
                            {userPopever && <div css={userPopeverCss}>
                                <ul>
                                    {isLogged ?
                                        <>
                                            <li><a href="/dsds">Giriş Yap</a></li>
                                            <li><a href="/dsds">Kayıt Ol</a></li>
                                        </> :
                                        <>
                                            <li><a href="/dsds">Profilim</a></li>
                                            <li><a href="/dsds">İlanlarım</a></li>
                                            <li><a href="/dsds">Taleplerim</a></li>
                                            <li><a href="/dsds">Favorilerim</a></li>
                                            <li><a href="/xxx">Çıkış Yap</a></li>
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

export default Header;

