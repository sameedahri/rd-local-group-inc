"use client";


interface CheckboxProps {
    checkboxId?: string
}

const Checkbox:React.FC<CheckboxProps> = ({checkboxId}) => {
  return (
    <input type="checkbox" id={checkboxId} className="w-[22px] h-[20px]" />
  )
}

export default Checkbox