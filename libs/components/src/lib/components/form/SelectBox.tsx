import { css } from "@emotion/react";
import { useState } from "react";

export interface Option {
    value: string | number;
    label: string;
}

interface Props {
    options: Option[];
    onSelectOption: (option: string) => void;
    label: string;
    optionLabel?: string;
    optionValue?: string;
}

export const SelectBox = (props: Props) => {
    const { options, label, onSelectOption, optionLabel, optionValue } = props;

    const [selectedOption, setSelectedOption] = useState<string>("")

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value)
        onSelectOption(e.target.value)
    }

    return (
        <div css={SelectBoxContainerCss}>
            <label>{label}</label>
            <select css={SelectBoxCss} value={selectedOption} onChange={handleOptionChange}>
                <option value={""}>{`${label} seçiniz`}</option>
                {options.map((option, index) => {
                    return <option key={index} value={option[optionValue]}>{option[optionLabel]}</option>
                })}
            </select>
        </div>
    )
}

const SelectBoxContainerCss = css`
    display:flex;
    flex-direction:column;
    gap:10px;
`

const SelectBoxCss = css`
    border : 1px solid lightgray;
    border-radius:5px;
    padding:10px;
    outline:none;
`



export default SelectBox;
