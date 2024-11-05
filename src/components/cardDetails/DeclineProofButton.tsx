"use client";


interface DeclineProofButtonProps {
  onClickFunction: () => void
}

const DeclineProofButton:React.FC<DeclineProofButtonProps> = ({onClickFunction}) => {
  return (
    <button 
        type="button" 
        className={`md:w-[211px] w-[123px] md:h-[53px] h-[31px] rounded-[4px] bg-[#F9D5DA] hover:bg-white border border-[#F44336] 
            text-[#F44336] font-gilroyBold md:text-[16px] text-[10px] flex justify-center items-center transition`}
        onClick={onClickFunction}
    >Decline Proof
    </button>
  )
}

export default DeclineProofButton