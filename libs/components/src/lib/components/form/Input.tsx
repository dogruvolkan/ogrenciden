import { css } from "@emotion/react";
import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";


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
    const [showPassword , setShowPassword] = useState(false)

    return (
        <div css={inputContainerCss}>
            <label>{label}</label>
            <input css={inputCss} type={showPassword ? "text": type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
            {type === "password" && (
                <button css={showHidePassCss} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</button>
            )}
        </div>
    )
}

const inputContainerCss = css`
    display:flex;
    flex-direction:column;
    gap:10px;
    position:relative;
`

const inputCss = css`
    
    padding:10px;
    border:1px solid lightgray;
    border-radius:5px;
    outline:none;
    width:100%;
`

const showHidePassCss = css `
    position:absolute;
    top: 40px;
    width: 50px;
    right: -15px;
    font-size: 20px;
    background-color:transparent;
    cursor:pointer;
`


export default Input;

