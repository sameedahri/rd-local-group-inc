"use client";


interface PhoneInputProps {
    label: string,
    required?: boolean
    onChange?: Function
}

const PhoneInput: React.FC<PhoneInputProps> = ({label, required=false, onChange=() => {}}) => {
  return (
    <div className="grid gap-y-1">
        <label htmlFor="" className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <div className="flex gap-x-2">
            <select className="w-[20%] min-w-[80px] max-w-[120px] md:h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]">
                <option>+92</option>
                <option>+93</option>
                <option>+94</option>
            </select>
            <input 
                type="tel" 
                className="w-[80%] md:h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]"
                onChange={() => onChange()}
                autoComplete="off"
            />
        </div>
    </div>
  )
}

export default PhoneInput