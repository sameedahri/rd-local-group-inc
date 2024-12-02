"use client";


interface ValidationMessageProps {
    id: string,
    message: string
}

const ValidationMessage:React.FC<ValidationMessageProps> = ({id, message}) => {
  return (
    <div id={id} className="absolute left-[50%] translate-x-[-50%] bottom-[-30px] z-50 text-[#F44336] font-gilroySemibold md:text-[16px] text-[14px] transition-all opacity-0">
      {message}
    </div>
  )
}

export default ValidationMessage