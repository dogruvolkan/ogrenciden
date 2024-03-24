import { css } from "@emotion/react";
import { RequestCards } from "@ogrenciden/components";
import { UserRequest } from "@ogrenciden/types";
import { GetServerSideProps } from "next";

interface Props {
    requests: UserRequest.Request[];
}


export const MyRequests = (props:Props) => {

    const {requests} = props
  
    return (
        <div css={containerCss}>
            <div css={requestContainerCss}>
            <h1>Taleplerim</h1>
            <div css={requestCss}>
                {requests?.map((request) => {
                    return (
                        <RequestCards key={request.ID} request={request}/>
                    )
                })}
            </div>
            </div>
        </div>
    )
   
}


export default MyRequests;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const jwt = context.req.cookies['jwt'];

    const requests = await UserRequest.myRequests({
        headers: {
            Authorization: `Bearer ${jwt}`,
          },
    })

    if (!jwt) {
        return {
          notFound: true,
        };
      }


    return {
        props: {
            requests: requests
        }
    }
}

const containerCss = css`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:40px;
    padding:20px;

    h1{
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 20px;

        span{
            font-size: 0.5em;
            font-weight: normal;
            vertical-align: middle;
        }
    }
`

const requestContainerCss = css `
    display:flex;
    flex-direction:column;
    gap:20px;
`

const requestCss = css`
    display:flex;
    gap:30px;
    align-items:center;
    justify-content:center;
`
