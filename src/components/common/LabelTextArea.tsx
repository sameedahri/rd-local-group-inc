"use client";
import {Dispatch, SetStateAction, FormEvent} from "react";


interface LabelTextAreaProps {
    label: string,
    textAreaId: string,
    stateValue: string,
    setState: Dispatch<SetStateAction<string>>
    required?: boolean,
    width?: string,
    height?: string,
}

const LabelTextArea: React.FC<LabelTextAreaProps> = ({label, textAreaId, stateValue, setState, required=false, width="w-[100%]", height="md:h-[300px] h-[172px]"}) => {
  return (
    <div className="grid gap-y-1">
        <label htmlFor={textAreaId} className="text-label font-gilroySemibold text-[16px]">{label}</label>
        <textarea 
            id={textAreaId}
            className={`${width} ${height} border border-[#DADADA] focus:outline-inputOutline rounded-[7px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]`}
            autoComplete="off"
            required={required}
            value={stateValue}
            onChange={(e: FormEvent<HTMLTextAreaElement>) => {
                if(e) {
                    const target = e.target as HTMLTextAreaElement;
                    setState(target.value);
                }
            }}
        ></textarea>
    </div>
  )
}

export default LabelTextArea