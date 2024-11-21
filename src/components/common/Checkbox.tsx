"use client";
import { FormEvent } from "react";


interface CheckboxProps {
    checkboxId: string,
    onChange?: (e: FormEvent<HTMLInputElement>) => void,
    width?: string,
    height?: string
}

const Checkbox:React.FC<CheckboxProps> = ({checkboxId, onChange, width, height}) => {
  return (
    <input 
      type="checkbox" 
      id={checkboxId} 
      className={`${width ? width : 'md:w-[22px] w-[13px]'} ${height ? height : 'md:h-[20px] h-[11px]'}`}
      required={true} 
      onChange={onChange}
    />
  )
}

export default Checkbox