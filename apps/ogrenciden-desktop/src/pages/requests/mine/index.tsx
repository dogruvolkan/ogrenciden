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
            <h1>Taleplerim</h1>
            <div>
                {requests?.map((request) => {
                    return (
                        <RequestCards key={request.ID} request={request}/>
                    )
                })}
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
    margin: 20px auto;
    width: 100%;
    max-width: 90%;

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
