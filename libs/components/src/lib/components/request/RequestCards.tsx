import { css } from "@emotion/react";
import { UserRequest, Utils } from "@ogrenciden/types";
import router from "next/router";
import { useCallback } from "react";


export interface Props {
    request: UserRequest.Request;
    url?: any;
}

export const RequestCards = (props: Props) => {
    const { request, url } = props;

    const handleRequest = useCallback(() => {
        if (request.ID) {
            router.push(`/requests/${request.ID}`)
        } else {
            router.push(`/requests`)
        }
    }, [request.ID])



    return (
        <div css={cardContainerCSS} onClick={handleRequest}>
            <div>
                <img src="https://via.placeholder.com/250" alt="request" />
            </div>
            <div>
                <p><span>Başlık:</span> {request.Title}</p>
                <p><span>Başlangıç Tarihi:</span> {Utils.getDate(request.RequestStartDate)}</p>
                <p><span>Bitiş Tarihi:</span> {Utils.getDate(request.RequestEndDate)}</p>
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

export default RequestCards;