"use client";


interface AcceptedButtonProps {
    isAccepted: boolean
}

const AcceptedButton: React.FC<AcceptedButtonProps> = ({isAccepted}) => {
  return (
    <button 
        type="button" 
        className={`md:w-[128px] w-[86px] md:h-[40px] h-[26px] ${isAccepted ? 'bg-[rgba(9,178,133,0.20)] border-[#09B285]' 
            : 'bg-[#F9D5DA] border-[#F44336]'} 
            rounded-[10px] border-2 flex justify-center items-center`}
    >
        <span className={`${isAccepted ? 'text-[#09B285]' : 'text-[#F44336]'} font-gilroyBold md:text-[16px] text-[13px]`}>
          {isAccepted ? "Accepted" : "Declined"}
        </span>
    </button>
  )
}

export default AcceptedButton