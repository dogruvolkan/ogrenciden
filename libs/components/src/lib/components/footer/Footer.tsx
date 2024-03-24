/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
    return (
        <div css={footerCss}>

            <div css={firstFooterCss}>
                <img src="/logo.png" alt="logo" />
                <div css={socialFooterCss}>
                    <a href="/"><AiFillFacebook /></a>
                    <a href="/"><AiFillInstagram /></a>
                    <a href="/"><AiFillTwitterSquare /></a>
                    <a href="/"><AiFillLinkedin /></a>
                </div>
            </div>
            <p>© 2024 ogrenciden.com All rights reserved.</p>
        </div>
    )
}


const footerCss = css`
    background-color: #f5f5f5;
    margin: 20px auto;
    border-radius: 20px;
    width: 100%;
    max-width: 90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    padding: 20px 0;


    p{
        font-weight:600;
    }
`

const firstFooterCss = css`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:100px;

    img{
        width:100px;
    }
`

const socialFooterCss = css`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;

   
    a{
        font-size:2em;
        color:#00000;
    }
`

export default Footer;