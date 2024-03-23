import { css } from "@emotion/react";
import { Button, DatePicker, Input, SelectBox, Textarea } from "@ogrenciden/components";
import { UserRequest, Category } from "@ogrenciden/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    categories: Category.Category[];
}

export const CreateRequestContainer = (props: Props) => {

    const { categories } = props;
    console.log("categories", categories)


    categories.map((option, index) => {
        return <div key={index} >{option.Name}</div>
    })


    const [requests, setRequests] = useState<Partial<UserRequest.Request> | undefined>({
        Title: "",
        Description: "",
        // ImagePath: "",
        Published: false,
        CategoryID: 0,
        RequestStartDate: undefined,
        RequestEndDate: undefined
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequests({
            ...requests,
            Title: e.target.value
        });
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRequests({
            ...requests,
            Description: e.target.value
        });
    }

    const handleOptionSelect = (option: number) => {
        setRequests({
            ...requests,
            CategoryID: Number(option)
        });
    };

    const handleDateStartSelect = (date: Date | null) => {
        setRequests({
            ...requests,
            RequestStartDate: date ? date.toISOString() : undefined
        });
    };

    const handleDateEndSelect = (date: Date | null) => {

        setRequests({
            ...requests,
            RequestEndDate: date ? date.toISOString() : undefined
        });
    };

    // const handleImageSelect = (image: File) => {
    //     setRequests({
    //         ...requests,
    //         ImagePath: image.name
    //     });
    // }

    console.log("request", requests)

    const CreateRequest = () => {

        UserRequest.create(requests as UserRequest.Request).then((res: any) => {
            console.log("res", res)
            if (res?.error) {
                toast.warning(JSON.parse(res.error).message, {
                    autoClose: 2000,
                });
            } else {
                toast.success("Ekleme işlemi başarılı!", {
                    autoClose: 2000,
                });
                //waiting close toast
                setTimeout(() => {
                    router.push("/requests")
                }, 2000);
            }
        })
    }

    const router = useRouter();

    return (
        <div css={createRequestContainerCss}>
            <div css={createRequestCss}>
                <h1 css={createRequestHeaderCss}>Talep Oluştur</h1>
                <Input type={"text"} value={requests?.Title || ""} onChange={handleInputChange} label={"Başlık:"} placeholder={"örn:Hukuka giriş kitap , ev arkadaşı"} />
                <SelectBox options={categories} onSelectOption={handleOptionSelect} label={"Kategori:"} optionLabel="Name" optionValue="ID" />
                <Textarea value={requests?.Description || ""} onChange={handleTextareaChange} label={"Açıklama:"} placeholder="örn:Hukuka giriş kitabına ihtiyacım var." />
                <DatePicker onSelectDate={handleDateStartSelect} label={"Başlangıç Tarih:"} />
                <DatePicker onSelectDate={handleDateEndSelect} label={"Bitiş Tarih:"} />
                {/* <ImgUpload onImageSelect={handleImageSelect} /> */}
                <Button size={"lg"} onClick={CreateRequest}>Oluştur</Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const categories = await Category.publicList();

    return {
        props: {
            categories: categories
        }
    }

}

const createRequestContainerCss = css`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:50px;
`

const createRequestCss = css`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px 50px;
    border:1px solid lightgray;
    border-radius:20px;
    width:500px;
`

const createRequestHeaderCss = css`
    font-size:2em;
    font-weight:bold;
    text-align:center;
`

export default CreateRequestContainer;
