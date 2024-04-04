/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SecondHandNoticeCard from "./SecondHandNoticeCard";
import { SecondHands } from "@ogrenciden/types";

interface Props {
    secondHands: SecondHands.SecondHand[];
}


export const HighlightSecondHands = (props: Props) => {
    
        const { secondHands } = props;
    
        return (
            <div css={container}>
                {secondHands.map(secondHand => (
                    <SecondHandNoticeCard secondHandNotice={secondHand} />
                ))}
            </div>
        )
}

const container =  css`
    display: flex;
    justify-content: space-evenly;
    gap:35px;
    flex-wrap: wrap;
`;

export default HighlightSecondHands;