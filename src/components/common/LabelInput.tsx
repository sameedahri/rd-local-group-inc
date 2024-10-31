"use client";
import { Dispatch, SetStateAction, FormEvent } from "react";

interface LabelInputProps {
    label: string,
    inputType: string,
    inputId: string,
    stateValue: string,
    setState: Dispatch<SetStateAction<string>>
    required?: boolean,
}

const LabelInput: React.FC<LabelInputProps> = ({label, inputType, inputId, stateValue, setState, required=true}) => {
  return (
    <div className="grid gap-y-1">
        <label htmlFor={inputId} className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <input 
            type={inputType} 
            id={inputId}
            className="w-[100%] h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]"
            autoComplete="off"
            required={required}
            value={stateValue}
            onChange={(e: FormEvent<HTMLInputElement>) => {
                if(e) {
                    const target = e.target as HTMLInputElement;
                    setState(target.value);
                }
            }}
        />
    </div>
  )
}

export default LabelInput