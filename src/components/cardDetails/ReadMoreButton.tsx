"use client";
import Image from "next/image";
import rightArrow from "/public/assets/images/cardDetails/right-arrow-icon.svg";
import { Dispatch, SetStateAction } from "react";


interface ReadMoreButtonProps {
    isReadMoreOpen: boolean,
    setIsReadMoreOpen: Dispatch<SetStateAction<boolean>>
}

const ReadMoreButton:React.FC<ReadMoreButtonProps> = ({isReadMoreOpen, setIsReadMoreOpen}) => {


  // tailwind classes
  const arrowClasses = isReadMoreOpen ? "rotate-180" : "";
  return (
    <div className="flex items-center gap-x-1 ml-[29px] mt-3 md:hidden">
        <button 
            type="button"
            className="text-[#3C3C3C] font-gilroySemibold text-[12px] underline"
            onClick={() => setIsReadMoreOpen(prev => !prev)}
        >Read More</button>
        <Image src={rightArrow} alt="Arrow downwards" width={10} height={10} className={`transition ${arrowClasses}`} />
    </div>
  )
}

export default ReadMoreButton