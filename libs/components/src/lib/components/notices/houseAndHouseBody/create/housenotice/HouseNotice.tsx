import { City, House, HouseAndHBody, SecondHands } from "@ogrenciden/types";
import ImgUpload from "../../../../form/ImgUpload";
import Input from "../../../../form/Input";
import SelectBox from "../../../../form/SelectBox";
import { useState } from "react";
import Textarea from "../../../../form/Textarea";
import Button from "../../../../button/Button";

interface Props {
    cities: City.City[];
  }


export const HouseNotice = (props:Props) => {
    const {cities} = props;

    const [houseNotice, setHouseNotice] = useState<Partial<House.HouseBody> | undefined >({
        HouseLocation: '',
        Deposit:'',
        StayTime: '',
        MonthlyRent: '',
        PriceType: '',
        StayPersonCount: '',
        CustomRoom: '',
        Gender: '',
        Age: '',
        Pet: '',
        Cigarette: '',
        Heat: '',
        RoomType:'',
        About: '',
      });

    return (
        <div>
            <h1>Ev Detayları</h1>
            <p>Ev veya oda arayanlar size burada girdiğiniz bilgiler sayesinde ulaşabilecekler.</p>
            <ImgUpload onImageSelect={undefined} labelText={"Kendini anlatan fotoğraflar eklemen kişilerin seninle iletişime geçme olasılığını %90’e kadar arttıracaktır:"}/>
            <SelectBox options={cities} onSelectOption={undefined} label={"Nerede ev arıyorsun?"} optionLabel="Name" optionValue="ID" />
            <Input type={"number"} value={houseNotice?.MonthlyRent || ""} onChange={undefined} label={"Aylık ne kadar kira verebilirsin?:"} placeholder={"Miktar"} />
            <SelectBox options={SecondHands.currencies} onSelectOption={undefined} label={"Para Birimi:"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.DepositArray} onSelectOption={undefined} label={"Depozito var mı, ne kadar?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.StayTimeArray} onSelectOption={undefined} label={"Ne kadar süreliğine ev arkadaşı arıyorsun?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.StayPersonCountArray} onSelectOption={undefined} label={"Evde toplam kaç kişi kalacak?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.CustomRoomArray} onSelectOption={undefined} label={"Özel oda var mı?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={HouseAndHBody.AgeArray} onSelectOption={undefined} label={"Aradığın yaş aralığı nedir?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={HouseAndHBody.GenderArray} onSelectOption={undefined} label={"Aradığın cinsiyet nedir?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.PetArray} onSelectOption={undefined} label={"Evcil hayvan getirilebilir mi?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.CigaretteArray} onSelectOption={undefined} label={"Evde sigara içilebilir mi?"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.HeatArray} onSelectOption={undefined} label={"Isıtma"} optionLabel="Name" optionValue="ID" />
            <SelectBox options={House.RoomTypeArray} onSelectOption={undefined} label={"Oda Tipi"} optionLabel="Name" optionValue="ID" />
            <Textarea value={House?.About || ""} onChange={undefined} label={"Kendini anlatır mısın?:"} placeholder="Düzenli ve temiz biriyim..." />
            <Button size={"lg"} onClick={undefined}>Yayınla</Button>  
        </div>
    )
}

export default HouseNotice;