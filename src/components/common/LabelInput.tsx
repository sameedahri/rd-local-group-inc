"use client";

interface LabelInputProps {
    label: string,
    inputType: string,
    required?: boolean,
    onChange?: Function
}

const LabelInput: React.FC<LabelInputProps> = ({label, inputType, required=true, onChange=() => {}}) => {
  return (
    <div className="grid gap-y-1">
        <label htmlFor="" className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <input 
            type={inputType} 
            className="w-[100%] md:h-[52px] border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]"
            onChange={() => onChange()}
            autoComplete="off"
            required={required}
        />
    </div>
  )
}

export default LabelInput