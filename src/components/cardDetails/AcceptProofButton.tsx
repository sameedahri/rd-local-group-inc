"use client";


interface AcceptProofButtonProps {
    onClickFunction: () => void
}

const AcceptProofButton:React.FC<AcceptProofButtonProps> = ({onClickFunction}) => {
  return (
    <button 
        type="button" 
        className={`md:w-[211px] w-[86px] md:h-[53px] h-[26px] rounded-[4px] bg-[rgba(9,178,133,0.20)] hover:bg-white border border-[#09B285] 
            text-[#09B285] font-gilroyBold md:text-[16px] text-[13px] flex justify-center items-center transition`}
        onClick={onClickFunction}
    >Accept Proof
    </button>
  )
}

export default AcceptProofButton