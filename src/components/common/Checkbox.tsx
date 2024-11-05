"use client";


interface CheckboxProps {
    checkboxId?: string
}

const Checkbox:React.FC<CheckboxProps> = ({checkboxId}) => {
  return (
    <input type="checkbox" id={checkboxId} className="md:w-[22px] w-[13px] md:h-[20px] h-[11px] md:mt-0 mt-[5px]" />
  )
}

export default Checkbox