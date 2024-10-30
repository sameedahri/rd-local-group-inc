"use client";
import { Dispatch, SetStateAction, FormEvent } from "react";


interface PhoneNumberProps {
    countryCode: string,
    phoneNumber: string
}
interface PhoneInputProps {
    label: string,
    inputId: string,
    stateValue: PhoneNumberProps,
    setState: Dispatch<SetStateAction<PhoneNumberProps>>,
    required?: boolean
}

const PhoneInput: React.FC<PhoneInputProps> = ({label, inputId, stateValue, setState, required=false, }) => {
  return (
    <div className="grid gap-y-1">
        <label htmlFor="" className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <div className="flex gap-x-2">
            <select 
                className="w-[20%] min-w-[80px] max-w-[120px] md:h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]"
                value={stateValue.countryCode}
                onChange={(e: FormEvent<HTMLSelectElement>) => {
                    if(e) {
                        const target = e.target as HTMLSelectElement;
                        setState(prevValue => ({...prevValue, countryCode: target.value}));
                    }
                }}
            >
                <option value="+92">+92</option>
                <option value="+93">+93</option>
                <option value="+94">+94</option>
            </select>
            <input 
                type="tel" 
                id={inputId}
                className="w-[80%] md:h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]"
                autoComplete="off"
                required={required}
                value={stateValue.phoneNumber}
                onChange={(e: FormEvent<HTMLInputElement>) => {
                    if(e) {
                        const target = e.target as HTMLInputElement;
                        setState(prevValue => ({...prevValue, phoneNumber: target.value}));
                    }
                }}
            />
        </div>
    </div>
  )
}

export default PhoneInput
