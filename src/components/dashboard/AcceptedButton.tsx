"use client";


interface AcceptedButtonProps {
    isAccepted: boolean,
    buttonWidth?: string,
    buttonHeight?: string,
    borderRadius?: string
}

const AcceptedButton: React.FC<AcceptedButtonProps> = ({isAccepted, buttonWidth, buttonHeight, borderRadius}) => {
  return (
    <button 
        type="button" 
        className={`${buttonWidth ? buttonWidth : 'md:w-[128px] w-[86px]'} 
          ${buttonHeight ? buttonHeight : 'md:h-[40px] h-[26px]'}
            ${isAccepted ? 'bg-[rgba(9,178,133,0.20)] border-[#09B285] text-[#09B285]' 
            : 'bg-[#F9D5DA] border-[#F44336] text-[#F44336]'} 
             ${borderRadius ? borderRadius : 'rounded-[10px]'} border-2 flex justify-center items-center font-gilroyBold md:text-[16px] text-[13px] cursor-default`}
    >{isAccepted ? "Accepted" : "Declined"}
    </button>
  )
}

export default AcceptedButton