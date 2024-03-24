import { GetServerSideProps } from "next";
import { SecondHands } from '@ogrenciden/types';
import { css } from "@emotion/react";
import { SecondHandNoticeCard } from "@ogrenciden/components";

export interface Props {
    secondHand : SecondHands.SecondHand[];
}

export const Notices = (props: Props) => {
    const { secondHand } = props;

    console.log(secondHand)
    return(
        <div css={containerCss}>
           <div css={secondHandNoticeContainerCss}>
            <h1>İkinci El İlanlarım</h1>
                <div css={secondHandNoticeCss}>
                    {secondHand?.map((notice) => {
                        return (
                            <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID}/>
                        )
                    })}
                </div>
           </div>
           <div css={secondHandNoticeContainerCss}>
            <h1>Kitap & Not İlanlarım</h1>
                <div css={secondHandNoticeCss}>
                    {secondHand?.map((notice) => {
                        return (
                            <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID}/>
                        )
                    })}
                </div>
           </div>
           <div css={secondHandNoticeContainerCss}>
            <h1>Ev & Ev Arkadaşı İlanlarım</h1>
                <div css={secondHandNoticeCss}>
                    {secondHand?.map((notice) => {
                        return (
                            <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID}/>
                        )
                    })}
                </div>
           </div>
        </div>
    )
}


const containerCss = css`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    flex-wrap:wrap;
    gap:40px;
    padding:20px;
`

const secondHandNoticeContainerCss = css `
    display:flex;
    flex-direction:column;
    gap:20px;

    h1{
       font-size:2.0em;
       font-weight:bold;
    }
`

const secondHandNoticeCss = css `
    display:flex;
    gap:30px;
    align-items:center;
    justify-content:center;
`


export const getServerSideProps: GetServerSideProps = async (context) => {

    const secondHand = await SecondHands.publicList({
        filter: ['Published=true']
    })

    return {
        props: {
            secondHand: secondHand
        }
    }
}

export default Notices;