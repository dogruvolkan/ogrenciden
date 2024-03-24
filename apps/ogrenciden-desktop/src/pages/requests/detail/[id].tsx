
import { css } from "@emotion/react";
import { RequestDetailCard } from "@ogrenciden/components";
import { UserRequest } from "@ogrenciden/types";
import { GetServerSideProps } from "next";

export interface Props {
    request: UserRequest.Request;
}

export const RequestDetailContainer = (props: Props) => {
    const { request } = props;

    return (
        <div css={requestContainer}>
            <RequestDetailCard request={request} />
        </div>
    )
}

const requestContainer = css`
    margin: 50px auto;
    width: 100%;
    max-width: 90%;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;

    const request = await UserRequest.get(id as string);

    return {
        props: {
            request: request
        }
    }
}

export default RequestDetailContainer;
