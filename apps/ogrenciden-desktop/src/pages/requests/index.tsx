import { GetServerSideProps } from "next";
import { UserRequest } from '@ogrenciden/types';
import { RequestCards } from "@ogrenciden/components";
import { css } from "@emotion/react";

export interface Props {
    requests: UserRequest.Request[];
}

export const Requests = (props: Props) => {
    const { requests } = props;
    return (
        <div css={requestCss}>
            <h1>Talepler   <span>({requests.length} talep bulundu)</span></h1>
            <div css={requestContainerCss}>
                {requests?.map(request => (
                    <RequestCards key={request.ID} request={request} />
                ))}
            </div>
        </div>
    )
}


const requestCss = css`
    margin: 20px auto;
    width: 100%;
    max-width: 90%;

    h1{
        font-size: 2em;
        font-weight: bold;

        span{
            font-size: 0.5em;
            font-weight: normal;
            vertical-align: middle;
        }
    }
`

const requestContainerCss = css`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:flex-start;
    gap:30px;
    margin-top:20px;
`


export const getServerSideProps: GetServerSideProps = async (context) => {
    const requests = await UserRequest.publicList({
        filter: ['Published=true']
    })

    return {
        props: {
            requests: requests
        }
    }
}

export default Requests;