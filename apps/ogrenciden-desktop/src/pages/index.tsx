import { css } from '@emotion/react';
import { Advantages, Carousel, Faq, HowItWorks, Statistics } from '@ogrenciden/components';

export function Index() {
  const images = [
    { image: '/7.png', description: "SANA GÖRE İLANLAR" },
    { image: '/1.png', description: "KİTAP  İLANLARI" },
    { image: '/2.png', description: "İŞ VE STAJ İLANLARI" },
    { image: '/3.png', description: "2.EL EŞYA İLANLARI" },
    { image: '/4.png', description: "NOT İLANLARI" },
    { image: '/5.png', description: "KİRALIK EV İLANLARI" },
    { image: '/6.png', description: "EV ARKADAŞI İLANLARI" },
  ];


  return (
    <div css={containerCSS}>
      <Carousel images={images} />
      <HowItWorks />
      <Statistics />
      <Faq />
      <Advantages />

    </div>
  );
}


const containerCSS = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default Index;
