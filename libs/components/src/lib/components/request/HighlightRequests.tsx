/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserRequest } from "@ogrenciden/types";
import RequestCards from "./RequestCards";


interface Props {
    requests: UserRequest.Request[];
}


export const HighlightRequests = (props:Props) => {

    const { requests } = props;

    return (
        <div css={container}>
            {requests.map(request => (
               <RequestCards request={request}  />
            ))}
        </div>
    )
}



const container =  css  `
    display: flex;
    justify-content: space-evenly;
    gap:35px;
    flex-wrap: wrap;
`;


export default HighlightRequests;