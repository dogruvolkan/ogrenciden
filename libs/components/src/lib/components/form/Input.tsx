import { css } from "@emotion/react";


interface Props {
    type: string;
    placeholder?: string;
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
}


export const Input = (props: Props) => {
    const { type, placeholder, value, onChange, disabled, label } = props;

    return (
        <div css={inputContainerCss}>
            <label>{label}</label>
            <input css={inputCss} type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
        </div>
    )
}

const inputContainerCss = css`
    display:flex;
    flex-direction:column;
    gap:10px;
`

const inputCss = css`
    padding:10px;
    border:1px solid lightgray;
    border-radius:5px;
    outline:none;
    width:100%;
`


export default Input;

