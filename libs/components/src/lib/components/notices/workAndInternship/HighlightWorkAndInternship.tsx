/** @jsxImportSource @emotion/react */
import { WorksAndInternships } from "@ogrenciden/types";
import WorkAndInternshipCard from "./WorkAndInternshipCard";
import { css } from "@emotion/react";

interface Props {
    worksAndInternships: WorksAndInternships.WorksAndInternship[];
}

export const HighlightWorkAndInternship = (props: Props) => {

    const { worksAndInternships } = props

    return (
        <div css={container}>
            {worksAndInternships.map(notice => (
                <WorkAndInternshipCard workAndInternshipNotice={notice} />
            ))}
        </div>
    )
}

export default HighlightWorkAndInternship;

const container =  css`
    display: flex;
    justify-content: space-evenly;
    gap:35px;
    flex-wrap: wrap;
`;

