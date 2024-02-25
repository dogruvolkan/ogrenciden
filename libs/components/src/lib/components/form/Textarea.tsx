import { css } from "@emotion/react";


interface Props {
    placeholder?: string;
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
}

export const Textarea = (props: Props) => {
    const { placeholder, value, onChange, disabled, label } = props;
    return (
        <div css={textareaContainerCss} >
            <label>{label}</label>
            <textarea css={textareaCss} placeholder={placeholder} disabled={disabled} cols={30} rows={10} onChange={onChange} value={value} />
        </div >
    )
}

const textareaContainerCss = css`
    display:flex;
    flex-direction:column;
    gap:10px;
`

const textareaCss = css`
    padding:10px;
    border:1px solid lightgray;
    border-radius:5px;
    outline:none;
    width:100%;
    resize:none;
`

export default Textarea;