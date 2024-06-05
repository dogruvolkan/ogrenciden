import { css } from '@emotion/react';
import { Advantages, Carousel, Faq, HighlightRequests, HighlightSecondHands, HighlightWorkAndInternship, HowItWorks, Statistics } from '@ogrenciden/components';
import { SecondHands, UserRequest, WorksAndInternships } from '@ogrenciden/types';
import { GetServerSideProps } from 'next';


interface Props {
  requests: UserRequest.Request[];
  secondHands: SecondHands.SecondHand[];
  worksAndInternships: WorksAndInternships.WorksAndInternship[];
}

export function Index(props: Props) {
  const images = [
    { image: '/7.png', description: "SANA GÖRE İLANLAR" },
    { image: '/1.png', description: "KİTAP  İLANLARI" },
    { image: '/2.png', description: "İŞ VE STAJ İLANLARI" },
    { image: '/3.png', description: "2.EL EŞYA İLANLARI" },
    { image: '/4.png', description: "NOT İLANLARI" },
    { image: '/5.png', description: "KİRALIK EV İLANLARI" },
    { image: '/6.png', description: "EV ARKADAŞI İLANLARI" },
  ];


  const { requests ,secondHands ,worksAndInternships} = props;


  return (
    <div css={containerCSS}>
      <Carousel images={images} />
     <div css={highlightCss}>
     <div css={highlightRequests}>
     <h1 css={header}>Talepler</h1>
      <HighlightRequests  requests={requests}/>
      <a css={link} href="requests">Tümünü Gör</a>
     </div>
     <div css={highlightSecondHands}>
      <h1 css={header}>2.el Eşya İlanları</h1>
      <HighlightSecondHands  secondHands={secondHands}/>
      <a css={link} href="notices">Tümünü Gör</a>
     </div>
     <div css={highlightSecondHands}>
      <h1 css={header}>İş Ve Staj İlanları</h1>
      <HighlightWorkAndInternship  worksAndInternships={worksAndInternships}/>
      <a css={link} href="notices">Tümünü Gör</a>
     </div>
     </div>
      <HowItWorks />
      <Statistics />
      <Faq />
      <Advantages />

    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const requests = await UserRequest.publicList({
    limit: 5,
    filter: ['Published=true'],
    sort: ['-RequestStartDate'],
  });

  const secondHands = await SecondHands.publicList({
    limit: 5,
    filter: ['Published=true'],
    sort: ['-CreatedAt'],
  });

  const worksAndInternships = await WorksAndInternships.publicList({
    limit: 5,
    filter: ['Published=true'],
    sort: ['-CreatedAt'],
  });
  

  return {
    props: {
      requests: requests,
      secondHands: secondHands,
      worksAndInternships: worksAndInternships,
    },
  };
};


const containerCSS = css`
  display: flex;
  flex-direction: column;
  gap: 30px;

`

const highlightCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;

  h1{
    align-self: flex-start;
    font-size: 2em;
    font-weight: bold;
  }
`

const header = css`
 padding-left: 60px;
`

const link = css`
  border:1px solid #000;
  border-radius: 10px;
  font-size:20px;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 0.3s;

  &:hover{
    background-color: #000;
    color: #fff;
  }
`

const highlightRequests = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`



const highlightSecondHands = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`

export default Index;
