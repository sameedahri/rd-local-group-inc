"use client";


interface CancelButtonProps {
    text: string,
    buttonWidth?: string | null,
    onClickFunction?: () => void
}

const CancelButton: React.FC<CancelButtonProps> = ({text, buttonWidth=null, onClickFunction=() => {}}) => {
  return (
    <button 
        type="button" 
        className={`${buttonWidth ? buttonWidth : 'md:w-[101px] w-[83px]'} md:h-[59px] h-[48px]
           bg-white hover:bg-[#3E3D3D] md:rounded-[10px] rounded-[8px] border-2 border-[#4D4D4D] flex justify-center items-center
            text-black hover:text-darkBtn font-gilroySemibold md:text-[20px] text-[16px] transition`}
        onClick={onClickFunction}
    >{text}</button>
  )
}

export default CancelButton