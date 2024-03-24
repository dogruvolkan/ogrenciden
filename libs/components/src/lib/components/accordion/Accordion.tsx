/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

export interface Props {
    question: string;
    answer: string;
    defaultOpen?: boolean;
}

export const Accordion = (props: Props) => {
    const { question, answer, defaultOpen } = props;

    const [open, setOpen] = useState(defaultOpen);

    const handleFaq = () => {
        setOpen(!open)
    }

    return (
        <div css={accordionCss}>
            <div css={questionContainerCss}>
                <p>{question}</p>
                <button onClick={handleFaq} css={btnCss}>{open ? <AiOutlineUp /> : <AiOutlineDown />}</button>
            </div>
            {open && <p css={answerCss}>{answer}</p>}
        </div>
    )
}

const accordionCss = css`
    width: 600px;
    border:1px solid lightgray;
    border-radius:10px;
    background-color:white;
`

const questionContainerCss = css`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:50px;
    background-color:#C6488C;
    color:white;
    border-radius:10px;
    padding:10px;
`

const answerCss = css`
    padding:10px;
`

const btnCss = css`
    cursor:pointer;
    background-color:transparent;
    width:30px;
    height:30px;
    border:1px solid white;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    font-size:1em;
    color:white;
`

export default Accordion;