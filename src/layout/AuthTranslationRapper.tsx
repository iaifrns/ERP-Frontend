import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { englishText, frenchText, languageCode } from "@/constants/websiteText";
import { EnglishText, FrenchText } from "@/state/slice/languageSlice";
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const AuthTranslationRapper = () => {
    const language = useSelector((state: RootState) => state.Language)
    const dispatch = useDispatch()

    const handleOnChange = (value:string) => {
        if(value==languageCode.ENG){
            dispatch(EnglishText())
        }else{
            dispatch(FrenchText())
        }
    }
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="p-8 flex justify-end">
        <Select defaultValue={language.LAN} onValueChange={handleOnChange}>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder={language.LAN}  />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={englishText.LAN}>{englishText.LAN}</SelectItem>
            <SelectItem value={frenchText.LAN}>{frenchText.LAN}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthTranslationRapper;
