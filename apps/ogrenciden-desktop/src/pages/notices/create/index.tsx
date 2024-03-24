import { css } from "@emotion/react";
import { BooksAndNotes, HouseAndHouseBody, WorkAndInternship } from "@ogrenciden/components";
import { Category, City, Universities } from "@ogrenciden/types";
import { SecondHandsNotice } from "libs/components/src/lib/components/notices/secondHands/SecondHandsNotice";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface Props {
    categories: Category.Category[];
    cities: City.City[];
    universities:Universities.University[];
}


export const CreateNoticesContainer = (props:Props) =>{

    const {categories ,cities,universities} = props;

    const [showBooksAndNotes, setShowBooksAndNotes] = useState<boolean>(true);
    const [showSecondHands, setShowSecondHands] = useState<boolean>(false);
    const [showWorkAndInternship, setShowWorkAndInternship] = useState<boolean>(false);
    const [showHouseAndHouseBody, setShowHouseAndHouseBody] = useState<boolean>(false);

    const handleToggleState = (targetState: string) => {
        setShowBooksAndNotes(targetState === 'booksAndNotes' ? !showBooksAndNotes : false);
        setShowSecondHands(targetState === 'secondHands' ? !showSecondHands : false);
        setShowWorkAndInternship(targetState === 'workAndInternship' ? !showWorkAndInternship : false);
        setShowHouseAndHouseBody(targetState === 'houseAndHouseBody' ? !showHouseAndHouseBody : false);
    };


    return (
        <div css={createNoticeContainerCss}>
            <h1>İlan Oluştur</h1>
            <div css={noticeTypeCss}>
                <div css={typeCss(showBooksAndNotes)} onClick={() => handleToggleState('booksAndNotes')}><div> Kitap & Not  İlanı Ver<AiOutlinePlusCircle css={addIconCss}/></div></div>
                <div css={typeCss(showSecondHands)} onClick={() => handleToggleState('secondHands')}><div>2.El Eşya  İlanı Ver<AiOutlinePlusCircle css={addIconCss}/></div></div>
                <div css={typeCss(showWorkAndInternship)} onClick={() => handleToggleState('workAndInternship')}><div>Staj & İş İlanı Ver<AiOutlinePlusCircle css={addIconCss}/></div></div>
                <div css={typeCss(showHouseAndHouseBody)} onClick={() => handleToggleState('houseAndHouseBody')}><div> Ev & Ev arkadaşı  İlanı Ver<AiOutlinePlusCircle css={addIconCss}/></div></div>
            </div>
            {showBooksAndNotes && <BooksAndNotes/>}
            {showSecondHands && <SecondHandsNotice categories={categories} cities={cities} universities={universities}/>}
            {showWorkAndInternship && <WorkAndInternship/>}
            {showHouseAndHouseBody && <HouseAndHouseBody />}
        </div>
    )
}

export default CreateNoticesContainer;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const categories = await Category.publicList();
    const cities = await City.publicList();
    const universities = await Universities.publicList();

    return {
        props: {
            categories: categories,
            cities: cities,
            universities:universities
        }
    }

}

const createNoticeContainerCss = css`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:20px;

    h1{
        font-size:2em;
        font-weight:bold;
    }
`

const noticeTypeCss = css `
    display:flex;
    align-items:center;
    justify-content:center;
    width:50%;
    flex-wrap:wrap;
    gap:20px;
   
`
const typeCss = (active:boolean) => css`
    border:3px solid ${active ? "green" :"lightgray"} ;
    width:48%;
    padding:20px;
    text-align:center;
    border-radius:10px;
    position:relative;

    &:hover{
        cursor:pointer;
        background-color:#f5f5f5;
    }

    div{
        display:flex;
       align-items:center;
       justify-content:flex-start;
    }
`

const addIconCss = css`
    font-size:1.5em;
    color:green;
    position:absolute;
    right:20px;
`
