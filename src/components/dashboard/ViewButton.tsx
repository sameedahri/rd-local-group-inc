"use client";


const ViewButton = () => {
  return (
    <button 
      type="button" 
      className="md:w-[128px] w-[86px] md:h-[40px] h-[26px]
       bg-[#3E3D3D] hover:bg-white rounded-[10px] border-2 border-[#3E3D3D] flex justify-center items-center
       text-darkBtn hover:text-black font-gilroySemibold md:text-[16px] text-[13px] transition"
    >View
    </button>
  )
}

export default ViewButton