import { css } from "@emotion/react";
import { WorkAndInternshipDetailCard } from "@ogrenciden/components";
import { WorksAndInternships } from "@ogrenciden/types";
import { GetServerSideProps } from "next";


export interface Props {
    workAndInternship: WorksAndInternships.WorksAndInternship;
}

export const WorkAndInternshipDetailContainer = (props:Props) =>{

    const {workAndInternship} = props;

    return (
        <div css={requestContainer}>
            <WorkAndInternshipDetailCard  workAndInternship={workAndInternship} />
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

    const workAndInternship = await WorksAndInternships.get(id as string);

    return {
        props: {
            workAndInternship: workAndInternship
        }
    }
}


export default WorkAndInternshipDetailContainer;
