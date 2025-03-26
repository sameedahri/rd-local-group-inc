"use client";
import { Dispatch, SetStateAction } from "react";
import MaskedInput from "./MaskedInput";


interface PhoneMaskProps {
    label: string,
    inputId: string,
    setPhoneNumber: Dispatch<SetStateAction<string>>,
    required?: boolean
}

const PhoneMask: React.FC<PhoneMaskProps> = ({label, inputId, setPhoneNumber, required=false }) => {
  return (
    <div className="grid gap-y-1">
        <label htmlFor={inputId} className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <div className="flex gap-x-2">
            <MaskedInput setState={setPhoneNumber} placeholderText="Phone number" mask="__________" required={required} />
        </div>
    </div>
  )
}

export default PhoneMask