/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { UserRequest, Utils } from "@ogrenciden/types";

export interface Props {
    request: UserRequest.Request;
}

export const RequestDetailCard = (props: Props) => {
    const { request } = props;

    return (
        <div css={requestContainer}>
            <div>
                <img src="https://via.placeholder.com/500" alt="request" />
            </div>
            <div>
                <p><span>Talep eden:{request.StudentID}</span></p>
                <p><span>Başlık:</span> {request.Title}</p>
                <p><span>Kategori:</span> {request?.Category?.Name ?? ""}</p>
                <p><span>Başlangıç Tarihi:</span> {Utils.getDate(request.RequestStartDate)}</p>
                <p><span>Bitiş Tarihi:</span> {Utils.getDate(request.RequestEndDate)}</p>
                <p><span>Açıklama:</span> {request.Description}</p>
            </div>
        </div>
    )
}

const requestContainer = css`
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



export default RequestDetailCard;