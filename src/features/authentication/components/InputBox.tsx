import React from "react";
import { inputBoxType } from "../types/InputBoxType";
import { Label } from "@/components/ui/label";

const InputBox: React.FC<inputBoxType> = ({ type, label, placeholder }) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={label} className="font-semibold text-gray-500">{label}</Label>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        id={label}
        className="p-2 text-sm border rounded-lg"
      />
    </div>
  );
};

export default InputBox;
