// eslint-disable-next-line @nx/enforce-module-boundaries
import Carousel from '../../../../libs/components/src/lib/components/carousel/Carousel';

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
    <>
      <Carousel images={images} />
    </>
  );
}

export default Index;
