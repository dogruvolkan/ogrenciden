/** @jsxImportSource @emotion/react */
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Input from "../../../form/Input";
import SelectBox from "../../../form/SelectBox";
import Textarea from "../../../form/Textarea";
import Button from "../../../button/Button";
import { City, Sectors, WorksAndInternships } from "@ogrenciden/types";
import DatePicker from "../../../form/DatePicker";
import { useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";


interface Props {
    sectors: Sectors.Sector[];
    cities: City.City[];
}

export const WorkAndInternshipNotice = (props:Props) => {
    const {sectors,cities} = props;

    const [notice , setNotice] = useState<Partial<WorksAndInternships.WorksAndInternship> | undefined>({
        Title: "",
        Content: "",
        StartTime: undefined,
        EndTime: undefined,
        WorkType:"",
        WorkLocationType:"",
        SectorID:"",
    })

    const handleWorkType = (option: number) => {
        setNotice({
            ...notice,
            WorkType: option.toString()
        });
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotice({
            ...notice,
            Title: e.target.value
        });
    }

    const handleSector = (option: number) => {
        setNotice({
            ...notice,
            SectorID: option.toString()
        });
    }

    const handleWorkTypeLocation = (option: number) => {
        setNotice({
            ...notice,
            WorkLocationType: option.toString()
        });
    }

    const handleLocation = (option: number) => {
        setNotice({
            ...notice,
            CityID: Number(option),
        });   
    }

    const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotice({
            ...notice,
            Content: e.target.value
        });
    }

    const handleDateStartSelect = (date: Date | null) => {
        setNotice({
            ...notice,
            StartTime: date ? date.toISOString() : undefined
        });
    };

    const handleDateEndSelect = (date: Date | null) => {

        setNotice({
            ...notice,
            EndTime: date ? date.toISOString() : undefined
        });
    };


    const createNotice = () => {
        WorksAndInternships.create(notice as WorksAndInternships.WorksAndInternship).then((res :any) =>{
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
                    router.push("/")
                }, 2000);
            }
        })
    }

    const router = useRouter();


    return (
        <>
           <div css={containerCss}> 
           <h1>Staj & İş İlanı Oluştur</h1>
             <SelectBox options={WorksAndInternships.workType} onSelectOption={handleWorkType} label={"İş Türü"} optionLabel="Name" optionValue="ID" />
             <Input type={"text"} value={notice?.Title || ""} onChange={handleTitle} label={"Başlık:"} placeholder={"Golang developer"} />
             <SelectBox options={sectors} onSelectOption={handleSector} label={"Sektör"} optionLabel="Name" optionValue="ID" />
             <SelectBox options={WorksAndInternships.workLocation} onSelectOption={handleWorkTypeLocation} label={"İş Yeri"} optionLabel="Name" optionValue="ID" />
             <SelectBox options={cities} onSelectOption={handleLocation} label={"Konum"} optionLabel="Name" optionValue="ID" />
             <Textarea value={notice?.Content || ""} onChange={handleContent} label={"Açıklama:"} placeholder="İşle ilgili detayları girin" />
             <DatePicker onSelectDate={handleDateStartSelect} label={"Başlangıç Tarih:"} />
             <DatePicker onSelectDate={handleDateEndSelect} label={"Bitiş Tarih:"} />
            <Button size={"lg"} onClick={createNotice}>Yayınla</Button>  
           </div>
           <ToastContainer />
        </>
    )
}

export default WorkAndInternshipNotice;

const containerCss = css`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px;
    border:1px solid lightgray;
    border-radius:20px;
`