"use client";


interface AddButtonProps {
    text: string,
    isSubmit?: boolean | null,
    buttonWidth?: string | null,
    buttonHeight?: string | null,
    fontSize?: string | null,
    onClickFunction?: () => void | null
}

const AddButton: React.FC<AddButtonProps> = ({text, isSubmit=true, buttonWidth=null, buttonHeight=null, fontSize=null, onClickFunction=null}) => {
  
  return (
    <button 
        type={isSubmit ? 'submit' : 'button'}
        className={`${buttonWidth ? buttonWidth : 'md:w-[101px] w-[83px]'} ${buttonHeight ? buttonHeight : 'md:h-[59px] h-[48px]'}
          bg-[#3E3D3D] hover:bg-white md:rounded-[10px] rounded-[8px] border-2 border-[#4D4D4D] flex justify-center items-center
            text-darkBtn hover:text-black font-gilroySemibold ${fontSize ? fontSize : 'md:text-[20px] text-[16px]'} transition`}
        onClick={onClickFunction ? onClickFunction : () => {}}
    >{text}</button>
  )
}

export default AddButton