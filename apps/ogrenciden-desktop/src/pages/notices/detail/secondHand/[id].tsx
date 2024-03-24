import { css } from "@emotion/react";
import { SecondHandNoticeDetailCard } from "@ogrenciden/components";
import { SecondHands } from "@ogrenciden/types";
import { GetServerSideProps } from "next";


export interface Props {
    secondHands: SecondHands.SecondHand;
}

export const SecondHandNoticeDetailContainer = (props:Props) =>{

    const {secondHands} = props;
    console.log("gelen",secondHands);

    return (
        <div css={requestContainer}>
            <SecondHandNoticeDetailCard  secondHands={secondHands} />
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

    const secondHands = await SecondHands.get(id as string);

    console.log("gelen",secondHands);

    return {
        props: {
            secondHands: secondHands
        }
    }
}


export default SecondHandNoticeDetailContainer;
