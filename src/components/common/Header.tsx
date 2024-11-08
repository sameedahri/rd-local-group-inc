"use client";
import Image from "next/image";
import logo from "/public/assets/images/login/logo.png";
import LogoutButton from "../dashboard/LogoutButton";


interface HeaderProps {
    isAdmin?: boolean
}

const Header: React.FC<HeaderProps> = ({isAdmin=false}) => {
    return (
        <header className="w-[100%] h-[95px] bg-white flex justify-between items-center 2xl:pl-16 2xl:pr-32 lg:pl-12 lg:pr-24 sm:px-8 px-4">
            <div>
                <Image src={logo} alt="Logo" width={55} height={52} />
            </div>
           <div className="flex justify-center gap-3">
                <LogoutButton isAdmin={isAdmin} />
                <button 
                    type="button"
                    className="w-[46px] h-[46px] bg-[#AB877E] rounded-full text-darkBtn font-gilroySemibold text-[20px]"
                >A</button>
           </div>
        </header>
    )
}

export default Header