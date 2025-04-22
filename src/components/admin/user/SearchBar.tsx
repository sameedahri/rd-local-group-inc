"use client"
import searchIcon from "/public/assets/images/admin/user/search-icon.svg";
import Image from "next/image";
import { SetStateAction, Dispatch } from "react";

interface SearchBarProps {
  setFilterText?: Dispatch<SetStateAction<string>>
}
const SearchBar = ({setFilterText}: SearchBarProps) => {

  return (
    <div className="flex items-center w-[100%] h-[57px] bg-[#F3EEED] rounded-[8px] p-[11px] mt-[24px]">
        <div className="relative w-[100%]">
            <input 
                type="search" 
                className="sm:w-[335px] w-[100%] h-[45px] rounded-[22px] border border-[#DADADA] focus:outline-inputOutline ps-[40px] pe-[10px] 
                    placehoder:text-[#BCBCBC] placeholder:font-gilroyMedium placeholder:text-[14px]"
                placeholder="Search by Reference or client"
                onChange={e => {
                  if(setFilterText) setFilterText(e.target.value)
                }}
            />
            <Image src={searchIcon} alt="Search" width={19} height={19} className="absolute left-[15px] top-[50%] translate-y-[-50%]" />
        </div>
    </div>
  )
}

export default SearchBar