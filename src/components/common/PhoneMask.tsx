"use client";
import { Dispatch, SetStateAction, FormEvent } from "react";
import MaskedInput from "./MaskedInput";


interface PhoneMaskProps {
    label: string,
    inputId: string,
    setPhoneNumber: Dispatch<SetStateAction<string>>,
    setCountryCode: Dispatch<SetStateAction<string>>,
    countryCode: string,
    required?: boolean
}

const PhoneMask: React.FC<PhoneMaskProps> = ({label, inputId, setPhoneNumber, setCountryCode, countryCode, required=false }) => {
  return (
    <div className="grid gap-y-1">
        <label htmlFor={inputId} className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <div className="flex gap-x-2">
            <select 
                className="w-[20%] min-w-[80px] max-w-[120px] md:h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]"
                value={countryCode}
                onChange={(e: FormEvent<HTMLSelectElement>) => {
                    if(e) {
                        const target = e.target as HTMLSelectElement;
                        setCountryCode(target.value);
                    }
                }}
            >
                <option value="+1">+1</option>
                <option value="+2">+2</option>
                <option value="+3">+3</option>
            </select>
            <MaskedInput setState={setPhoneNumber} placeholderText="Phone number" mask="____ ____ __" required={required} />
        </div>
    </div>
  )
}

export default PhoneMask