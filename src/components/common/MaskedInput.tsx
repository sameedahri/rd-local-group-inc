"use client";
import { Dispatch, SetStateAction } from 'react';
import { InputMask, generatePattern } from '@react-input/mask';


interface MaskedInputProps {
    setState: Dispatch<SetStateAction<string>>,
    placeholderText?: string,
    mask?: string,
    required?: boolean
}

const MaskedInput:React.FC<MaskedInputProps> = ({setState, placeholderText, mask='+_ ____ ____ __', required=true}) => {
    const options = {
        mask: mask,
        replacement: { _: /\d/ }
    };      

    return (
        <InputMask
            {...options}
            required={required}
            placeholder={placeholderText}
            autoComplete="off"
            className="w-[100%] md:h-[52px] h-[43px] border border-[#DFDFDF] focus:outline-inputOutline rounded-[5px] p-3 md:placeholder:text-[14px] placeholder:text-[12px] placeholder:text-[#D8D8D8]"
            onChange={(event) => {
                const value = event.target.value;
                setState(value);
                // const input = unformat(value, options);
                // const parts = formatToParts(value, options);
                // const pattern = generatePattern('full-inexact', options);
                generatePattern('full-inexact', options)
                // const isValid = RegExp(pattern).test(value);
            }}
        />
    )
}

export default MaskedInput