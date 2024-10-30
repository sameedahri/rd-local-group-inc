"use client";


interface AddButtonProps {
    text: string,
}

const AddButton: React.FC<AddButtonProps> = ({text}) => {
  return (
    <button 
        type="submit" 
        className="md:w-[101px] w-[83px] md:h-[59px] h-[48px]
          bg-[#3E3D3D] hover:bg-white md:rounded-[10px] rounded-[8px] border-2 border-[#4D4D4D] flex justify-center items-center
            text-darkBtn hover:text-black font-gilroySemibold md:text-[20px] text-[16px] transition"
    >{text}</button>
  )
}

export default AddButton