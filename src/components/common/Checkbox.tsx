"use client";
import { FormEvent } from "react";


interface CheckboxProps {
    checkboxId: string,
    onChange?: (e: FormEvent<HTMLInputElement>) => void
}

const Checkbox:React.FC<CheckboxProps> = ({checkboxId, onChange}) => {
  return (
    <input 
      type="checkbox" 
      id={checkboxId} 
      className="md:w-[22px] w-[13px] md:h-[20px] h-[11px] md:mt-0 mt-[5px]" 
      required={true} 
      onChange={onChange}
    />
  )
}

export default Checkbox