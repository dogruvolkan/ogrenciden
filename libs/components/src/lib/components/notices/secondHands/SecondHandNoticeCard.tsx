/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SecondHands } from "@ogrenciden/types";
import router from "next/router";
import { useCallback } from "react";


interface Props {
    secondHandNotice: SecondHands.SecondHand;
}

export const SecondHandNoticeCard = (props:Props) => {

    const {secondHandNotice} = props

    console.log(secondHandNotice);

    const handlesecondHandNotice = useCallback(() => {
        if (secondHandNotice.ID) {
            router.push(`/notices/detail/secondHand/${secondHandNotice.ID}`)
        } else {
            router.push(`/secondHandNotices`)
        }
    }, [secondHandNotice.ID])

    return (
        <div css={cardContainerCSS} onClick={handlesecondHandNotice}>
            <div>
                <img src="https://via.placeholder.com/250" alt="secondHandNotice" />
            </div>
            <div>
                <p><span>Başlık:</span> {secondHandNotice.Title}</p>
                <p><span>Fiyat:</span> {secondHandNotice.Price}</p>
            </div>
        </div>
    )
}

const cardContainerCSS = css`
    width:330px;
    height:350px;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    cursor:pointer;
    img{
        width:220px;
        border-radius:20px;
    }

    p{
        padding-bottom:3px;
    }

    span{
        font-weight:600;
    }
`


export default SecondHandNoticeCard;