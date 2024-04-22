/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WorksAndInternships } from "@ogrenciden/types";
import router from "next/router";
import { useCallback } from "react";


interface Props {
    workAndInternshipNotice: WorksAndInternships.WorksAndInternship;
}

export const WorkAndInternshipCard = (props:Props) => {

    const {workAndInternshipNotice} = props


    const handledNotice = useCallback(() => {
        if (workAndInternshipNotice.ID) {
            router.push(`/notices/detail/workAndInternship/${workAndInternshipNotice.ID}`)
        } else {
            router.push(`/workAndInternship`)
        }
    }, [workAndInternshipNotice.ID])


    function transformText(text:string , length:number){
        if(text.length <=length){
            return text
        }
        return text.slice(0,length) + "..."
    }

    return (
        <div css={cardContainerCSS} onClick={handledNotice}>
           
            <div>
                <p css={companyName}>{workAndInternshipNotice.Company.Name} <span css={badge(workAndInternshipNotice.WorkType == 2 ? true : false )}>
                {WorksAndInternships.workType[workAndInternshipNotice.WorkType -1]?.Name}
                    </span></p>
                <p css={title}>{workAndInternshipNotice.Title}</p>
                <p><span>İmkanlar:</span> {transformText(workAndInternshipNotice.Content ,160)}</p>
                <p><span>Konum:</span> {WorksAndInternships.workLocation[workAndInternshipNotice.WorkLocationType-1].Name }, {workAndInternshipNotice.City.Name}</p>
                <div css={buttons}>
                <a css={website} href={`${workAndInternshipNotice.Company.Website}`} target="_blank"  rel="noreferrer">Web Sitesi</a>
                <a css={contact} href={`mailto:${workAndInternshipNotice.Company.Email}`}>İletişime Geç</a>
                </div>
            </div>
        </div>
    )

}

export default WorkAndInternshipCard;

const cardContainerCSS = css`
    position:relative;
    width:300px;
    height:350px;
    padding:10px 20px;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    cursor:pointer;

    span{
        font-weight:600;
    }
    p{
        padding-bottom:3px;
    }
`

const companyName = css`
    font-weight:600;
    font-size:20px;
    text-align:center;
    margin-bottom:10px;
`

const badge = (isWork:boolean) => css`
    background-color:${isWork ? 'red' : 'purple'};
    color:white;
    padding:5px 10px;
    border-radius:10px;
    font-size:14px;
    margin-left:10px;
    margin-right:10px;
    position:absolute;
    right:0px;
    top:10px;

`

const title = css`
    font-weight:800;
    font-size:16px;
`

const buttons = css`
    position:absolute;
    bottom:20px;
    display:flex;
    justify-content:center;
    gap:20px;
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