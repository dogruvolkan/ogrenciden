/** @jsxImportSource @emotion/react */
import { Category, City, SecondHands, Universities, } from "@ogrenciden/types";
import SelectBox from "../../form/SelectBox";
import Input from "../../form/Input";
import { css } from "@emotion/react";
import Textarea from "../../form/Textarea";
import ImgUpload from "../../form/ImgUpload";
import Button from "../../button/Button";
import { useState } from "react";
import  { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

 
interface Props {
    categories: Category.Category[];
    cities:City.City[];
    universities:Universities.University[];
}

export const SecondHandsNotice = (props:Props) => {
    const {cities , categories,universities} = props;

    const noticeType =[
        {ID:1 , Name :"İkinci el"},
        {ID:2 , Name : "Sıfır"}
    ]

    const currencies = [
        {ID:1 , Name :"USD"},
        {ID:2 , Name : "EUR"},
        {ID:1 , Name :"TRY"},
        {ID:2 , Name : "GBP"}
    ]

    const [notice , setNotice] = useState<Partial<SecondHands.SecondHand> | undefined>({
        NoticeType: "",
        Title: "",
        CategoryID: 0,
        Price: 0,
        PriceType: "",
        CityID: 0,
        Description: "",
        UniversityID:0,
        // ImagePath: string;
    })

    const handleNoticeType = (option: number) => {
        setNotice({
            ...notice,
            NoticeType: option.toString()
        });
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotice({
            ...notice,
            Title: e.target.value
        });
    }

    const handleCategories = (option: number) => {
        setNotice({
            ...notice,
            CategoryID: Number(option)
        });
    }

    const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotice({
            ...notice,
            Price: Number(e.target.value)
        });
    }

    const handlePriceType = (option: number) => {
        setNotice({
            ...notice,
            PriceType: option.toString()
        });
    }

    const handleCities = (option: number) => {
        setNotice({
            ...notice,
            CityID: Number(option),
            UniversityID:0
        });
    }

    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotice({
            ...notice,
            Description: e.target.value
        });
    }

    const filteredUniversities = universities.filter(university => university.CityID === notice?.CityID);

    const handleUniversities = (option: number) => {
        setNotice({
            ...notice,
            UniversityID: Number(option)
        });
    }

    const createNotice = () => {
        SecondHands.create(notice as SecondHands.SecondHand).then((res :any) =>{
            console.log("res", res)
            if (res?.error) {
                toast.warning(JSON.parse(res.error).message, {
                    autoClose: 2000,
                });
            } else {
                toast.success("Ekleme işlemi başarılı! Admin onayladıktan sonra yayınlancaktır.", {
                    autoClose: 2000,
                });
                //waiting close toast
                setTimeout(() => {
                    router.push("/notices/mine")
                }, 2000);
            }
        })
    }

    const router = useRouter();

    console.log(universities)
   

    return(
        <>
        <div css={containerCss}>
            <h1>2.El Eşya İlanı Oluştur</h1>
             <SelectBox options={noticeType} onSelectOption={handleNoticeType} label={"İlan Türü:"} optionLabel="Name" optionValue="ID" />
             <Input type={"text"} value={notice?.Title || ""} onChange={handleTitle} label={"Başlık:"} placeholder={"Laptop"} />
            <SelectBox options={categories} onSelectOption={handleCategories} label={"Kategori:"} optionLabel="Name" optionValue="ID" />
            <div css={priceCss}>
                <Input type={"text"} value={notice?.Price|| ""} onChange={handlePrice} label={"Fiyat:"} placeholder={"25.045"} />
                <SelectBox options={currencies} onSelectOption={handlePriceType} label={"Para Birimi:"} optionLabel="Name" optionValue="ID" />
            </div>
            <SelectBox options={cities} onSelectOption={handleCities} label={"Şehir:"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={filteredUniversities} onSelectOption={handleUniversities} label={"Üniversite"} optionLabel="Name" optionValue="ID" />
            <Textarea value={notice?.Description || ""} onChange={handleDescription} label={"Açıklama:"} placeholder="örn:i7 9.nesil 16gb ram laptop" />
            <ImgUpload onImageSelect={undefined} labelText={"Görsel:"}/>
            <Button size={"lg"} onClick={createNotice}>Yayınla</Button>  
        </div>
        <ToastContainer />
        </>
    )
}

export default SecondHandsNotice;

const containerCss = css`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px;
    border:1px solid lightgray;
    border-radius:20px;
    width:30%;
`

const priceCss = css `
    display:flex;
    gap:30px;

    input{
        width:260px;
    }

    select{
        width:260px;
    }
`