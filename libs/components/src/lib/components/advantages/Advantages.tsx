/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const Advantages = () => {

    const advantages = [
        { title: 'Güvenilirlik', description: 'Alışveriş yaparken güvenilir bir platformda olduğunuzu bilmek size huzur verir.' },
        { title: 'Ağ', description: 'Alışveriş yaparak iş ağınızı genişletebilirsiniz. Bu yeni insanlarla tanışmak için harika bir yoldur.' },
        { title: 'Düşük maliyet', description: 'Tüm ihtiyaçlarınızı daha düşük maliyetlerle karşılayabilirsiniz.' },
        { title: 'Çevre', description: 'Satın aldığınız ürünlerin daha uzun yıllar boyunca kullanılmasını sağlayarak doğaya pozitif bir katkıda bulunabilirsiniz.' },
        { title: 'Kolaylık', description: 'Sadece birkaç tıklama ile ihtiyacınız olan ürünleri bulabilirsiniz.' },
    ]

    return (
        <div css={advantagesCss}>
            <h1>Avantajlar</h1>
            <div css={cardContainerCss}>
                {advantages.map((advantage, index) => (
                    <div css={cardCss} key={index}>
                        <h3>{advantage.title}</h3>
                        <p>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const advantagesCss = css`
    margin: 20px auto;
    border-radius: 20px;
    width: 100%;
    max-width: 90%;
    padding: 40px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:20px;
    background-color: #5080D7;

    h1{
        font-size:2em;
        font-weight:bold;
        color:white;
    }
`

const cardContainerCss = css`
    width:850px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:25px;
    flex-wrap:wrap;
`

const cardCss = css`
    width:400px;
    background-color:#fff;
    border-radius:10px;
    padding:10px 20px;
`

export default Advantages;