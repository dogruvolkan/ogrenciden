/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";



export const Statistics = () => {
    return (
        <div css={statisticContainerCss}>
            <h1 css={titleCss}>İstatistikler</h1>
            <div css={cardContainerCss}>
                <div css={card}>
                    <h1>+2k</h1>
                    <h2>KULLANICI</h2>
                </div>
                <div css={card}>
                    <h1>+400</h1>
                    <h2>İLAN</h2>
                </div>
                <div css={card}>
                    <h1>+100</h1>
                    <h2>ÜRÜN SATIŞI</h2>
                </div>
            </div>
        </div>
    );
}


const statisticContainerCss = css`
    margin: 20px auto;
    border-radius: 20px;
    width: 100%;
    max-width: 90%;
    padding: 40px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
    border:1px solid #e0e0e0;
`


const cardContainerCss = css`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:30px;
`

const titleCss = css`
    font-size:2em;
    font-weight:bold;
`

const card = css`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:5px;
    width:300px;
    height:100px;
    border-radius:20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    h1{
        font-size:2em;
        font-weight:bold;
    }

    h2{
        font-size:1.3em;
    }
`

export default Statistics;