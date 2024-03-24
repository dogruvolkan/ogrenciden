/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Accordion from "../accordion/Accordion"



export const Faq = () => {

    const faq = [
        {
            id: "1",
            question: "Nasıl üye olabilirim?",
            answer: "Öğrenciden.com'a üye olmak için öncelikle ana sayfada bulunan 'Giriş Yap' butonuna tıklayarak üye olabilirsiniz. Üye olurken adınız, soyadınız, e-posta adresiniz ve şifreniz gibi bilgileri girmeniz gerekmektedir. Üye olduktan sonra ilan verebilir, ilanları inceleyebilir ve satın alabilirsiniz.",
            defaultOpen: false,
        },
        {
            id: "2",
            question: "İlan vermek için ne yapmalıyım?",
            answer: "İlan vermek için öncelikle üye olmanız gerekmektedir. Üye olduktan sonra 'İlan Ver' butonuna tıklayarak ilan verebilirsiniz. İlan verirken ilan başlığı, ilan açıklaması, fiyat, kategori, ilan fotoğrafı gibi bilgileri girmeniz gerekmektedir.",
            defaultOpen: false,
        },
        {
            id: "3",
            question: "Talep oluştur ne demek?",
            answer: "Talep oluşturma özelliği, kullanıcıların ihtiyaç duydukları ürünleri belirterek, bu ürünlerin ilanlarının yayınlanmasını sağlar. Kullanıcılar talep oluşturarak, ihtiyaç duydukları ürünlerin ilanlarını bekleyebilirler. Bu özellik sayesinde, kullanıcılar ihtiyaç duydukları ürünlerin ilanlarını beklerken, ilan verenler de talep edilen ürünlerin ilanlarını yayınlayarak, kullanıcıların ihtiyaçlarını karşılayabilirler.",
            defaultOpen: true,

        },
        {
            id: "4",
            question: "Bu hizmetten yararlanmanın fiyatı nedir?",
            answer: "Bu hizmetin bedeli yoktur. Yeni reklamlar oluşturmak, alıcılar ve satıcılar için tamamen ücretsizdir. Bu hizmeti kullanmak için sizden ücret alınmaz.",
            defaultOpen: false,
        },
        {
            id: "5",
            question: "İlanların ogrenciden.com tarafından mı satılıyor?",
            answer: "Hayır. ogrenciden.com olarak burada bir şey satmıyoruz. Biz sadece satıcılar ve alıcılar için bir platform sağlıyoruz. Burada listelenen tüm ürünler geliştiriciler tarafından yayınlanmıştır.",
            defaultOpen: false,
        },
        {
            id: "6",
            question: "Satıcı ile nasıl iletişim kurabilirim?",
            answer: "Satıcının iletişim bilgileri satıcı profil sayfasında bulunmaktadır. İlan sahibi ile iletişime geçmek için satıcı profilinde bulunan telefon numarasını arayabilir veya mesaj atabilirsiniz.",
            defaultOpen: false,
        },

    ]

    return (
        <div css={faqContainerCss}>
            <h1>Sıkça Sorulan Sorular</h1>
            {faq.map((item) => (
                <div key={item.id}>
                    <Accordion question={item.question} answer={item.answer} defaultOpen={item.defaultOpen} />
                </div>
            ))}
        </div>
    )
}


const faqContainerCss = css`
    margin: 20px auto;
    border-radius: 20px;
    width: 100%;
    max-width: 90%;
    padding: 40px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
    background-color: #f5f5f5;

    h1{
        font-size:2em;
        font-weight:bold;
    }
`

export default Faq;