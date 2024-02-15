// eslint-disable-next-line @nx/enforce-module-boundaries
import { css } from '@emotion/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Carousel from '../../../../libs/components/src/lib/components/carousel/Carousel';
// eslint-disable-next-line @nx/enforce-module-boundaries
import HowItWorks from '../../../../libs/components/src/lib/components/howitworks/HowItWorks';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Statistics from '../../../../libs/components/src/lib/components/statistics/Statistics';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Faq from '../../../../libs/components/src/lib/components/faq/Faq';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Footer from '../../../../libs/components/src/lib/components/footer/Footer';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Advantages from '../../../../libs/components/src/lib/components/advantages/Advantages';


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
      <Footer />
    </div>
  );
}


const containerCSS = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default Index;
