import { City, HouseAndHBody, SecondHands } from "@ogrenciden/types";
import { useState } from "react";
import SelectBox from "../../../../form/SelectBox";
import DatePicker from "../../../../form/DatePicker";
import Textarea from "../../../../form/Textarea";
import Input from "../../../../form/Input";
import Button from "../../../../button/Button";

interface Props {
    cities :City.City[];
}


export const HouseBodyNotice = (props:Props) => {

    const {cities} = props;

    const [houseBodyNotice, setHouseBodyNotice] = useState<Partial<HouseAndHBody.HouseBody> | undefined >({
        HouseLocation: '',
        MoveDate: '',
        MonthlyRent: '',
        PriceType: '',
        Gender: '',
        Age: '',
        About: '',
        Published: false,
        Status: '',
        StartTime: '',
        EndTime: '',
      });

    const handleLocation = (option:number) => {
        setHouseBodyNotice({
          ...houseBodyNotice,
          HouseLocation: option.toString()
        })
      }
    
      const handleMoveDate = (date:Date | null) => {
        setHouseBodyNotice({
          ...houseBodyNotice,
          MoveDate: date ? date.toISOString() : undefined
        })
      }
    
      const handleMonthlyRent = (e:React.ChangeEvent<HTMLInputElement>) => {
        setHouseBodyNotice({
          ...houseBodyNotice,
          MonthlyRent: e.target.value
        })
      }
    
      const handlePriceType = (option:number) => {
        setHouseBodyNotice({
          ...houseBodyNotice,
          PriceType: option.toString()
        })
      }
    
      const handleAge = (option:number) => {
        setHouseBodyNotice({
          ...houseBodyNotice,
          Age: option.toString()
        })
      }
    
      const handleGender = (option:number) => {
        setHouseBodyNotice({
          ...houseBodyNotice,
          Gender : option.toString()
        })
      }
    
      const handleAbout = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setHouseBodyNotice({
          ...houseBodyNotice,
          About: e.target.value
        })
      }

    return (
        <div>
            <h1>Aradığım Ev Bilgileri</h1>
            <div>
            <SelectBox options={cities} onSelectOption={handleLocation} label={"Nerede ev arıyorsun?"} optionLabel="Name" optionValue="ID" />
            <DatePicker onSelectDate={handleMoveDate} label={"Ne zaman taşınabilirsin?:"} />
            <Input type={"number"} value={houseBodyNotice?.MonthlyRent || ""} onChange={handleMonthlyRent} label={"Aylık ne kadar kira verebilirsin?:"} placeholder={"Miktar"} />
            <SelectBox options={SecondHands.currencies} onSelectOption={handlePriceType} label={"Para Birimi:"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={HouseAndHBody.AgeArray} onSelectOption={handleAge} label={"Aradığın yaş aralığı nedir?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={HouseAndHBody.GenderArray} onSelectOption={handleGender} label={"Aradığın cinsiyet nedir?"} optionLabel="Name" optionValue="ID" />
            <Textarea value={houseBodyNotice?.About || ""} onChange={handleAbout} label={"Kendini anlatır mısın?:"} placeholder="Düzenli ve temiz biriyim..." />
            <Button size={"lg"} onClick={undefined}>Yayınla</Button>  
      </div>  
        </div>
    )
}

export default HouseBodyNotice;