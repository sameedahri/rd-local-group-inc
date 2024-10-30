"use client";


interface CancelButtonProps {
    text: string,
    onClick?: () => void
}

const CancelButton: React.FC<CancelButtonProps> = ({text, onClick=() => {}}) => {
  return (
    <button 
        type="button" 
        className="md:w-[101px] w-[83px] md:h-[59px] h-[48px]
           bg-white hover:bg-[#3E3D3D] md:rounded-[10px] rounded-[8px] border-2 border-[#4D4D4D] flex justify-center items-center
            text-black hover:text-darkBtn font-gilroySemibold md:text-[20px] text-[16px] transition"
        onClick={() => onClick()}
    >{text}</button>
  )
}

export default CancelButton