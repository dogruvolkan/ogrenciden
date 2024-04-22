/** @jsxImportSource @emotion/react */
import { Utils, WorksAndInternships } from "@ogrenciden/types";
import Button from "../../button/Button";
import { css } from "@emotion/react";


interface Props {
    workAndInternship: WorksAndInternships.WorksAndInternship;
}

export const WorkAndInternshipDetailCard = (props:Props) => {

    const {workAndInternship} = props;

    return (
        <div css={container}>
           <div css={subcontainer}>
           <p><span>İlan Başlığı:</span>{workAndInternship.Title}</p>
            <p><span>İmkanlar:</span>{workAndInternship.Content}</p>
            <p><span>Başlangıç Tarihi:</span>{Utils.getDate(workAndInternship.StartTime)}</p>
            <p><span>Bitiş Tarihi:</span>{Utils.getDate(workAndInternship.EndTime)}</p>
            <p><span>Şirket:</span>{workAndInternship.Company.Name}</p>
            <p><span>Sektör:</span>{workAndInternship.Sector.Name}</p>
            <p><span>Lokasyon:</span>{WorksAndInternships.workLocation[workAndInternship.WorkLocationType-1].Name } {workAndInternship.City.Name}</p>
           <div>
          <div css={buttons}>
          <a css={website} href={`${workAndInternship.Company.Website}`} target="_blank"  rel="noreferrer">Web Sitesi</a>
            <a css={contact} href={`mailto:${workAndInternship.Company.Email}`}>İletişime Geç</a>
          </div>
          <Button>Başvur</Button>
           </div>
           </div>
        </div>
    )
}

export default WorkAndInternshipDetailCard;

const container = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const subcontainer = css`
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:20px;
    border:1px solid #ccc;
    border-radius:10px;
    width:600px;

    span{
        font-weight:600;
        padding-right:3px;
        text-transform:uppercase;
    }
`

const buttons = css`
    display:flex;
    justify-content:center;
    gap:20px;
    margin:20px 0;
`

const website = css`
    border:1px solid blue;
    padding:5px 10px;
    border-radius:10px;
    text-align:center;
    color:blue;
    text-decoration:none;
    font-size:18px;
    transition:all 0.3s;

    &:hover{
        background-color:blue;
        color:white;
    }
`     

const contact = css`
    border:1px solid green;
    padding:5px 10px;
    border-radius:10px;
    text-align:center;
    color:green;
    text-decoration:none;
    font-size:18px;

    transition:all 0.3s;

    &:hover{
        background-color:green;
        color:white;
    }
`