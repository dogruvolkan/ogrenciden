import { css } from "@emotion/react";
import { SecondHands } from "@ogrenciden/types";
import {SecondHandNoticeCard} from "libs/components/src/lib/components/notices/secondHands/SecondHandNoticeCard";
import { GetServerSideProps } from "next";



interface Props {
    secondHandNotices:SecondHands.SecondHand[];
}

export const MyNotices = (props:Props) =>{
    const {secondHandNotices} = props
    console.log(secondHandNotices)
    return(
        <div css={containerCss}>
           <div css={secondHandNoticeContainerCss}>
            <h1>İkinci El İlanlarım</h1>
                <div css={secondHandNoticeCss}>
                    {secondHandNotices?.map((notice) => {
                        return (
                            <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID}/>
                        )
                    })}
                </div>
           </div>
           <div css={secondHandNoticeContainerCss}>
            <h1>Kitap & Not İlanlarım</h1>
                <div css={secondHandNoticeCss}>
                    {secondHandNotices?.map((notice) => {
                        return (
                            <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID}/>
                        )
                    })}
                </div>
           </div>
           <div css={secondHandNoticeContainerCss}>
            <h1>Ev & Ev Arkadaşı İlanlarım</h1>
                <div css={secondHandNoticeCss}>
                    {secondHandNotices?.map((notice) => {
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
    align-items:center;
    flex-direction:column;
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
    const jwt = context.req.cookies['jwt'];

    const secondHandNotices = await SecondHands.mySecondHandNotices({
        headers: {
            Authorization: `Bearer ${jwt}`,
          },
    })

    if (!jwt) {
        return {
          notFound: true,
        };
      }


    return {
        props: {
            secondHandNotices: secondHandNotices
        }
    }
}

export default MyNotices;