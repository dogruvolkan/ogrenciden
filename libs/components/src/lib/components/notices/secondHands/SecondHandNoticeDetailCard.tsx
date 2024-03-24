/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SecondHands } from "@ogrenciden/types";

export interface Props {
    secondHands : SecondHands.SecondHand;
}

export const SecondHandNoticeDetailCard = (props: Props) => {
    const { secondHands } = props;


    return (
        <div css={secondHandsContainer}>
            <div>
                <img src="https://via.placeholder.com/500" alt="secondHands" />
            </div>
            <div>
                <p><span>İlan Sahibi: {secondHands.User?.FirstName} {secondHands.User?.LastName} </span></p>
                <p><span>Başlık:</span> {secondHands.Title}</p>
                <p><span>Durumu:</span> {SecondHands.noticeType[secondHands.NoticeType]?.Name}</p>
                <p><span>Kategori:</span> {secondHands?.Category?.Name ?? ""}</p>
                <p><span>Açıklama:</span> {secondHands.Description}</p>
                <p><span>Fiyat:</span> {secondHands.Price} {SecondHands.currencies[secondHands.PriceType].Name}</p>
                <p><span>Şehir:</span> {secondHands.City?.Name}</p>
                <p><span>Üniversite:</span> {secondHands.University?.Name}</p>
            </div>
        </div>
    )
}

const secondHandsContainer = css`
    display:flex;
    gap:40px;

    img{
        width:500px;
        border-radius:20px;
    }

    p{
        padding-bottom:3px;
    }

    span{
        font-weight:600;
    }
`



export default SecondHandNoticeDetailCard;