/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"


export const HowItWorks = () => {

    const data = [
        { id: '1', title: 'Giriş Yap / Üye Ol', image: '/howitworks1.png' },
        { id: '2', title: 'İlan Ver', image: '/howitworks2.png' },
        { id: '3', title: 'İlanları İncele', image: '/howitworks3.png' },
        { id: '4', title: 'Satın Al Ya da Sat', image: '/howitworks4.png' },
    ]


    return (
        <div css={howItWorks}>
            <div css={howItWorksContent}>
                <h1>Nasıl Çalışır?</h1>
                <p>Öğrenciden.com, öğrencilerin ihtiyaçlarını karşılamak için kurulmuş bir platformdur. <br /> Öğrenciler, sadece öğrencilere özel olan bu platformda ihtiyaçlarını karşılayacaklar.</p>
            </div>
            <div css={howItWorksContainer}>
                {data.map((item) => (
                    <div key={item.id} css={howItWorksItem}>
                        <h5>{item.id}</h5>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const howItWorks = css`
    margin: 20px auto;
    border-radius: 20px;
    width: 100%;
    max-width: 90%;
    padding: 40px 0;
    background-color: #f5f5f5;
    display:flex;
    flex-direction: column;
    gap: 40px;
`

const howItWorksContent = css`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    h1{
        font-size: 2em;
        font-weight: bold;
    }

    p{
        text-align: center;
        font-size: 1.2em;
    }
`

const howItWorksContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color:fff;
`

const howItWorksItem = css`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    border:1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    position: relative;

   img{
         width: 150px;
         height: 150px;
         border-radius: 10px;
        border:1px solid lightgray;
        shadow: 0 0 10px 0 lightgray;
   }

   h5{
         position: absolute;
        top: -15px;
        right:10px;
        width: 30px;
        height: 30px;
        border: 1px solid lightgray;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
   }

   p{
        text-align: center;
        font-size: 1.2em;
        font-weight: bold;
   }

`

export default HowItWorks;
