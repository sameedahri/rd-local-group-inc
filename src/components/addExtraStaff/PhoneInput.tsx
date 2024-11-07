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
                <option value="+1">+1</option>
                <option value="+2">+2</option>
                <option value="+3">+3</option>
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
                placeholder="1234 5678 90"
                pattern="[0-9]{4} [0-9]{4} [0-9]{2}"
            />
        </div>
    </div>
  )
}

export default PhoneInput
