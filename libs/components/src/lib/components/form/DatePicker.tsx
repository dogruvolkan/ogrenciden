import { css } from "@emotion/react";
import { useState } from "react";

interface Props {
    label: string;
    onSelectDate: (date: Date | null) => void;
}

export const DatePicker = (props: Props) => {

    const { label, onSelectDate } = props;

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateValue = e.target.value;
        const newDate = dateValue ? new Date(dateValue) : null;
        setSelectedDate(newDate);
        onSelectDate(newDate);
    }

    return (
        <div css={DatePickerContainerCss}>
            <label>{label}</label>
            <input css={DatePickerCss} type="date" value={selectedDate ? selectedDate.toISOString().substr(0, 10) : ""} onChange={handleDateChange} />
        </div>
    )
}


const DatePickerContainerCss = css`
    display:flex;
    flex-direction:column;
    gap:10px;
`

const DatePickerCss = css`
    border : 1px solid lightgray;
    border-radius:5px;
    padding:10px;
    outline:none;
`

export default DatePicker;