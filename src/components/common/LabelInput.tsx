"use client";
import { Dispatch, SetStateAction, FormEvent } from "react";

interface LabelInputProps {
    label: string,
    inputType: string,
    inputId: string,
    stateValue: string,
    setState: Dispatch<SetStateAction<string>>
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    bottomMessage?: string | null
}

const LabelInput: React.FC<LabelInputProps> = ({label, inputType, inputId, stateValue, setState, required=true, minLength, maxLength, bottomMessage=null}) => {
  return (
    <div className="grid gap-y-1 relative">
        <label htmlFor={inputId} className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <input 
            type={inputType} 
            id={inputId}
            className="w-[100%] h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]"
            autoComplete="off"
            required={required}
            value={stateValue}
            minLength={minLength}
            maxLength={maxLength}
            onChange={(e: FormEvent<HTMLInputElement>) => {
                if(e) {
                    const target = e.target as HTMLInputElement;
                    setState(target.value);
                }
            }}
        />
        {bottomMessage !== null && <p className="absolute bottom-[-25px] left-0 text-[#262626] font-gilroyMedium text-[14px]">{bottomMessage}</p>}
    </div>
  )
}

export default LabelInput