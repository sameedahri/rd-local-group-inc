"use client";
import { Dispatch, SetStateAction, FormEvent } from "react";


interface SetupFeeProps {
    stateValue: string,
    setState: Dispatch<SetStateAction<string>>,
    isOneTimePayment: boolean
}

const SetupFeeInput:React.FC<SetupFeeProps> = ({stateValue, setState, isOneTimePayment}) => {
  return (
    <div className="inline-block relative">
        <input 
            className="lg:w-[100px] w-[80px] lg:h-[38px] h-[20px] border boder-[#DADADA] rounded-[7px] text-[#262626] font-gilroyBold lg:text-[19px] text-[16px] mx-2 lg:translate-y-0 translate-y-[2px] ps-[15px] pe-[28px]" 
            type="text"
            onChange={(e: FormEvent<HTMLInputElement>) => {
                const target = e.target as HTMLInputElement;
                setState(target.value);
            }}
            value={stateValue}
            disabled={isOneTimePayment}
        />
        <span className="absolute top-[50%] translate-y-[-50%] right-[25px] z-50 text-[#262626] font-gilroyBold lg:text-[19px] text-[16px]">$</span>
    </div>
  )
}

export default SetupFeeInput